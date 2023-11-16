import { gql } from "@apollo/client/core/index.js";

export default function () {
  const query = gql`
    query B2BPage($locale: I18NLocaleCode) {
      b2BPage(locale: $locale) {
        data {
          attributes {
            b2bPageLayout {
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
              ... on Error {
                code
                message
              }
            }
            heroImage {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
          }
        }
      }
      contactForm(locale: $locale) {
        data {
          attributes {
            contactNameField
            companyNameField
            businessActivity
            privatePerson
            company
            horeca
            interests
            whiteWines
            redWines
            roseWines
            collectionWines
            visits
            knowledge
            curentOffering
            phoneNumber
            email
            yes
            no
            chooseOption
            formHeading
            buttonTextSend
            thankYouHeading
            thankYouSubheading
            thankYouButton
            locale
          }
        }
      }
    }
  `;

  return query;
}
