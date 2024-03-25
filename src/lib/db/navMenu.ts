export default function (locale: string) {
  const query = `
    query {
      General(locale: ${locale}) {
        header {
          colums {
            links {
              isHeading
              text
              url
            }
          }
        }
        footer {
          address {
            text
            url
          }
          links {
            text
            url
          }
          socialMedia {
            text
            url
          }
          paymentLogos {
            logo {
              url
              alt
            }
          }
        }
        contact {
          pageTitle
        }
        diary {
          pageTitle
        }
        news {
          pageTitle
        }
        wines {
          pageTitle
          pageSubtitle
          showFiltersButton
          hideFiltersButton
          alchoholContent
          acidContent
          sugarContent
          buttonGoToShop
          bottleVolumeSize
          closingType
          bottledYear
          pageTitleSingleWine
          temperature
          rewardsTitle
          vinification
          maturation
          degustation
          food
          buttonWinePassport
        }
        shop {
          heroImg {
            url
            alt
          }
          pageTitle
          pageSubtitle
          paymentMethodsButton
          deliveryMethodsButton
          infoTabs {
            title
            content
          }
          buttonAddToCart
          buttonLearnMore
          filterProductCategory
          filterWineVintage
          filterWineType
          filterVolume
          cartTitle
          buttonContinueShopping
          buttonContinueToCheckout
          checkoutTableTitle
          checkoutTablePrice
          checkoutTableQuantity
          checkoutTableTotal
          formTitle
          firstName
          lastName
          email
          phone
          address
          city
          zipCode
          country
          buttonPay
          buttonCard
          buttonCash
          sectionTitle
          orderDetails
          clientDetails
          buttonBackToHome
          invoiceRequest
          companyName
          vatNumber
          companyCountry
          companyAddress
          region
          orderNote
          ageConsent
          policyConsent
          marketingConsent
          deliveryConsent
          compulsoryField
          buttonBack
          stepCart
          stepConsent
          stepClientInfo
          stepPaymentMethod
          stepFinilize
          orderTitle
        }
        b2b {
          formTitle
          names
          companyName
          chooseOption
          questionActivity
          questionServices
          questionFamiliarity
          questionCurrentOffering
          answerPrivatePerson
          answerSeller
          answerHoreka
          answerWhiteWine
          answerRedWine
          answerRoseWine
          answerCollectionWine
          answerVisits
          answerYes
          answerNo
          phone
          email
          buttonSend
        }
        cookieBanner {
          heading
          description
          buttonAccept
          buttonReject
          buttonSettings
          buttonClose
          trackingLabel
          trackingDescription
          necessaryLabel
          necessaryDescription
          marketingLabel
          marketingDescription
          analyticLabel
          analyticDescription
        }
        ageVerification {
          title
          subtitle
          buttonAccept
          buttonReject
        }
      }
    }
  `;

  return query;
}
