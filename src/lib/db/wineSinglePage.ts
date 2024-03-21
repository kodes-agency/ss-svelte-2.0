export default function (locale: string, slug: string) {
  const query = `
    query {
      Products(locale: ${locale}, where:{slug:{equals:"${slug}"}}){
        docs{
          productTitle
          slug
          productBasicInformation {
            harvestYear
            img {
              url
              alt
            }
            passport {
              url
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
            vinification
            maturation
            degustation
            food
          }
        }
      }
    }
  `;
  
  return query;
}
