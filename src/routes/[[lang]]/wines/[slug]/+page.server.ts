import query from "$lib/db/wineSinglePage";
import { PUBLIC_GRAPHQL_URL } from "$env/static/public";
import { closingTypes } from "$lib/store/categoryTypes.js";


/** @type {import('@sveltejs/kit').Load} */
export const load = async ({params}) => {
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


        const wineClosingType = await data?.data?.Products?.docs[0]?.wineDetails?.bottleClosingType;

        let closingTypeLocale = closingTypes.find(closingType => {
            const locale = params.lang || "bg";
            return closingType.locale === locale;
        });

        const closingType = closingTypeLocale?.closingTypes.find(closingType => {
            return closingType.value === wineClosingType;
        });
        
        return {
            wine: data.data.Products.docs[0],
            closingType: closingType?.name,
        }
    } catch (error) {
        console.log(error);
    }
}