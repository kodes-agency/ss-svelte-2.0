export default function (locale: string, wineSort: string[], productType: string[], year: [], volume: number) {
  const query = `
    query {
      Products(
        locale: ${locale},
        limit: 100,
        where:{
          AND: [
            {productBasicInformation__wineSort: {in: [${wineSort}]}},
            {productKind:{in:[${productType}]}},
            ${year ? `{productBasicInformation__harvestYear:{equals: "${year}-01-01T12:00:00.000Z"}},` : ""}
            {stockManagement__volume:{in: [${volume}]}},
            {visibilityGroup__visibility:{equals:_1}}
          ]
      }){
        docs{
          productTitle
          productKind
          slug
          productBasicInformation{
            wineSort
            harvestYear
            img {
              url
              alt
            }
          }
          priceManagement {
            regularPrice
            salePrice
          }
          stockManagement {
            stockQuantity
            volume
          }
          productId
          productBundle {
            quantity
            product (locale: ${locale}){
              productTitle
              stockManagement {
                volume
              }
              productBasicInformation {
                harvestYear
                img {
                  url
                  alt
                }
              }
            }
          }
        }
      }
    }
  `;
  
  return query;
}
