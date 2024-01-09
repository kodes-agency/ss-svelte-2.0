import { gql } from "@apollo/client/core/index.js";

export default function () {
  const query = gql`
    query Products($filters: ProductFiltersInput, $locale: I18NLocaleCode) {
      products(filters: $filters, locale: $locale) {
        data {
          attributes {
            productCode
            wine {
              vina {
                data {
                  attributes {
                    name
                  }
                }
              }
            }
            packageTitle
            slug
          }
        }
      }
    }
  `;

  return query;
}
