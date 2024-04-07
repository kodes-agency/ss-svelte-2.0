export default function (locale: string, slug: string) {
  const query = `
    query {
      Products(locale: ${locale}, where:{slug:{equals:"${slug}"}}){
        docs{
          productTitle
          slug
          productKind
          productImage {
            productImage {
              url
              alt
            }
          }
          productType {
            productPosition
          }
          productBasicInformation {
            wineSort
            harvestYear
            img {
              url
              alt
            }
            longDescription
            wineAwards {
              award
              year
            }
          }
          wineDetails {
            alchoholContent
            acidContent
            sugarContent
            bottleClosingType
            yearBottled
            temperatureC
            temperatureF
            volumeAndQuantity {
              volume
              quantity
            }
          }
          wineRemarks {
            food
          }
          saleGroup {
            onSale
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
              slug
              productTitle
              productType {
                productPosition
              }
              stockManagement {
                volume
              }
              productBasicInformation {
                wineSort
                longDescription
                harvestYear
                img {
                  url
                  alt
                }
                wineAwards {
                  award
                  year
                }
              }
              wineDetails {
                alchoholContent
                acidContent
                sugarContent
                bottleClosingType
                yearBottled
                temperatureC
                temperatureF
                volumeAndQuantity {
                  volume
                  quantity
                }
              }
              wineRemarks {
                food
              }
            }
          }
        }
      }
    }
  `;
  
  return query;
}
