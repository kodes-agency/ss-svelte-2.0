import { getClient } from "$lib/functions/getClient";
import query from "$lib/db/vineyardPage";


/** @type {import('@sveltejs/kit').Load} */
export const load = async () => {
    const data = await getClient().query({
        query: query(),
    })
    
    return data
}