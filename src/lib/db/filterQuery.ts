import { gql } from "@apollo/client/core/index.js";

export default function () {
  const query = gql`
    query ProductFilters($locale: I18NLocaleCode, $pagination: PaginationArg) {
      products(locale: $locale, pagination: $pagination) {
        data {
          attributes {
            productType {
              data {
                attributes {
                  productType
                  filterName
                }
              }
            }
            wine {
              volume
              vintage
              vina {
                data {
                  attributes {
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
            }
          }
        }
      }
    }
  `;

  return query;
}
