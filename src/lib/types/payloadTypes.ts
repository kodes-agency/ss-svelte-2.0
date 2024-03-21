/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    pages: Page;
    media: Media;
    products: Product;
    news: News;
    diary: Diary;
    wineType: WineType;
    wineCap: WineCap;
    productCategory: ProductCategory;
    orders: Order;
    coupons: Coupon;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {
    general: General;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  role?: ('editor' | 'admin') | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title: string;
  slug?: string | null;
  layout?:
    | (
        | {
            backgroundImg: string | Media;
            title?: string | null;
            subtitle?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'hero-section';
          }
        | {
            img: string | Media;
            text: string;
            id?: string | null;
            blockName?: string | null;
            blockType: 'img-section';
          }
        | {
            blocks: (
              | {
                  title: string;
                  id?: string | null;
                  blockName?: string | null;
                  blockType: 'title-block';
                }
              | {
                  subtitle: string;
                  id?: string | null;
                  blockName?: string | null;
                  blockType: 'subtitle-block';
                }
              | {
                  text: {
                    root: {
                      children: {
                        type: string;
                        version: number;
                        [k: string]: unknown;
                      }[];
                      direction: ('ltr' | 'rtl') | null;
                      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                      indent: number;
                      type: string;
                      version: number;
                    };
                    [k: string]: unknown;
                  };
                  text_html?: string | null;
                  id?: string | null;
                  blockName?: string | null;
                  blockType: 'text-block';
                }
              | {
                  image: string | Media;
                  id?: string | null;
                  blockName?: string | null;
                  blockType: 'img-block';
                }
              | {
                  buttonText: string;
                  buttonLink: string;
                  id?: string | null;
                  blockName?: string | null;
                  blockType: 'button-block';
                }
              | {
                  title?: string | null;
                  text?: {
                    root: {
                      children: {
                        type: string;
                        version: number;
                        [k: string]: unknown;
                      }[];
                      direction: ('ltr' | 'rtl') | null;
                      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                      indent: number;
                      type: string;
                      version: number;
                    };
                    [k: string]: unknown;
                  } | null;
                  text_html?: string | null;
                  id?: string | null;
                  blockName?: string | null;
                  blockType: 'policy-block';
                }
            )[];
            anchor?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'text-section';
          }
        | {
            imgButtonBlock?:
              | {
                  img: string | Media;
                  linkText: string;
                  link: string;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'img-button-section';
          }
        | {
            hasTitle?: boolean | null;
            hasSubtitle?: boolean | null;
            hasButton?: boolean | null;
            title?: string | null;
            subtitle?: string | null;
            buttonText?: string | null;
            buttonLink?: string | null;
            relationTo?:
              | (
                  | {
                      product?: (string | Product)[] | null;
                      id?: string | null;
                      blockName?: string | null;
                      blockType: 'product-relationship';
                    }
                  | {
                      news?: (string | News)[] | null;
                      id?: string | null;
                      blockName?: string | null;
                      blockType: 'news-relationship';
                    }
                  | {
                      diary?: (string | Diary)[] | null;
                      id?: string | null;
                      blockName?: string | null;
                      blockType: 'diary-relationship';
                    }
                )[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'relationship-section';
          }
      )[]
    | null;
  meta?: {
    title?: string | null;
    description?: string | null;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "products".
 */
export interface Product {
  id: string;
  systemTitle?: string | null;
  productType: {
    productType: 'single' | 'bundle' | 'other';
    productPosition: 'catalog-shop' | 'shop-only';
  };
  productTitle: string;
  productKind: 'bottle' | 'bundle' | 'special' | 'other';
  slug?: string | null;
  productBasicInformation?: {
    wineSort: 'white' | 'red' | 'rose' | 'collection';
    harvestYear: string;
    shortDescription: string;
    longDescription: string;
    img: string | Media;
    passport?: string | Media | null;
    wineAwards?:
      | {
          award?: string | null;
          year?: string | null;
          id?: string | null;
        }[]
      | null;
  };
  wineDetails?: {
    alchoholContent?: number | null;
    acidContent?: number | null;
    sugarContent?: number | null;
    temperatureC?: number | null;
    temperatureF?: number | null;
    bottleClosingType?: ('screwcap' | 'cork' | 'vinolok' | 'diam5') | null;
    yearBottled?: string | null;
    volumeAndQuantity?:
      | {
          volume?: number | null;
          quantity?: number | null;
          id?: string | null;
        }[]
      | null;
  };
  wineRemarks?: {
    vinification?: string | null;
    maturation?: string | null;
    degustation?: string | null;
    food?: string | null;
  };
  productBundle?:
    | {
        product: string | Product;
        quantity: number;
        id?: string | null;
      }[]
    | null;
  productImage?: {
    productImage?: string | Media | null;
  };
  stockGroup?: {
    manageStock?: ('1' | '0') | null;
  };
  saleGroup?: {
    onSale?: ('1' | '0') | null;
  };
  visibilityGroup?: {
    visibility?: ('1' | '0') | null;
  };
  productId?: string | null;
  priceManagement: {
    regularPrice: number;
    salePrice?: number | null;
  };
  stockManagement: {
    stockQuantity?: number | null;
    sku?: string | null;
    volume: '375' | '750' | '1500' | '0';
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "news".
 */
export interface News {
  id: string;
  title: string;
  publishedAt?: string | null;
  slug?: string | null;
  text: {
    root: {
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      type: string;
      version: number;
    };
    [k: string]: unknown;
  };
  text_html?: string | null;
  images?:
    | {
        img: string | Media;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "diary".
 */
export interface Diary {
  id: string;
  title: string;
  publishedAt?: string | null;
  slug?: string | null;
  img: string | Media;
  text: {
    root: {
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      type: string;
      version: number;
    };
    [k: string]: unknown;
  };
  text_html?: string | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "wineType".
 */
export interface WineType {
  id: string;
  label: string;
  value: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "wineCap".
 */
export interface WineCap {
  id: string;
  label: string;
  value: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "productCategory".
 */
export interface ProductCategory {
  id: string;
  label: string;
  value: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "orders".
 */
export interface Order {
  id: string;
  orderTotal?: string | null;
  orderId?: string | null;
  orderDate?: string | null;
  status: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled';
  customer_note?: string | null;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  country:
    | 'AL'
    | 'AD'
    | 'AT'
    | 'BY'
    | 'BE'
    | 'BA'
    | 'BG'
    | 'HR'
    | 'CY'
    | 'CZ'
    | 'DK'
    | 'EE'
    | 'FI'
    | 'FR'
    | 'DE'
    | 'GR'
    | 'HU'
    | 'IS'
    | 'IE'
    | 'IT'
    | 'XK'
    | 'LV'
    | 'LI'
    | 'LT'
    | 'LU'
    | 'MT'
    | 'MD'
    | 'MC'
    | 'ME'
    | 'NL'
    | 'MK'
    | 'NO'
    | 'PL'
    | 'PT'
    | 'RO'
    | 'RU'
    | 'SM'
    | 'RS'
    | 'SK'
    | 'SI'
    | 'ES'
    | 'SE'
    | 'CH'
    | 'UA'
    | 'GB'
    | 'VA';
  state?: string | null;
  city: string;
  address_1: string;
  postcode?: string | null;
  products?:
    | {
        product: string | Product;
        sku?: string | null;
        quantity: number;
        price_readOnly?: number | null;
        price?: number | null;
        total?: string | null;
        isDiscounted?: boolean | null;
        product_key?: number | null;
        id?: string | null;
      }[]
    | null;
  payment_method_title?: string | null;
  transaction_id?: string | null;
  date_paid?: string | null;
  coupons?: (string | Coupon)[] | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "coupons".
 */
export interface Coupon {
  id: string;
  code: string;
  amount: number;
  discount_type: 'percent' | 'fixed_cart';
  couponId?: number | null;
  date_expires?: string | null;
  product_ids?: (string | Product)[] | null;
  minimum_amount?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "general".
 */
export interface General {
  id: string;
  header?: {
    colums?:
      | {
          links?:
            | {
                isHeading?: boolean | null;
                text: string;
                url?: string | null;
                id?: string | null;
              }[]
            | null;
          id?: string | null;
        }[]
      | null;
  };
  footer?: {
    address?:
      | {
          text: string;
          url?: string | null;
          id?: string | null;
        }[]
      | null;
    links?:
      | {
          text: string;
          url?: string | null;
          id?: string | null;
        }[]
      | null;
    socialMedia?:
      | {
          text: string;
          url?: string | null;
          icon: string;
          id?: string | null;
        }[]
      | null;
  };
  contact: {
    pageTitle: string;
  };
  diary: {
    pageTitle: string;
  };
  news: {
    pageTitle: string;
  };
  wines: {
    pageTitle: string;
    pageTitleSingleWine: string;
    pageSubtitle: string;
    showFiltersButton: string;
    hideFiltersButton: string;
    buttonWinePassport: string;
    buttonGoToShop: string;
    alchoholContent: string;
    sugarContent: string;
    acidContent: string;
    bottleVolumeSize: string;
    closingType: string;
    bottledYear: string;
    temperature: string;
    rewardsTitle: string;
    vinification: string;
    maturation: string;
    degustation: string;
    food: string;
  };
  b2b: {
    formTitle: string;
    names: string;
    companyName: string;
    chooseOption: string;
    questionActivity: string;
    questionServices: string;
    questionFamiliarity: string;
    questionCurrentOffering: string;
    answerPrivatePerson: string;
    answerSeller: string;
    answerHoreka: string;
    answerWhiteWine: string;
    answerRedWine: string;
    answerRoseWine: string;
    answerCollectionWine: string;
    answerVisits: string;
    answerYes: string;
    answerNo: string;
    phone: string;
    email: string;
    buttonSend: string;
  };
  shop: {
    heroImg: string | Media;
    pageTitle: string;
    pageSubtitle: string;
    paymentMethodsButton: string;
    deliveryMethodsButton: string;
    buttonAddToCart: string;
    buttonLearnMore: string;
    infoTabs: {
      title: string;
      content: string;
      id?: string | null;
    }[];
    filterProductCategory: string;
    filterWineType: string;
    filterWineVintage: string;
    filterVolume: string;
    cartTitle: string;
    buttonContinueShopping: string;
    buttonContinueToCheckout: string;
    checkoutTableTitle: string;
    checkoutTableQuantity: string;
    checkoutTablePrice: string;
    checkoutTableTotal: string;
    orderTitle: string;
    formTitle: string;
    invoiceRequest: string;
    companyName: string;
    vatNumber: string;
    companyCountry: string;
    companyAddress: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    zipCode: string;
    region: string;
    country: string;
    orderNote: string;
    ageConsent: string;
    policyConsent: string;
    marketingConsent: string;
    deliveryConsent: string;
    compulsoryField: string;
    buttonPay: string;
    buttonCard: string;
    buttonCash: string;
    buttonBack: string;
    stepCart: string;
    stepConsent: string;
    stepClientInfo: string;
    stepPaymentMethod: string;
    stepFinilize: string;
    sectionTitle: string;
    orderDetails: string;
    clientDetails: string;
    buttonBackToHome: string;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}