import query from "$lib/db/singleProductPage";
import { PUBLIC_GRAPHQL_URL } from "$env/static/public";
import { wineTypes, productTypes, closingTypes } from "$lib/store/categoryTypes.js";

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ params }) => {
  try { 
    const response = await fetch(PUBLIC_GRAPHQL_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query(params.lang ? params.lang : "bg", params.slug),
        })
    });

    const data = await response.json();

    let wineType = wineTypes.find(wineType => {
        const locale = params.lang || "bg";
        return wineType.locale === locale;
    });

    let productType = productTypes.find(productType => {
        const locale = params.lang || "bg";
        return productType.locale === locale;
    })
    
    let closingType = closingTypes.find(closingType => {
        const locale = params.lang || "bg";
        return closingType.locale === locale;
    })


    return {
        productPage: data.data.Products.docs[0],
        wineType: wineType?.wineTypes,
        productType: productType?.productTypes,
        closingType: closingType?.closingTypes
    }
    
  } catch (error) {
      console.log(error);
  }
};