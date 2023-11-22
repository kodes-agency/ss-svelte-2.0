import { getClient } from "$lib/functions/getClient";
import query from "$lib/db/shopPage";
import filtersQuery from "$lib/db/filterQuery";



/** @type {import('@sveltejs/kit').Load} */
export const load = async ({params, url}) => {
    let productType = url.searchParams.getAll('category')
    let vintage = url.searchParams.getAll('vintage')
    let wineType = url.searchParams.getAll('wineType')
    let volume = url.searchParams.getAll('volume').map((str)=>{return parseFloat(str)})

    const data = await getClient().query({
        query: query(),
        variables: {
            "locale": `${params.lang ? params.lang : "bg"}`,
            "filters": {
                "productType": {
                        "filterName": {
                            "in": productType.length > 0 ? productType : undefined
                    }
                },
                "wine": {
                    "vintage": {
                        "in": vintage.length > 0 ? vintage : undefined
                    },
                    "volume": {
                        "in": volume.length > 0 ? volume : undefined
                    },
                    "vina": {
                        "wineType": {
                            "filterName": {
                                "in": wineType.length > 0 ? wineType : undefined
                            }
                        }
                    }
                }
            },
            "pagination": {
              "pageSize": 400
            }
        }
    })

    const filterData = await getClient().query({
        query: filtersQuery(),
        variables: {
            "locale": `${params.lang ? params.lang : "bg"}`,
            "pagination": {
                "pageSize": 400
            }
        }
    })

    
    return {
        data,
        filterData
    }
}