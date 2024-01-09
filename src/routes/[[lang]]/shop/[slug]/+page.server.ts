import { getClient } from "$lib/functions/getClient";
import query from "$lib/db/singleProductPage";
import { SHOP_API_URL } from "$env/static/private";


/** @type {import('@sveltejs/kit').Load} */
export const load = async ({params}) => {

    const data = await getClient().query({
        query: query(),
        variables: {
            "locale": `${params.lang ? params.lang : "bg"}`,
            "filters": {
              "slug": {
                "eqi" : params.slug
              }
            },
        }
    })

    const response = await fetch(SHOP_API_URL + `/products/${data.data.products.data[0].attributes.productCode}`)
    let productData = await response.json()


    const product = {
      attributes: {
        ...data.data.products.data[0].attributes,
        salePrice: Number(productData.prices.sale_price),
        regularPrice: Number(productData.prices.regular_price),
        isAvailable: productData.is_in_stock,
        maximumOrder: productData.add_to_cart.maximum
      }
    }
    
    return { data , product}
}