import { getClient } from "$lib/functions/getClient";
import query from "$lib/db/shopPage_old";
import filtersQuery from "$lib/db/filterQuery";
import { SHOP_API_URL } from "$env/static/private";
import type { Product } from "$lib/types/orderTypes.js";

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ params, url }) => {
  let productType = url.searchParams.getAll("category");
  let vintage = url.searchParams.getAll("vintage");
  let wineType = url.searchParams.getAll("wineType");
  let volume = url.searchParams.getAll("volume").map((str) => {
    return parseFloat(str);
  });

  const getProducts = async () => {
    const response = await fetch(SHOP_API_URL + "/products?page=1&per_page=100");
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    let allProducts: Product[] = await response.json();

    return allProducts;
  };

  const [data, filterData, allProducts] = await Promise.all([
    getClient().query({
      query: query(),
      variables: {
        locale: `${params.lang ? params.lang : "bg"}`,
        filters: {
          productType: {
            filterName: {
              in: productType.length > 0 ? productType : undefined,
            },
          },
          wine: {
            vintage: {
              in: vintage.length > 0 ? vintage : undefined,
            },
            volume: {
              in: volume.length > 0 ? volume : undefined,
            },
            vina: {
              wineType: {
                filterName: {
                  in: wineType.length > 0 ? wineType : undefined,
                },
              },
            },
          },
        },
        pagination: {
          pageSize: 400,
        },
      },
    }),
    getClient().query({
      query: filtersQuery(),
      variables: {
        locale: `${params.lang ? params.lang : "bg"}`,
        pagination: {
          pageSize: 400,
        },
      },
    }),
    getProducts(),
  ]);

  const products = data.data.products.data
    .map((infoItem) => {
      const productId = infoItem.attributes.productCode;

      // Find the corresponding product in the product array
      const correspondingProduct = allProducts.find(
        (product) => product.id === parseInt(productId)
      );

      if (correspondingProduct) {
        // Check availability from product array
        const isAvailable = correspondingProduct.is_in_stock === true;

        // Get prices from product array
        const regularPrice = parseFloat(
          correspondingProduct.prices.regular_price
        );
        const salePrice = parseFloat(correspondingProduct.prices.sale_price);

        // Construct the new object with merged data
        return {
          attributes: {
            ...infoItem.attributes,
            isAvailable,
            regularPrice,
            salePrice,
          },
        };
      }

      // If no corresponding product is found, return null or handle as needed
      return null;
    })
    .filter(Boolean); // Remove null entries if any


  return {
    data,
    filterData,
    products,
  };
};
