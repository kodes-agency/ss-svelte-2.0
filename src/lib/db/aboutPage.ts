import { gql } from "@apollo/client/core/index.js";

export default function () {
  const query = gql`
    query AboutPage($locale: I18NLocaleCode) {
      aboutPage(locale: $locale) {
        data {
          attributes {
            aboutPageLayout {
              __typename
              ... on ComponentGlobalImage {
                id
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                description
                imageOrientation
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
