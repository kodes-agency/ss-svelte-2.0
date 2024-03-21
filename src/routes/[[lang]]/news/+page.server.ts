import query from "$lib/db/newsCollectionPage";
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
                query: query(params.lang ? params.lang : "bg"),
            })
        });
        
        const data = await response.json();
        
        return {
            newsPage: data.data.allNews.docs
        }
    } catch (error) {
        console.log(error);
    }
}