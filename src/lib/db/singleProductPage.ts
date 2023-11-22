import { gql } from "@apollo/client/core/index.js";

export default function () {
  const query = gql`
    query Products($filters: ProductFiltersInput, $locale: I18NLocaleCode) {
      products(filters: $filters, locale: $locale) {
        data {
          attributes {
            regularPrice
            salePrice
            productCode
            wine {
              vintage
              volume
              quantity
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
                    shortDescription
                    longDescription
                    wineAwards {
                      awardDescription
                      year
                      id
                    }
                    wineDetails {
                      acids
                      closing {
                        data {
                          attributes {
                            capType
                          }
                        }
                      }
                      alchohol
                      sugars
                      temperatureC
                      temperatureF
                    }
                    wineAwards {
                      awardDescription
                      year
                    }
                    wineType {
                      data {
                        attributes {
                          wineType
                        }
                      }
                    }
                    wineInformation {
                      food
                    }
                    slug
                  }
                }
              }
            }
            packageTitle
            productType {
              data {
                attributes {
                  productType
                }
              }
            }
            slug
          }
        }
      }
      shopPage {
        data {
          attributes {
            cartMainLabel
            cartTotalLabel
            cartPriceLabel
            cartQuantityLabel
            cartProductLabel
            nextButton
            continueShoppingButton
            addToCartButton
            learnMoreButton
            singleProductHeading
          }
        }
      }
      singleWinePage(locale: $locale) {
        data {
          attributes {
            rewardsHeading
            alchohol
            volume
            closing
            food
          }
        }
      }
    }
  `;

  return query;
}
