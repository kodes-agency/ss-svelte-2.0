import { gql } from "@apollo/client/core/index.js";

export default function () {
  const query = gql`
    query Menu($locale: I18NLocaleCode) {
      menu(locale: $locale) {
        data {
          attributes {
            wineEstate
            ourWines
            contactUs
            aboutUs
            vinyardLink
            linkCeller
            linkVisits
            linkWhites
            linkReds
            linkRoses
            linkCollections
            linkB2b
            linkContact
            linkPhilosophy
            linkHistory
            linkTeam
            linkDiary
            linkNews
            linkGDPR
            linkPolicy
            linkVinyard
          }
        }
      }
      contactPage(locale: $locale) {
        data {
          attributes {
            addressLine1
            addressLine2
            addressLine3
            email
            phoneNumber
            heroHeading
            website
          }
        }
      }
    }
  `;

  return query;
}
