import { gql } from "@apollo/client/core/index.js";

export default function () {
  const query = gql`
    query CollectionPage($locale: I18NLocaleCode, $filters: VinaFiltersInput, $pagination: PaginationArg) {
      vinas(locale: $locale, filters: $filters, pagination: $pagination) {
        data {
          attributes {
            harvestYear
            slug
            image {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
            shortDescription
            name
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
      winesPage(locale: $locale) {
        data {
          attributes {
            heroHeading
            heroSubheading
            hideFilters
            showFilters
          }
        }
      }
      wineTypes(locale: $locale) {
        data {
          attributes {
            filterName
            wineType
          }
        }
      }
    }
  `;

  return query;
}
