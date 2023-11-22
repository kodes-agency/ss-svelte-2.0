import { gql } from "@apollo/client/core/index.js";

export default function () {
  const query = gql`
    query Product(
      $locale: I18NLocaleCode
      $pagination: PaginationArg,
      $filters: ProductFiltersInput
    ) {
      products(locale: $locale, pagination: $pagination, filters: $filters) {
        data {
          attributes {
            packageTitle
            productType {
              data {
                attributes {
                  productType
                }
              }
            }
            regularPrice
            salePrice
            slug
            productCode
            wine {
              quantity
              vintage
              volume
              vina {
                data {
                  attributes {
                    name
                    image {
                      data {
                        attributes {
                          alternativeText
                          url
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
      shopPage(locale: $locale) {
        data {
          attributes {
            heroHeading
            heroSubheading
            heroImage {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            deliveryInfoButton
            paymentInfoButton
            infoTab {
              tabContent
              tabHeading
            }
            filterWineType
            filterVintage
            filterProductType
            filterVolume
          }
        }
      }
      productTypes(locale: $locale) {
        data {
          attributes {
            productType
          }
        }
      }
    }
  `;

  return query;
}
