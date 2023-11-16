import { getClient } from "$lib/functions/getClient";
import query from "$lib/db/homePage";


/** @type {import('@sveltejs/kit').Load} */
export const load = async ({params}) => {
    const data = getClient().query({
        query: query(),
        variables: {
            "locale": `${params.lang ? params.lang : "bg"}`,
        }
    })
    
    return await data
}

