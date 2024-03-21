import query from "$lib/db/shopPage";
import { PUBLIC_GRAPHQL_URL } from "$env/static/public";
import { productTypes, wineTypes } from "$lib/store/categoryTypes.js";

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ params, url }) => {
  try { 
    let WineSort = url.searchParams.getAll("wineType").length === 0 ? ["red", "white", "rose", "collection"] : url.searchParams.getAll("wineType");
    let ProductType = url.searchParams.getAll("category").length === 0 ? ["bundle", "special", "bottle" ] : url.searchParams.getAll("category");
    let Vintage = url.searchParams.getAll("vintage").length === 1 ? [url.searchParams.get("vintage")] : url.searchParams.getAll("vintage")[0];
    let Volume = url.searchParams.getAll("volume").length === 0 ? ["_375", "_750", "_1500", "_0"] : url.searchParams.getAll("volume").map((str) => { return `_${parseInt(str)}` });

    console.log(WineSort, ProductType, Vintage, Volume)

    const response = await fetch(PUBLIC_GRAPHQL_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query(params.lang ? params.lang : "bg", WineSort, ProductType, Vintage, Volume),
        })
    });
    
    const data = await response.json();

    let productType = productTypes.find((type) => type.locale === params.lang ? params.lang : "bg")
    let wineCategory = wineTypes.find((type) => type.locale === params.lang ? params.lang : "bg")
    let wineYears = data.data.Products.docs.map((product) => {
      return new Date(product.productBasicInformation.harvestYear).getFullYear();
    })
      .sort((a, b) => a - b).filter((value, index, self) => self.indexOf(value) === index && value !== 1970)
    
    return {
        shopPage: data.data.Products.docs,
        productTypes: productType?.productTypes,
        wineTypes: wineCategory?.wineTypes,
        wineYears: wineYears
    }
    
  } catch (error) {
      console.log(error);
  }
};