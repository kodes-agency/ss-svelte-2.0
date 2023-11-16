import { gql } from "@apollo/client/core/index.js";

export default function () {
  const query = gql`
    query VisitsPage($locale: I18NLocaleCode) {
      visitsPage(locale: $locale) {
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
            visitsPageLayout {
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
              ... on ComponentGlobalTextEditor {
                id
                text
                heading
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
