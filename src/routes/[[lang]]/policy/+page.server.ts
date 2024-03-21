import query from "$lib/db/layoutPages";
import { PUBLIC_GRAPHQL_URL } from "$env/static/public";

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
                query: query(params.lang ? params.lang : "bg", "policy"),
            })
        });
        
        const data = await response.json();
        
        return {
            policyPageData: data.data.Pages.docs[0]
        }
    } catch (error) {
        console.log(error);
    }
}