export default function (locale: string, page: string) {
  const query = `
    query {
      Pages (where: {slug: {equals: "${page}"}}, locale: ${locale}, fallbackLocale: none) {
        docs {
          title
          layout {
            __typename
            ... on HeroSection {
              title
              subtitle
              backgroundImg {
                url
                alt
              }
            }
            ... on TextSection {
              anchor
              blocks {
                __typename
                ... on TitleBlock {
                  title
                }
                ... on SubtitleBlock {
                  subtitle
                }
                ... on ImgBlock {
                  image {
                    url
                    alt
                  }
                }
                ... on TextBlock {
                  text_html
                }
                ... on ButtonBlock {
                  buttonText
                  buttonLink
                }
                ... on PolicyBlock {
                  title
                  text_html
                }
              }
            }
            ... on RelationshipSection {
              title
              subtitle
              buttonText
              buttonLink
              relationTo {
                __typename
                ... on NewsRelationship {
                  news(locale: ${locale}) {
                    title
                    publishedAt
                    slug
                  }
                }
                ... on DiaryRelationship {
                  diary(locale: ${locale}) {
                    title
                    publishedAt
                    slug 
                    img {
                      url
                      alt
                    }
                  }
                }
                ... on ProductRelationship {
                  product(locale: ${locale}){
                    productTitle
                    slug
                    productBasicInformation {
                      harvestYear
                      img {
                        url
                        alt
                      }
                    }
                  }
                }
              }
            }
            ... on ImgButtonSection {
              imgButtonBlock {
                link
                linkText
                img {
                  url
                  alt
                }
              }
            }
            ... on ImgSection {
              img {
                url
                alt
              }
              text
            }
          }
        }
      }
    }
  `;

  return query;
}
