export default function (locale: string, productId: string) {
  const query = `
    query {
      Products(locale: ${locale}, where:{productId:{in:[${productId}]}}){
        docs {
          productTitle
          productId
          productKind
          slug
          stockManagement {
            volume
          }
          productBasicInformation {
            harvestYear
          }
        }
      }
    }
  `;
  
  return query;
}
