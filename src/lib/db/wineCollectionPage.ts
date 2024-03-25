export default function (locale: string, wineSort: string | null) {
  const query = `
    query {
      Products(
        locale: ${locale},
        limit: 100,
        where: {
          AND: [
            ${wineSort ? `{productBasicInformation__wineSort: {equals: ${wineSort}}},` : ""}
            {productKind:{equals:bottle}},
            {productType__productPosition:{not_equals:shop_only}}
          ]
      }){
        docs {
          productTitle
          slug
          productBasicInformation{
            wineSort
            harvestYear
            shortDescription
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
