import { getClient } from "$lib/functions/getClient";
import query from "$lib/db/newsCollectionPage";


/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ params }) => {
    const data = await getClient().query({
        query: query(),
        variables: {
            "locale": `${params.lang ? params.lang : "bg"}`,
            "pagination": {
              "page": 1,
              "pageSize": 200
            }
        }
    })
    
    return data
}