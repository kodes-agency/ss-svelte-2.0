import { gql } from "@apollo/client/core/index.js";

export default function () {
  const query = gql`
    query DiariesCollection($locale: I18NLocaleCode) {
      diaries(locale: $locale) {
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
            gallery {
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
          }
        }
      }    

    }
  `;

  return query;
}
