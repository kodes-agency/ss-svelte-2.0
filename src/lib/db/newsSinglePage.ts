import { gql } from "@apollo/client/core/index.js";

export default function () {
  const query = gql`
    query NewsSingle($locale: I18NLocaleCode, $filters: NewFiltersInput) {
      news(locale: $locale, filters: $filters) {
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
