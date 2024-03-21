export default function (locale: string, slug: string) {
  const query = `
    query {
      Diaries(locale: ${locale}, where: {slug: {equals: "${slug}"}}){
        docs {
          title
          publishedAt
          text_html
          slug
          img {
            url
            alt
          }
        }
      }
    }
  `;
  
  return query;
}
