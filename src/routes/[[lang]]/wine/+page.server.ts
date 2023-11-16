import { getClient } from "$lib/functions/getClient";
import query from "$lib/db/wineCollectionPage";


/** @type {import('@sveltejs/kit').Load} */
export const load = async ({params, url}) => {
    const data = await getClient().query({
        query: query(),
        variables: {
            "locale": `${params.lang ? params.lang : "bg"}`,
            "filters": {
              "wineType": {
                "filterName": {
                  "contains": `${url.searchParams.get('type') ? url.searchParams.get('type') : ""}`
                }
              }
            },
            "pagination": {
              "page": 1,
              "pageSize": 200
            }
        }
    })
    
    return data
}