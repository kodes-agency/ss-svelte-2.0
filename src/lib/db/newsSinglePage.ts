export default function (locale: string, slug: string) {
  const query = `
    query {
      allNews(locale: ${locale}, where:{ slug:{equals: "${slug}"}}){
        docs {
          title
          publishedAt
          slug
          text_html
          images {
            img {
              url
              alt
            }
          }
        }
      }
    }
  `;
  
  return query;
}
