import queryNew from "$lib/db/newsSinglePage";
import queryNews from "$lib/db/newsCollectionPage";
import { PUBLIC_GRAPHQL_URL } from "$env/static/public";

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({params}) => {
    try { 
        const fetchSingleNews = () => fetch(PUBLIC_GRAPHQL_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: queryNew(params.lang ? params.lang : "bg", params.slug),
            })
        });

        const fetchCollectionNews = () => fetch(PUBLIC_GRAPHQL_URL, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
          },
          body: JSON.stringify({
              query: queryNews(params.lang ? params.lang : "bg"),
          })
        });

        const [ responseSingleNews, responseCollectionNews ] = await Promise.all([fetchSingleNews(), fetchCollectionNews()]);  
        const [dataSingleNews, dataCollectionNews] = await Promise.all([responseSingleNews.json(), responseCollectionNews.json()]);
        
        return {
            singleNewsPage: dataSingleNews.data.allNews.docs[0],
            collectionNewsPage: dataCollectionNews.data.allNews.docs
        }
    } catch (error) {
        console.log(error);
    }
}