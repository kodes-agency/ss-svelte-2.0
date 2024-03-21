import query from "$lib/db/wineCollectionPage";
import { PUBLIC_GRAPHQL_URL } from "$env/static/public";
import { wineTypes } from "$lib/store/categoryTypes.js";

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({params, url}) => {
    try { 
        const wineType = wineTypes.find(wineType => {
            if(params.lang) {
                return wineType.locale === params.lang;
            } else {
                return wineType.locale === "bg";
            }
        });
        const response = await fetch(PUBLIC_GRAPHQL_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: query(params.lang ? params.lang : "bg", url.searchParams.get('type') ? url.searchParams.get('type') : null),
            })
        });
        
        const data = await response.json();
        
        return {
            wines: data.data.Products.docs,
            wineTypeLocale: wineType?.wineTypes,
        }
    } catch (error) {
        console.log(error);
    }
}