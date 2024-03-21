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
            {productType__productPosition:{equals:catalog_shop}}
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
