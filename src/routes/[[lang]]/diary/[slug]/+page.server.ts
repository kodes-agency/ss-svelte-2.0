import querySingleDiary from "$lib/db/diarySinglePage";
import queryCollectionDiary from "$lib/db/diaryCollectionPage";
import { PUBLIC_GRAPHQL_URL } from "$env/static/public";

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({params}) => {
    try { 
        const fetchSingleDiary = () => fetch(PUBLIC_GRAPHQL_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: querySingleDiary(params.lang ? params.lang : "bg", params.slug),
            })
        });

        const fetchCollectionDiary = () => fetch(PUBLIC_GRAPHQL_URL, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
          },
          body: JSON.stringify({
              query: queryCollectionDiary(params.lang ? params.lang : "bg"),
          })
        });

        const [ responseSingleDiary, responseCollectionDiary ] = await Promise.all([fetchSingleDiary(), fetchCollectionDiary()]);  
        const [ dataSingleDiary, dataCollectionDiary ] = await Promise.all([responseSingleDiary.json(), responseCollectionDiary.json()]);
        
        return {
            singleDiaryPage: dataSingleDiary.data.Diaries.docs[0],
            collectionDiaryPage: dataCollectionDiary.data.Diaries.docs
        }
    } catch (error) {
        console.log(error);
    }
}