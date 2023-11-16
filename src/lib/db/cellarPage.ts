import { gql } from "@apollo/client/core/index.js";

export default function () {
  const query = gql`
    query CellerPage($locale: I18NLocaleCode) {
      cellerPage(locale: $locale) {
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
            cellerPageLayout {
              __typename
              ... on ComponentGlobalTitleNText {
                id
                minorHeading
                majorHeading
                text
                marker
              }
              ... on ComponentGlobalImage {
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
                id
              }
              ... on ComponentGlobalParagraph {
                id
                text
              }
            }
          }
        }
      }
    }
  `;

  return query;
}
