import { gql } from "@apollo/client/core/index.js";

export default function () {
  const query = gql`
    query NewsCollection($locale: I18NLocaleCode) {
      news(locale: $locale) {
        data {
          attributes {
            content
            image {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
            publicationDate
            slug
            title
          }
        }
      }
      homePage(locale: $locale) {
        data {
          attributes { 
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
            newsHeading
            featuredNews {
              data {
                attributes {
                  title
                  slug
                  publicationDate
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
