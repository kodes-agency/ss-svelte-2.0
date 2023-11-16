import { gql } from "@apollo/client/core/index.js";

export default function () {
  const query = gql`
    query GdprPage($locale: I18NLocaleCode) {
      gdprPage(locale: $locale) {
        data {
          attributes {
            pageContent
            pageHeading
          }
        }
      }
    }
  `;

  return query;
}
