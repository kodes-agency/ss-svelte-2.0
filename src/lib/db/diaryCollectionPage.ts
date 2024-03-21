export default function (locale: string) {
  const query = `
    query {
      Diaries(locale: ${locale}){
        docs {
          title
          publishedAt
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
