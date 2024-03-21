export default function (locale: string) {
  const query = `
    query {
      allNews(locale: ${locale}){
        docs {
          title
          publishedAt
          slug
        }
      }
    }
  `;
  
  return query;
}
