import { gql } from "@apollo/client/core/index.js";

export default function () {
  const query = gql`
    query Vinas($filters: VinaFiltersInput, $locale: I18NLocaleCode) {
      vinas(filters: $filters, locale: $locale) {
        data {
          attributes {
            name
            harvestYear
            image {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
            longDescription
            shortDescription
            wineAwards {
              awardDescription
              year
              id
            }
            wineDetails {
              acids
              alchohol
              closing {
                data {
                  attributes {
                    capType
                  }
                }
              }
              id
              sugars
              temperatureC
              temperatureF
              volumeNCount {
                bottlesProduced
                volume
                id
              }
              year
            }
            wineInformation {
              degustaion
              food
              maturation
              vinification
              id
            }
            winePasspordPDF {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
            wineType {
              data {
                attributes {
                  wineType
                  filterName
                }
              }
            }
          }
        }
      }
      singleWinePage(locale: $locale) {
        data {
          attributes {
            heroHeading
            alchohol
            acid
            sugars
            volume
            closing
            year
            bottlesProduced
            temperature
            rewardsHeading
            vinification
            maturation
            degustaion
            food
            buttonText
            unit
          }
        }
      }
    }
  `;

  return query;
}
