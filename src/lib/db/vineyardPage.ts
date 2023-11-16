import { gql } from "@apollo/client/core/index.js";

export default function () {
  const query = gql`
    query VinyardPage($locale: I18NLocaleCode) {
      vinyardPage(locale: $locale) {
        data {
          attributes {
            heroImage {
              data {
                attributes {
                  alternativeText
                  url
                }
              }
            }
            vinyardPageLayout {
              __typename              
              ... on ComponentGlobalImage {
                id
                image {
                  data {
                    attributes {
                      alternativeText
                      url
                    }
                  }
                }
                description
                imageOrientation
              }
              ... on ComponentGlobalParagraph {
                id
                text
              }
              ... on ComponentGlobalTitleNText {
                id
                minorHeading
                majorHeading
                text
                marker
              }
            }
          }
        }
      }
    }
  `;

  return query;
}
