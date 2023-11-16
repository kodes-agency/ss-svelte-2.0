import { gql } from "@apollo/client/core/index.js";

export default function () {
  const query = gql`
    query Policy($locale: I18NLocaleCode) {
      policy(locale: $locale) {
        data {
          attributes {
            pageHeading
            content
          }
        }
      }
    }
  `;

  return query;
}
