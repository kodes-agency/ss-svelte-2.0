import { getClient } from "$lib/functions/getClient";
import query from "$lib/db/wineSinglePage";


/** @type {import('@sveltejs/kit').Load} */
export const load = async ({params, url}) => {

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
    
    return data
}