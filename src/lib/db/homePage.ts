import { gql } from "@apollo/client/core/index.js";

export default function () {
  const query = gql`
    query HomePage($locale: I18NLocaleCode) {
      homePage(locale: $locale) {
        data {
          attributes {
            aboutButton
            aboutImage {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
            aboutText
            diaryHeading
            featuredButton
            diaryHeading
            featuredDiary {
              data {
                attributes {
                  title
                  slug
                  publicationDate
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
            featuredNews {
              data {
                attributes {
                  title
                  slug
                  publicationDate
                }
              }
            }
            featuredWines {
              data {
                attributes {
                  name
                  slug
                  image {
                    data {
                      attributes {
                        alternativeText
                        url
                      }
                    }
                  }
                  harvestYear
                }
              }
            }
            featuredWinesHeading
            featuredWinesSubheading
            heroHeading
            heroImage {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
            heroSubheading
            newsHeading
            imgLink {
              link
              text
              image {
                data {
                  attributes {
                    alternativeText
                    url
                  }
                }
              }
            }
            imgLink2 {
              text
              link
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
  `;

  return query;
}
