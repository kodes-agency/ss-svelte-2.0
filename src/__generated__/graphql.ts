/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  AboutPageAboutPageLayoutDynamicZoneInput: { input: any; output: any; }
  B2BPageB2BPageLayoutDynamicZoneInput: { input: any; output: any; }
  CellerPageCellerPageLayoutDynamicZoneInput: { input: any; output: any; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** A string used to identify an i18n locale */
  I18NLocaleCode: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
  VinyardPageVinyardPageLayoutDynamicZoneInput: { input: any; output: any; }
  VisitsPageVisitsPageLayoutDynamicZoneInput: { input: any; output: any; }
};

export type AboutPage = {
  __typename?: 'AboutPage';
  aboutPageLayout?: Maybe<Array<Maybe<AboutPageAboutPageLayoutDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<AboutPageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AboutPageAboutPageLayoutDynamicZone = ComponentGlobalImage | ComponentGlobalTitleNText | Error;

export type AboutPageEntity = {
  __typename?: 'AboutPageEntity';
  attributes?: Maybe<AboutPage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type AboutPageEntityResponse = {
  __typename?: 'AboutPageEntityResponse';
  data?: Maybe<AboutPageEntity>;
};

export type AboutPageInput = {
  aboutPageLayout?: InputMaybe<Array<Scalars['AboutPageAboutPageLayoutDynamicZoneInput']['input']>>;
};

export type AboutPageRelationResponseCollection = {
  __typename?: 'AboutPageRelationResponseCollection';
  data: Array<AboutPageEntity>;
};

export type AgeConsent = {
  __typename?: 'AgeConsent';
  approveButton?: Maybe<Scalars['String']['output']>;
  bgImage?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  denyButton?: Maybe<Scalars['String']['output']>;
  denyHeading?: Maybe<Scalars['String']['output']>;
  denySubheading?: Maybe<Scalars['String']['output']>;
  heroHeading?: Maybe<Scalars['String']['output']>;
  heroSubheading?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<AgeConsentRelationResponseCollection>;
  policyText?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AgeConsentEntity = {
  __typename?: 'AgeConsentEntity';
  attributes?: Maybe<AgeConsent>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type AgeConsentEntityResponse = {
  __typename?: 'AgeConsentEntityResponse';
  data?: Maybe<AgeConsentEntity>;
};

export type AgeConsentInput = {
  approveButton?: InputMaybe<Scalars['String']['input']>;
  bgImage?: InputMaybe<Scalars['ID']['input']>;
  denyButton?: InputMaybe<Scalars['String']['input']>;
  denyHeading?: InputMaybe<Scalars['String']['input']>;
  denySubheading?: InputMaybe<Scalars['String']['input']>;
  heroHeading?: InputMaybe<Scalars['String']['input']>;
  heroSubheading?: InputMaybe<Scalars['String']['input']>;
  policyText?: InputMaybe<Scalars['String']['input']>;
};

export type AgeConsentRelationResponseCollection = {
  __typename?: 'AgeConsentRelationResponseCollection';
  data: Array<AgeConsentEntity>;
};

export type B2BPage = {
  __typename?: 'B2BPage';
  b2bPageLayout?: Maybe<Array<Maybe<B2BPageB2BPageLayoutDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  heroImage?: Maybe<UploadFileEntityResponse>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<B2BPageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type B2BPageB2BPageLayoutDynamicZone = ComponentGlobalImage | ComponentGlobalParagraph | ComponentGlobalTextEditor | ComponentGlobalTitleNText | Error;

export type B2BPageEntity = {
  __typename?: 'B2BPageEntity';
  attributes?: Maybe<B2BPage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type B2BPageEntityResponse = {
  __typename?: 'B2BPageEntityResponse';
  data?: Maybe<B2BPageEntity>;
};

export type B2BPageInput = {
  b2bPageLayout?: InputMaybe<Array<Scalars['B2BPageB2BPageLayoutDynamicZoneInput']['input']>>;
  heroImage?: InputMaybe<Scalars['ID']['input']>;
};

export type B2BPageRelationResponseCollection = {
  __typename?: 'B2BPageRelationResponseCollection';
  data: Array<B2BPageEntity>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CellerPage = {
  __typename?: 'CellerPage';
  cellerPageLayout?: Maybe<Array<Maybe<CellerPageCellerPageLayoutDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  heroImage?: Maybe<UploadFileEntityResponse>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<CellerPageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CellerPageCellerPageLayoutDynamicZone = ComponentGlobalImage | ComponentGlobalParagraph | ComponentGlobalTitleNText | Error;

export type CellerPageEntity = {
  __typename?: 'CellerPageEntity';
  attributes?: Maybe<CellerPage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CellerPageEntityResponse = {
  __typename?: 'CellerPageEntityResponse';
  data?: Maybe<CellerPageEntity>;
};

export type CellerPageInput = {
  cellerPageLayout?: InputMaybe<Array<Scalars['CellerPageCellerPageLayoutDynamicZoneInput']['input']>>;
  heroImage?: InputMaybe<Scalars['ID']['input']>;
};

export type CellerPageRelationResponseCollection = {
  __typename?: 'CellerPageRelationResponseCollection';
  data: Array<CellerPageEntity>;
};

export type ComponentCookiesCookieType = {
  __typename?: 'ComponentCookiesCookieType';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ComponentGlobalImage = {
  __typename?: 'ComponentGlobalImage';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  imageOrientation?: Maybe<Enum_Componentglobalimage_Imageorientation>;
};

export type ComponentGlobalParagraph = {
  __typename?: 'ComponentGlobalParagraph';
  id: Scalars['ID']['output'];
  text?: Maybe<Scalars['String']['output']>;
};

export type ComponentGlobalTextEditor = {
  __typename?: 'ComponentGlobalTextEditor';
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  text?: Maybe<Scalars['String']['output']>;
};

export type ComponentGlobalTitleNText = {
  __typename?: 'ComponentGlobalTitleNText';
  id: Scalars['ID']['output'];
  majorHeading?: Maybe<Scalars['String']['output']>;
  marker?: Maybe<Scalars['String']['output']>;
  minorHeading?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type ComponentHomePageImgLink = {
  __typename?: 'ComponentHomePageImgLink';
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  link?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type ComponentHomePageImgLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHomePageImgLinkFiltersInput>>>;
  link?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentHomePageImgLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHomePageImgLinkFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
};

export type ComponentHomePageImgLinkInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentWineProfileObemIBroj = {
  __typename?: 'ComponentWineProfileObemIBroj';
  bottlesProduced?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  volume?: Maybe<Scalars['Int']['output']>;
};

export type ComponentWineProfileObemIBrojFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentWineProfileObemIBrojFiltersInput>>>;
  bottlesProduced?: InputMaybe<IntFilterInput>;
  not?: InputMaybe<ComponentWineProfileObemIBrojFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentWineProfileObemIBrojFiltersInput>>>;
  volume?: InputMaybe<IntFilterInput>;
};

export type ComponentWineProfileObemIBrojInput = {
  bottlesProduced?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  volume?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentWineProfileWineAwards = {
  __typename?: 'ComponentWineProfileWineAwards';
  awardDescription?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  year?: Maybe<Scalars['Int']['output']>;
};

export type ComponentWineProfileWineAwardsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentWineProfileWineAwardsFiltersInput>>>;
  awardDescription?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentWineProfileWineAwardsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentWineProfileWineAwardsFiltersInput>>>;
  year?: InputMaybe<IntFilterInput>;
};

export type ComponentWineProfileWineAwardsInput = {
  awardDescription?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentWineProfileWineDetails = {
  __typename?: 'ComponentWineProfileWineDetails';
  acids?: Maybe<Scalars['Float']['output']>;
  alchohol?: Maybe<Scalars['Float']['output']>;
  closing?: Maybe<WineCapRelationResponseCollection>;
  id: Scalars['ID']['output'];
  sugars?: Maybe<Scalars['Float']['output']>;
  temperatureC?: Maybe<Scalars['Int']['output']>;
  temperatureF?: Maybe<Scalars['Int']['output']>;
  volumeNCount?: Maybe<Array<Maybe<ComponentWineProfileObemIBroj>>>;
  year?: Maybe<Scalars['Date']['output']>;
};


export type ComponentWineProfileWineDetailsClosingArgs = {
  filters?: InputMaybe<WineCapFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentWineProfileWineDetailsVolumeNCountArgs = {
  filters?: InputMaybe<ComponentWineProfileObemIBrojFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentWineProfileWineDetailsFiltersInput = {
  acids?: InputMaybe<FloatFilterInput>;
  alchohol?: InputMaybe<FloatFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentWineProfileWineDetailsFiltersInput>>>;
  closing?: InputMaybe<WineCapFiltersInput>;
  not?: InputMaybe<ComponentWineProfileWineDetailsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentWineProfileWineDetailsFiltersInput>>>;
  sugars?: InputMaybe<FloatFilterInput>;
  temperatureC?: InputMaybe<IntFilterInput>;
  temperatureF?: InputMaybe<IntFilterInput>;
  volumeNCount?: InputMaybe<ComponentWineProfileObemIBrojFiltersInput>;
  year?: InputMaybe<DateFilterInput>;
};

export type ComponentWineProfileWineDetailsInput = {
  acids?: InputMaybe<Scalars['Float']['input']>;
  alchohol?: InputMaybe<Scalars['Float']['input']>;
  closing?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  sugars?: InputMaybe<Scalars['Float']['input']>;
  temperatureC?: InputMaybe<Scalars['Int']['input']>;
  temperatureF?: InputMaybe<Scalars['Int']['input']>;
  volumeNCount?: InputMaybe<Array<InputMaybe<ComponentWineProfileObemIBrojInput>>>;
  year?: InputMaybe<Scalars['Date']['input']>;
};

export type ComponentWineProfileWineInformation = {
  __typename?: 'ComponentWineProfileWineInformation';
  degustaion?: Maybe<Scalars['String']['output']>;
  food?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  maturation?: Maybe<Scalars['String']['output']>;
  passpordPDF?: Maybe<UploadFileEntityResponse>;
  vinification?: Maybe<Scalars['String']['output']>;
};

export type ComponentWineProfileWineInformationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentWineProfileWineInformationFiltersInput>>>;
  degustaion?: InputMaybe<StringFilterInput>;
  food?: InputMaybe<StringFilterInput>;
  maturation?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentWineProfileWineInformationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentWineProfileWineInformationFiltersInput>>>;
  vinification?: InputMaybe<StringFilterInput>;
};

export type ComponentWineProfileWineInformationInput = {
  degustaion?: InputMaybe<Scalars['String']['input']>;
  food?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  maturation?: InputMaybe<Scalars['String']['input']>;
  passpordPDF?: InputMaybe<Scalars['ID']['input']>;
  vinification?: InputMaybe<Scalars['String']['input']>;
};

export type ContactForm = {
  __typename?: 'ContactForm';
  businessActivity?: Maybe<Scalars['String']['output']>;
  buttonTextSend?: Maybe<Scalars['String']['output']>;
  chooseOption?: Maybe<Scalars['String']['output']>;
  collectionWines?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  companyNameField?: Maybe<Scalars['String']['output']>;
  contactNameField?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  curentOffering?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  formHeading?: Maybe<Scalars['String']['output']>;
  horeca?: Maybe<Scalars['String']['output']>;
  interests?: Maybe<Scalars['String']['output']>;
  knowledge?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<ContactFormRelationResponseCollection>;
  no?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  privatePerson?: Maybe<Scalars['String']['output']>;
  redWines?: Maybe<Scalars['String']['output']>;
  roseWines?: Maybe<Scalars['String']['output']>;
  thankYouButton?: Maybe<Scalars['String']['output']>;
  thankYouHeading?: Maybe<Scalars['String']['output']>;
  thankYouSubheading?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  visits?: Maybe<Scalars['String']['output']>;
  whiteWines?: Maybe<Scalars['String']['output']>;
  yes?: Maybe<Scalars['String']['output']>;
};

export type ContactFormEntity = {
  __typename?: 'ContactFormEntity';
  attributes?: Maybe<ContactForm>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ContactFormEntityResponse = {
  __typename?: 'ContactFormEntityResponse';
  data?: Maybe<ContactFormEntity>;
};

export type ContactFormInput = {
  businessActivity?: InputMaybe<Scalars['String']['input']>;
  buttonTextSend?: InputMaybe<Scalars['String']['input']>;
  chooseOption?: InputMaybe<Scalars['String']['input']>;
  collectionWines?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  companyNameField?: InputMaybe<Scalars['String']['input']>;
  contactNameField?: InputMaybe<Scalars['String']['input']>;
  curentOffering?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  formHeading?: InputMaybe<Scalars['String']['input']>;
  horeca?: InputMaybe<Scalars['String']['input']>;
  interests?: InputMaybe<Scalars['String']['input']>;
  knowledge?: InputMaybe<Scalars['String']['input']>;
  no?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  privatePerson?: InputMaybe<Scalars['String']['input']>;
  redWines?: InputMaybe<Scalars['String']['input']>;
  roseWines?: InputMaybe<Scalars['String']['input']>;
  thankYouButton?: InputMaybe<Scalars['String']['input']>;
  thankYouHeading?: InputMaybe<Scalars['String']['input']>;
  thankYouSubheading?: InputMaybe<Scalars['String']['input']>;
  visits?: InputMaybe<Scalars['String']['input']>;
  whiteWines?: InputMaybe<Scalars['String']['input']>;
  yes?: InputMaybe<Scalars['String']['input']>;
};

export type ContactFormRelationResponseCollection = {
  __typename?: 'ContactFormRelationResponseCollection';
  data: Array<ContactFormEntity>;
};

export type ContactPage = {
  __typename?: 'ContactPage';
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  addressLine3?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  heroHeading?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<ContactPageRelationResponseCollection>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

export type ContactPageEntity = {
  __typename?: 'ContactPageEntity';
  attributes?: Maybe<ContactPage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ContactPageEntityResponse = {
  __typename?: 'ContactPageEntityResponse';
  data?: Maybe<ContactPageEntity>;
};

export type ContactPageInput = {
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  addressLine3?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  heroHeading?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type ContactPageRelationResponseCollection = {
  __typename?: 'ContactPageRelationResponseCollection';
  data: Array<ContactPageEntity>;
};

export type CookiesGdpr = {
  __typename?: 'CookiesGdpr';
  cookieAcceptLabel?: Maybe<Scalars['String']['output']>;
  cookieAnalyticsDescription?: Maybe<Scalars['String']['output']>;
  cookieAnalyticsLabel?: Maybe<Scalars['String']['output']>;
  cookieCloseLabel?: Maybe<Scalars['String']['output']>;
  cookieDescription?: Maybe<Scalars['String']['output']>;
  cookieHeading?: Maybe<Scalars['String']['output']>;
  cookieNecessaryDescription?: Maybe<Scalars['String']['output']>;
  cookieNecessaryLabel?: Maybe<Scalars['String']['output']>;
  cookieRejectLabel?: Maybe<Scalars['String']['output']>;
  cookieSettings?: Maybe<Scalars['String']['output']>;
  cookieTrackingDescription?: Maybe<Scalars['String']['output']>;
  cookieTrackingLabel?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<CookiesGdprRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CookiesGdprEntity = {
  __typename?: 'CookiesGdprEntity';
  attributes?: Maybe<CookiesGdpr>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CookiesGdprEntityResponse = {
  __typename?: 'CookiesGdprEntityResponse';
  data?: Maybe<CookiesGdprEntity>;
};

export type CookiesGdprInput = {
  cookieAcceptLabel?: InputMaybe<Scalars['String']['input']>;
  cookieAnalyticsDescription?: InputMaybe<Scalars['String']['input']>;
  cookieAnalyticsLabel?: InputMaybe<Scalars['String']['input']>;
  cookieCloseLabel?: InputMaybe<Scalars['String']['input']>;
  cookieDescription?: InputMaybe<Scalars['String']['input']>;
  cookieHeading?: InputMaybe<Scalars['String']['input']>;
  cookieNecessaryDescription?: InputMaybe<Scalars['String']['input']>;
  cookieNecessaryLabel?: InputMaybe<Scalars['String']['input']>;
  cookieRejectLabel?: InputMaybe<Scalars['String']['input']>;
  cookieSettings?: InputMaybe<Scalars['String']['input']>;
  cookieTrackingDescription?: InputMaybe<Scalars['String']['input']>;
  cookieTrackingLabel?: InputMaybe<Scalars['String']['input']>;
};

export type CookiesGdprRelationResponseCollection = {
  __typename?: 'CookiesGdprRelationResponseCollection';
  data: Array<CookiesGdprEntity>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  contains?: InputMaybe<Scalars['Date']['input']>;
  containsi?: InputMaybe<Scalars['Date']['input']>;
  endsWith?: InputMaybe<Scalars['Date']['input']>;
  eq?: InputMaybe<Scalars['Date']['input']>;
  eqi?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']['input']>;
  notContainsi?: InputMaybe<Scalars['Date']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  startsWith?: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Diary = {
  __typename?: 'Diary';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  gallery?: Maybe<UploadFileRelationResponseCollection>;
  image?: Maybe<UploadFileEntityResponse>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<DiaryRelationResponseCollection>;
  publicationDate?: Maybe<Scalars['Date']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type DiaryGalleryArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type DiaryLocalizationsArgs = {
  filters?: InputMaybe<DiaryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DiaryEntity = {
  __typename?: 'DiaryEntity';
  attributes?: Maybe<Diary>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type DiaryEntityResponse = {
  __typename?: 'DiaryEntityResponse';
  data?: Maybe<DiaryEntity>;
};

export type DiaryEntityResponseCollection = {
  __typename?: 'DiaryEntityResponseCollection';
  data: Array<DiaryEntity>;
  meta: ResponseCollectionMeta;
};

export type DiaryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<DiaryFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<DiaryFiltersInput>;
  not?: InputMaybe<DiaryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<DiaryFiltersInput>>>;
  publicationDate?: InputMaybe<DateFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type DiaryInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  gallery?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  image?: InputMaybe<Scalars['ID']['input']>;
  publicationDate?: InputMaybe<Scalars['Date']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type DiaryPage = {
  __typename?: 'DiaryPage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  featuredStories?: Maybe<DiaryRelationResponseCollection>;
  heroHeading?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<DiaryPageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type DiaryPageFeaturedStoriesArgs = {
  filters?: InputMaybe<DiaryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DiaryPageEntity = {
  __typename?: 'DiaryPageEntity';
  attributes?: Maybe<DiaryPage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type DiaryPageEntityResponse = {
  __typename?: 'DiaryPageEntityResponse';
  data?: Maybe<DiaryPageEntity>;
};

export type DiaryPageInput = {
  featuredStories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  heroHeading?: InputMaybe<Scalars['String']['input']>;
};

export type DiaryPageRelationResponseCollection = {
  __typename?: 'DiaryPageRelationResponseCollection';
  data: Array<DiaryPageEntity>;
};

export type DiaryRelationResponseCollection = {
  __typename?: 'DiaryRelationResponseCollection';
  data: Array<DiaryEntity>;
};

export enum Enum_Componentglobalimage_Imageorientation {
  Horizontal = 'horizontal',
  Verticle = 'verticle'
}

export type Error = {
  __typename?: 'Error';
  code: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GdprPage = {
  __typename?: 'GdprPage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<GdprPageRelationResponseCollection>;
  pageContent?: Maybe<Scalars['String']['output']>;
  pageHeading?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GdprPageEntity = {
  __typename?: 'GdprPageEntity';
  attributes?: Maybe<GdprPage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type GdprPageEntityResponse = {
  __typename?: 'GdprPageEntityResponse';
  data?: Maybe<GdprPageEntity>;
};

export type GdprPageInput = {
  pageContent?: InputMaybe<Scalars['String']['input']>;
  pageHeading?: InputMaybe<Scalars['String']['input']>;
};

export type GdprPageRelationResponseCollection = {
  __typename?: 'GdprPageRelationResponseCollection';
  data: Array<GdprPageEntity>;
};

export type GenericMorph = AboutPage | AgeConsent | B2BPage | CellerPage | ComponentCookiesCookieType | ComponentGlobalImage | ComponentGlobalParagraph | ComponentGlobalTextEditor | ComponentGlobalTitleNText | ComponentHomePageImgLink | ComponentWineProfileObemIBroj | ComponentWineProfileWineAwards | ComponentWineProfileWineDetails | ComponentWineProfileWineInformation | ContactForm | ContactPage | CookiesGdpr | Diary | DiaryPage | GdprPage | HomePage | I18NLocale | Menu | Message | New | NewsPage | Policy | Seo | SingleDiaryPage | SingleNewsPage | SingleWinePage | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | Vina | VinyardPage | VisitsPage | WineCap | WineType | WinesPage;

export type HomePage = {
  __typename?: 'HomePage';
  aboutButton?: Maybe<Scalars['String']['output']>;
  aboutImage?: Maybe<UploadFileEntityResponse>;
  aboutText?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  diaryHeading?: Maybe<Scalars['String']['output']>;
  featuredButton?: Maybe<Scalars['String']['output']>;
  featuredDiary?: Maybe<DiaryRelationResponseCollection>;
  featuredNews?: Maybe<NewRelationResponseCollection>;
  featuredWines?: Maybe<VinaRelationResponseCollection>;
  featuredWinesHeading?: Maybe<Scalars['String']['output']>;
  featuredWinesSubheading?: Maybe<Scalars['String']['output']>;
  heroHeading?: Maybe<Scalars['String']['output']>;
  heroImage?: Maybe<UploadFileEntityResponse>;
  heroSubheading?: Maybe<Scalars['String']['output']>;
  imgLink?: Maybe<Array<Maybe<ComponentHomePageImgLink>>>;
  imgLink2?: Maybe<Array<Maybe<ComponentHomePageImgLink>>>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<HomePageRelationResponseCollection>;
  newsHeading?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type HomePageFeaturedDiaryArgs = {
  filters?: InputMaybe<DiaryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type HomePageFeaturedNewsArgs = {
  filters?: InputMaybe<NewFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type HomePageFeaturedWinesArgs = {
  filters?: InputMaybe<VinaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type HomePageImgLinkArgs = {
  filters?: InputMaybe<ComponentHomePageImgLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type HomePageImgLink2Args = {
  filters?: InputMaybe<ComponentHomePageImgLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HomePageEntity = {
  __typename?: 'HomePageEntity';
  attributes?: Maybe<HomePage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type HomePageEntityResponse = {
  __typename?: 'HomePageEntityResponse';
  data?: Maybe<HomePageEntity>;
};

export type HomePageInput = {
  aboutButton?: InputMaybe<Scalars['String']['input']>;
  aboutImage?: InputMaybe<Scalars['ID']['input']>;
  aboutText?: InputMaybe<Scalars['String']['input']>;
  diaryHeading?: InputMaybe<Scalars['String']['input']>;
  featuredButton?: InputMaybe<Scalars['String']['input']>;
  featuredDiary?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  featuredNews?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  featuredWines?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  featuredWinesHeading?: InputMaybe<Scalars['String']['input']>;
  featuredWinesSubheading?: InputMaybe<Scalars['String']['input']>;
  heroHeading?: InputMaybe<Scalars['String']['input']>;
  heroImage?: InputMaybe<Scalars['ID']['input']>;
  heroSubheading?: InputMaybe<Scalars['String']['input']>;
  imgLink?: InputMaybe<Array<InputMaybe<ComponentHomePageImgLinkInput>>>;
  imgLink2?: InputMaybe<Array<InputMaybe<ComponentHomePageImgLinkInput>>>;
  newsHeading?: InputMaybe<Scalars['String']['input']>;
};

export type HomePageRelationResponseCollection = {
  __typename?: 'HomePageRelationResponseCollection';
  data: Array<HomePageEntity>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Menu = {
  __typename?: 'Menu';
  aboutUs?: Maybe<Scalars['String']['output']>;
  contactUs?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  linkB2b?: Maybe<Scalars['String']['output']>;
  linkCeller?: Maybe<Scalars['String']['output']>;
  linkCollections?: Maybe<Scalars['String']['output']>;
  linkContact?: Maybe<Scalars['String']['output']>;
  linkDiary?: Maybe<Scalars['String']['output']>;
  linkGDPR?: Maybe<Scalars['String']['output']>;
  linkHistory?: Maybe<Scalars['String']['output']>;
  linkNews?: Maybe<Scalars['String']['output']>;
  linkPhilosophy?: Maybe<Scalars['String']['output']>;
  linkPolicy?: Maybe<Scalars['String']['output']>;
  linkReds?: Maybe<Scalars['String']['output']>;
  linkRoses?: Maybe<Scalars['String']['output']>;
  linkTeam?: Maybe<Scalars['String']['output']>;
  linkVinyard?: Maybe<Scalars['String']['output']>;
  linkVisits?: Maybe<Scalars['String']['output']>;
  linkWhites?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<MenuRelationResponseCollection>;
  ourWines?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vinyardLink?: Maybe<Scalars['String']['output']>;
  wineEstate?: Maybe<Scalars['String']['output']>;
};

export type MenuEntity = {
  __typename?: 'MenuEntity';
  attributes?: Maybe<Menu>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type MenuEntityResponse = {
  __typename?: 'MenuEntityResponse';
  data?: Maybe<MenuEntity>;
};

export type MenuInput = {
  aboutUs?: InputMaybe<Scalars['String']['input']>;
  contactUs?: InputMaybe<Scalars['String']['input']>;
  linkB2b?: InputMaybe<Scalars['String']['input']>;
  linkCeller?: InputMaybe<Scalars['String']['input']>;
  linkCollections?: InputMaybe<Scalars['String']['input']>;
  linkContact?: InputMaybe<Scalars['String']['input']>;
  linkDiary?: InputMaybe<Scalars['String']['input']>;
  linkGDPR?: InputMaybe<Scalars['String']['input']>;
  linkHistory?: InputMaybe<Scalars['String']['input']>;
  linkNews?: InputMaybe<Scalars['String']['input']>;
  linkPhilosophy?: InputMaybe<Scalars['String']['input']>;
  linkPolicy?: InputMaybe<Scalars['String']['input']>;
  linkReds?: InputMaybe<Scalars['String']['input']>;
  linkRoses?: InputMaybe<Scalars['String']['input']>;
  linkTeam?: InputMaybe<Scalars['String']['input']>;
  linkVinyard?: InputMaybe<Scalars['String']['input']>;
  linkVisits?: InputMaybe<Scalars['String']['input']>;
  linkWhites?: InputMaybe<Scalars['String']['input']>;
  ourWines?: InputMaybe<Scalars['String']['input']>;
  vinyardLink?: InputMaybe<Scalars['String']['input']>;
  wineEstate?: InputMaybe<Scalars['String']['input']>;
};

export type MenuRelationResponseCollection = {
  __typename?: 'MenuRelationResponseCollection';
  data: Array<MenuEntity>;
};

export type Message = {
  __typename?: 'Message';
  businessActivity?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  contactPerson?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currentOffering?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  interests?: Maybe<Scalars['String']['output']>;
  knowledge?: Maybe<Scalars['Boolean']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type MessageEntity = {
  __typename?: 'MessageEntity';
  attributes?: Maybe<Message>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type MessageEntityResponse = {
  __typename?: 'MessageEntityResponse';
  data?: Maybe<MessageEntity>;
};

export type MessageEntityResponseCollection = {
  __typename?: 'MessageEntityResponseCollection';
  data: Array<MessageEntity>;
  meta: ResponseCollectionMeta;
};

export type MessageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MessageFiltersInput>>>;
  businessActivity?: InputMaybe<StringFilterInput>;
  companyName?: InputMaybe<StringFilterInput>;
  contactPerson?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  currentOffering?: InputMaybe<BooleanFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  interests?: InputMaybe<StringFilterInput>;
  knowledge?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<MessageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MessageFiltersInput>>>;
  phoneNumber?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type MessageInput = {
  businessActivity?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  contactPerson?: InputMaybe<Scalars['String']['input']>;
  currentOffering?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  interests?: InputMaybe<Scalars['String']['input']>;
  knowledge?: InputMaybe<Scalars['Boolean']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createAboutPageLocalization?: Maybe<AboutPageEntityResponse>;
  createAgeConsentLocalization?: Maybe<AgeConsentEntityResponse>;
  createB2BPageLocalization?: Maybe<B2BPageEntityResponse>;
  createCellerPageLocalization?: Maybe<CellerPageEntityResponse>;
  createContactFormLocalization?: Maybe<ContactFormEntityResponse>;
  createContactPageLocalization?: Maybe<ContactPageEntityResponse>;
  createCookiesGdprLocalization?: Maybe<CookiesGdprEntityResponse>;
  createDiary?: Maybe<DiaryEntityResponse>;
  createDiaryLocalization?: Maybe<DiaryEntityResponse>;
  createDiaryPageLocalization?: Maybe<DiaryPageEntityResponse>;
  createGdprPageLocalization?: Maybe<GdprPageEntityResponse>;
  createHomePageLocalization?: Maybe<HomePageEntityResponse>;
  createMenuLocalization?: Maybe<MenuEntityResponse>;
  createMessage?: Maybe<MessageEntityResponse>;
  createNew?: Maybe<NewEntityResponse>;
  createNewLocalization?: Maybe<NewEntityResponse>;
  createNewsPageLocalization?: Maybe<NewsPageEntityResponse>;
  createPolicyLocalization?: Maybe<PolicyEntityResponse>;
  createSeoLocalization?: Maybe<SeoEntityResponse>;
  createSingleDiaryPageLocalization?: Maybe<SingleDiaryPageEntityResponse>;
  createSingleNewsPageLocalization?: Maybe<SingleNewsPageEntityResponse>;
  createSingleWinePageLocalization?: Maybe<SingleWinePageEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createVina?: Maybe<VinaEntityResponse>;
  createVinaLocalization?: Maybe<VinaEntityResponse>;
  createVinyardPageLocalization?: Maybe<VinyardPageEntityResponse>;
  createVisitsPageLocalization?: Maybe<VisitsPageEntityResponse>;
  createWineCap?: Maybe<WineCapEntityResponse>;
  createWineCapLocalization?: Maybe<WineCapEntityResponse>;
  createWineType?: Maybe<WineTypeEntityResponse>;
  createWineTypeLocalization?: Maybe<WineTypeEntityResponse>;
  createWinesPageLocalization?: Maybe<WinesPageEntityResponse>;
  deleteAboutPage?: Maybe<AboutPageEntityResponse>;
  deleteAgeConsent?: Maybe<AgeConsentEntityResponse>;
  deleteB2BPage?: Maybe<B2BPageEntityResponse>;
  deleteCellerPage?: Maybe<CellerPageEntityResponse>;
  deleteContactForm?: Maybe<ContactFormEntityResponse>;
  deleteContactPage?: Maybe<ContactPageEntityResponse>;
  deleteCookiesGdpr?: Maybe<CookiesGdprEntityResponse>;
  deleteDiary?: Maybe<DiaryEntityResponse>;
  deleteDiaryPage?: Maybe<DiaryPageEntityResponse>;
  deleteGdprPage?: Maybe<GdprPageEntityResponse>;
  deleteHomePage?: Maybe<HomePageEntityResponse>;
  deleteMenu?: Maybe<MenuEntityResponse>;
  deleteMessage?: Maybe<MessageEntityResponse>;
  deleteNew?: Maybe<NewEntityResponse>;
  deleteNewsPage?: Maybe<NewsPageEntityResponse>;
  deletePolicy?: Maybe<PolicyEntityResponse>;
  deleteSeo?: Maybe<SeoEntityResponse>;
  deleteSingleDiaryPage?: Maybe<SingleDiaryPageEntityResponse>;
  deleteSingleNewsPage?: Maybe<SingleNewsPageEntityResponse>;
  deleteSingleWinePage?: Maybe<SingleWinePageEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteVina?: Maybe<VinaEntityResponse>;
  deleteVinyardPage?: Maybe<VinyardPageEntityResponse>;
  deleteVisitsPage?: Maybe<VisitsPageEntityResponse>;
  deleteWineCap?: Maybe<WineCapEntityResponse>;
  deleteWineType?: Maybe<WineTypeEntityResponse>;
  deleteWinesPage?: Maybe<WinesPageEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAboutPage?: Maybe<AboutPageEntityResponse>;
  updateAgeConsent?: Maybe<AgeConsentEntityResponse>;
  updateB2BPage?: Maybe<B2BPageEntityResponse>;
  updateCellerPage?: Maybe<CellerPageEntityResponse>;
  updateContactForm?: Maybe<ContactFormEntityResponse>;
  updateContactPage?: Maybe<ContactPageEntityResponse>;
  updateCookiesGdpr?: Maybe<CookiesGdprEntityResponse>;
  updateDiary?: Maybe<DiaryEntityResponse>;
  updateDiaryPage?: Maybe<DiaryPageEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateGdprPage?: Maybe<GdprPageEntityResponse>;
  updateHomePage?: Maybe<HomePageEntityResponse>;
  updateMenu?: Maybe<MenuEntityResponse>;
  updateMessage?: Maybe<MessageEntityResponse>;
  updateNew?: Maybe<NewEntityResponse>;
  updateNewsPage?: Maybe<NewsPageEntityResponse>;
  updatePolicy?: Maybe<PolicyEntityResponse>;
  updateSeo?: Maybe<SeoEntityResponse>;
  updateSingleDiaryPage?: Maybe<SingleDiaryPageEntityResponse>;
  updateSingleNewsPage?: Maybe<SingleNewsPageEntityResponse>;
  updateSingleWinePage?: Maybe<SingleWinePageEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateVina?: Maybe<VinaEntityResponse>;
  updateVinyardPage?: Maybe<VinyardPageEntityResponse>;
  updateVisitsPage?: Maybe<VisitsPageEntityResponse>;
  updateWineCap?: Maybe<WineCapEntityResponse>;
  updateWineType?: Maybe<WineTypeEntityResponse>;
  updateWinesPage?: Maybe<WinesPageEntityResponse>;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateAboutPageLocalizationArgs = {
  data?: InputMaybe<AboutPageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateAgeConsentLocalizationArgs = {
  data?: InputMaybe<AgeConsentInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateB2BPageLocalizationArgs = {
  data?: InputMaybe<B2BPageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateCellerPageLocalizationArgs = {
  data?: InputMaybe<CellerPageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateContactFormLocalizationArgs = {
  data?: InputMaybe<ContactFormInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateContactPageLocalizationArgs = {
  data?: InputMaybe<ContactPageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateCookiesGdprLocalizationArgs = {
  data?: InputMaybe<CookiesGdprInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateDiaryArgs = {
  data: DiaryInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateDiaryLocalizationArgs = {
  data?: InputMaybe<DiaryInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateDiaryPageLocalizationArgs = {
  data?: InputMaybe<DiaryPageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateGdprPageLocalizationArgs = {
  data?: InputMaybe<GdprPageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateHomePageLocalizationArgs = {
  data?: InputMaybe<HomePageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateMenuLocalizationArgs = {
  data?: InputMaybe<MenuInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateMessageArgs = {
  data: MessageInput;
};


export type MutationCreateNewArgs = {
  data: NewInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateNewLocalizationArgs = {
  data?: InputMaybe<NewInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateNewsPageLocalizationArgs = {
  data?: InputMaybe<NewsPageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreatePolicyLocalizationArgs = {
  data?: InputMaybe<PolicyInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateSeoLocalizationArgs = {
  data?: InputMaybe<SeoInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateSingleDiaryPageLocalizationArgs = {
  data?: InputMaybe<SingleDiaryPageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateSingleNewsPageLocalizationArgs = {
  data?: InputMaybe<SingleNewsPageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateSingleWinePageLocalizationArgs = {
  data?: InputMaybe<SingleWinePageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationCreateVinaArgs = {
  data: VinaInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateVinaLocalizationArgs = {
  data?: InputMaybe<VinaInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateVinyardPageLocalizationArgs = {
  data?: InputMaybe<VinyardPageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateVisitsPageLocalizationArgs = {
  data?: InputMaybe<VisitsPageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateWineCapArgs = {
  data: WineCapInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateWineCapLocalizationArgs = {
  data?: InputMaybe<WineCapInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateWineTypeArgs = {
  data: WineTypeInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateWineTypeLocalizationArgs = {
  data?: InputMaybe<WineTypeInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateWinesPageLocalizationArgs = {
  data?: InputMaybe<WinesPageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteAboutPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteAgeConsentArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteB2BPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteCellerPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteContactFormArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteContactPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteCookiesGdprArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteDiaryArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteDiaryPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteGdprPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteHomePageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteMenuArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteMessageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteNewArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteNewsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeletePolicyArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteSeoArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteSingleDiaryPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteSingleNewsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteSingleWinePageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteVinaArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteVinyardPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteVisitsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteWineCapArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteWineTypeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteWinesPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateAboutPageArgs = {
  data: AboutPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateAgeConsentArgs = {
  data: AgeConsentInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateB2BPageArgs = {
  data: B2BPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateCellerPageArgs = {
  data: CellerPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateContactFormArgs = {
  data: ContactFormInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateContactPageArgs = {
  data: ContactPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateCookiesGdprArgs = {
  data: CookiesGdprInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateDiaryArgs = {
  data: DiaryInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateDiaryPageArgs = {
  data: DiaryPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateGdprPageArgs = {
  data: GdprPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateHomePageArgs = {
  data: HomePageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateMenuArgs = {
  data: MenuInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateMessageArgs = {
  data: MessageInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateNewArgs = {
  data: NewInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateNewsPageArgs = {
  data: NewsPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdatePolicyArgs = {
  data: PolicyInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateSeoArgs = {
  data: SeoInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateSingleDiaryPageArgs = {
  data: SingleDiaryPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateSingleNewsPageArgs = {
  data: SingleNewsPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateSingleWinePageArgs = {
  data: SingleWinePageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateVinaArgs = {
  data: VinaInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateVinyardPageArgs = {
  data: VinyardPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateVisitsPageArgs = {
  data: VisitsPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateWineCapArgs = {
  data: WineCapInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateWineTypeArgs = {
  data: WineTypeInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateWinesPageArgs = {
  data: WinesPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type New = {
  __typename?: 'New';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  image?: Maybe<UploadFileRelationResponseCollection>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<NewRelationResponseCollection>;
  publicationDate?: Maybe<Scalars['Date']['output']>;
  slug: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type NewImageArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type NewLocalizationsArgs = {
  filters?: InputMaybe<NewFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type NewEntity = {
  __typename?: 'NewEntity';
  attributes?: Maybe<New>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type NewEntityResponse = {
  __typename?: 'NewEntityResponse';
  data?: Maybe<NewEntity>;
};

export type NewEntityResponseCollection = {
  __typename?: 'NewEntityResponseCollection';
  data: Array<NewEntity>;
  meta: ResponseCollectionMeta;
};

export type NewFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<NewFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<NewFiltersInput>;
  not?: InputMaybe<NewFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NewFiltersInput>>>;
  publicationDate?: InputMaybe<DateFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type NewInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publicationDate?: InputMaybe<Scalars['Date']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type NewRelationResponseCollection = {
  __typename?: 'NewRelationResponseCollection';
  data: Array<NewEntity>;
};

export type NewsPage = {
  __typename?: 'NewsPage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  diaryHeading?: Maybe<Scalars['String']['output']>;
  heroHeading?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<NewsPageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type NewsPageEntity = {
  __typename?: 'NewsPageEntity';
  attributes?: Maybe<NewsPage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type NewsPageEntityResponse = {
  __typename?: 'NewsPageEntityResponse';
  data?: Maybe<NewsPageEntity>;
};

export type NewsPageInput = {
  diaryHeading?: InputMaybe<Scalars['String']['input']>;
  heroHeading?: InputMaybe<Scalars['String']['input']>;
};

export type NewsPageRelationResponseCollection = {
  __typename?: 'NewsPageRelationResponseCollection';
  data: Array<NewsPageEntity>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type Policy = {
  __typename?: 'Policy';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<PolicyRelationResponseCollection>;
  pageHeading?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PolicyEntity = {
  __typename?: 'PolicyEntity';
  attributes?: Maybe<Policy>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PolicyEntityResponse = {
  __typename?: 'PolicyEntityResponse';
  data?: Maybe<PolicyEntity>;
};

export type PolicyInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  pageHeading?: InputMaybe<Scalars['String']['input']>;
};

export type PolicyRelationResponseCollection = {
  __typename?: 'PolicyRelationResponseCollection';
  data: Array<PolicyEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  aboutPage?: Maybe<AboutPageEntityResponse>;
  ageConsent?: Maybe<AgeConsentEntityResponse>;
  b2BPage?: Maybe<B2BPageEntityResponse>;
  cellerPage?: Maybe<CellerPageEntityResponse>;
  contactForm?: Maybe<ContactFormEntityResponse>;
  contactPage?: Maybe<ContactPageEntityResponse>;
  cookiesGdpr?: Maybe<CookiesGdprEntityResponse>;
  diaries?: Maybe<DiaryEntityResponseCollection>;
  diary?: Maybe<DiaryEntityResponse>;
  diaryPage?: Maybe<DiaryPageEntityResponse>;
  gdprPage?: Maybe<GdprPageEntityResponse>;
  homePage?: Maybe<HomePageEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  menu?: Maybe<MenuEntityResponse>;
  message?: Maybe<MessageEntityResponse>;
  messages?: Maybe<MessageEntityResponseCollection>;
  new?: Maybe<NewEntityResponse>;
  news?: Maybe<NewEntityResponseCollection>;
  newsPage?: Maybe<NewsPageEntityResponse>;
  policy?: Maybe<PolicyEntityResponse>;
  seo?: Maybe<SeoEntityResponse>;
  singleDiaryPage?: Maybe<SingleDiaryPageEntityResponse>;
  singleNewsPage?: Maybe<SingleNewsPageEntityResponse>;
  singleWinePage?: Maybe<SingleWinePageEntityResponse>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  vina?: Maybe<VinaEntityResponse>;
  vinas?: Maybe<VinaEntityResponseCollection>;
  vinyardPage?: Maybe<VinyardPageEntityResponse>;
  visitsPage?: Maybe<VisitsPageEntityResponse>;
  wineCap?: Maybe<WineCapEntityResponse>;
  wineCaps?: Maybe<WineCapEntityResponseCollection>;
  wineType?: Maybe<WineTypeEntityResponse>;
  wineTypes?: Maybe<WineTypeEntityResponseCollection>;
  winesPage?: Maybe<WinesPageEntityResponse>;
};


export type QueryAboutPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryAgeConsentArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryB2BPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryCellerPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryContactFormArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryContactPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryCookiesGdprArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryDiariesArgs = {
  filters?: InputMaybe<DiaryFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDiaryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryDiaryPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryGdprPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryHomePageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMenuArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryMessageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryMessagesArgs = {
  filters?: InputMaybe<MessageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNewArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryNewsArgs = {
  filters?: InputMaybe<NewFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNewsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryPolicyArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QuerySeoArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QuerySingleDiaryPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QuerySingleNewsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QuerySingleWinePageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryVinaArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryVinasArgs = {
  filters?: InputMaybe<VinaFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryVinyardPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryVisitsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryWineCapArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryWineCapsArgs = {
  filters?: InputMaybe<WineCapFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWineTypeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryWineTypesArgs = {
  filters?: InputMaybe<WineTypeFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWinesPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Seo = {
  __typename?: 'Seo';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<SeoRelationResponseCollection>;
  seoDescription?: Maybe<Scalars['String']['output']>;
  seoKeywords?: Maybe<Scalars['String']['output']>;
  seoTitle?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SeoEntity = {
  __typename?: 'SeoEntity';
  attributes?: Maybe<Seo>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SeoEntityResponse = {
  __typename?: 'SeoEntityResponse';
  data?: Maybe<SeoEntity>;
};

export type SeoInput = {
  seoDescription?: InputMaybe<Scalars['String']['input']>;
  seoKeywords?: InputMaybe<Scalars['String']['input']>;
  seoTitle?: InputMaybe<Scalars['String']['input']>;
};

export type SeoRelationResponseCollection = {
  __typename?: 'SeoRelationResponseCollection';
  data: Array<SeoEntity>;
};

export type SingleDiaryPage = {
  __typename?: 'SingleDiaryPage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  heroHeading?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<SingleDiaryPageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SingleDiaryPageEntity = {
  __typename?: 'SingleDiaryPageEntity';
  attributes?: Maybe<SingleDiaryPage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SingleDiaryPageEntityResponse = {
  __typename?: 'SingleDiaryPageEntityResponse';
  data?: Maybe<SingleDiaryPageEntity>;
};

export type SingleDiaryPageInput = {
  heroHeading?: InputMaybe<Scalars['String']['input']>;
};

export type SingleDiaryPageRelationResponseCollection = {
  __typename?: 'SingleDiaryPageRelationResponseCollection';
  data: Array<SingleDiaryPageEntity>;
};

export type SingleNewsPage = {
  __typename?: 'SingleNewsPage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  heroHeading?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<SingleNewsPageRelationResponseCollection>;
  secondaryHeading?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SingleNewsPageEntity = {
  __typename?: 'SingleNewsPageEntity';
  attributes?: Maybe<SingleNewsPage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SingleNewsPageEntityResponse = {
  __typename?: 'SingleNewsPageEntityResponse';
  data?: Maybe<SingleNewsPageEntity>;
};

export type SingleNewsPageInput = {
  heroHeading?: InputMaybe<Scalars['String']['input']>;
  secondaryHeading?: InputMaybe<Scalars['String']['input']>;
};

export type SingleNewsPageRelationResponseCollection = {
  __typename?: 'SingleNewsPageRelationResponseCollection';
  data: Array<SingleNewsPageEntity>;
};

export type SingleWinePage = {
  __typename?: 'SingleWinePage';
  acid?: Maybe<Scalars['String']['output']>;
  alchohol?: Maybe<Scalars['String']['output']>;
  bottlesProduced?: Maybe<Scalars['String']['output']>;
  buttonText?: Maybe<Scalars['String']['output']>;
  closing?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  degustaion?: Maybe<Scalars['String']['output']>;
  food?: Maybe<Scalars['String']['output']>;
  heroHeading?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<SingleWinePageRelationResponseCollection>;
  maturation?: Maybe<Scalars['String']['output']>;
  rewardsHeading?: Maybe<Scalars['String']['output']>;
  sugars?: Maybe<Scalars['String']['output']>;
  temperature?: Maybe<Scalars['String']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vinification?: Maybe<Scalars['String']['output']>;
  volume?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['String']['output']>;
};

export type SingleWinePageEntity = {
  __typename?: 'SingleWinePageEntity';
  attributes?: Maybe<SingleWinePage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SingleWinePageEntityResponse = {
  __typename?: 'SingleWinePageEntityResponse';
  data?: Maybe<SingleWinePageEntity>;
};

export type SingleWinePageInput = {
  acid?: InputMaybe<Scalars['String']['input']>;
  alchohol?: InputMaybe<Scalars['String']['input']>;
  bottlesProduced?: InputMaybe<Scalars['String']['input']>;
  buttonText?: InputMaybe<Scalars['String']['input']>;
  closing?: InputMaybe<Scalars['String']['input']>;
  degustaion?: InputMaybe<Scalars['String']['input']>;
  food?: InputMaybe<Scalars['String']['input']>;
  heroHeading?: InputMaybe<Scalars['String']['input']>;
  maturation?: InputMaybe<Scalars['String']['input']>;
  rewardsHeading?: InputMaybe<Scalars['String']['input']>;
  sugars?: InputMaybe<Scalars['String']['input']>;
  temperature?: InputMaybe<Scalars['String']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
  vinification?: InputMaybe<Scalars['String']['input']>;
  volume?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['String']['input']>;
};

export type SingleWinePageRelationResponseCollection = {
  __typename?: 'SingleWinePageRelationResponseCollection';
  data: Array<SingleWinePageEntity>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type Vina = {
  __typename?: 'Vina';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  harvestYear?: Maybe<Scalars['Date']['output']>;
  image?: Maybe<UploadFileEntityResponse>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<VinaRelationResponseCollection>;
  longDescription?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  wineAwards?: Maybe<Array<Maybe<ComponentWineProfileWineAwards>>>;
  wineDetails?: Maybe<ComponentWineProfileWineDetails>;
  wineInformation?: Maybe<ComponentWineProfileWineInformation>;
  winePasspordPDF?: Maybe<UploadFileEntityResponse>;
  wineType?: Maybe<WineTypeEntityResponse>;
};


export type VinaLocalizationsArgs = {
  filters?: InputMaybe<VinaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type VinaWineAwardsArgs = {
  filters?: InputMaybe<ComponentWineProfileWineAwardsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VinaEntity = {
  __typename?: 'VinaEntity';
  attributes?: Maybe<Vina>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type VinaEntityResponse = {
  __typename?: 'VinaEntityResponse';
  data?: Maybe<VinaEntity>;
};

export type VinaEntityResponseCollection = {
  __typename?: 'VinaEntityResponseCollection';
  data: Array<VinaEntity>;
  meta: ResponseCollectionMeta;
};

export type VinaFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<VinaFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  harvestYear?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<VinaFiltersInput>;
  longDescription?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<VinaFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<VinaFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  shortDescription?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  wineAwards?: InputMaybe<ComponentWineProfileWineAwardsFiltersInput>;
  wineDetails?: InputMaybe<ComponentWineProfileWineDetailsFiltersInput>;
  wineInformation?: InputMaybe<ComponentWineProfileWineInformationFiltersInput>;
  wineType?: InputMaybe<WineTypeFiltersInput>;
};

export type VinaInput = {
  harvestYear?: InputMaybe<Scalars['Date']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  longDescription?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  wineAwards?: InputMaybe<Array<InputMaybe<ComponentWineProfileWineAwardsInput>>>;
  wineDetails?: InputMaybe<ComponentWineProfileWineDetailsInput>;
  wineInformation?: InputMaybe<ComponentWineProfileWineInformationInput>;
  winePasspordPDF?: InputMaybe<Scalars['ID']['input']>;
  wineType?: InputMaybe<Scalars['ID']['input']>;
};

export type VinaRelationResponseCollection = {
  __typename?: 'VinaRelationResponseCollection';
  data: Array<VinaEntity>;
};

export type VinyardPage = {
  __typename?: 'VinyardPage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  heroImage?: Maybe<UploadFileEntityResponse>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<VinyardPageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vinyardPageLayout?: Maybe<Array<Maybe<VinyardPageVinyardPageLayoutDynamicZone>>>;
};

export type VinyardPageEntity = {
  __typename?: 'VinyardPageEntity';
  attributes?: Maybe<VinyardPage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type VinyardPageEntityResponse = {
  __typename?: 'VinyardPageEntityResponse';
  data?: Maybe<VinyardPageEntity>;
};

export type VinyardPageInput = {
  heroImage?: InputMaybe<Scalars['ID']['input']>;
  vinyardPageLayout?: InputMaybe<Array<Scalars['VinyardPageVinyardPageLayoutDynamicZoneInput']['input']>>;
};

export type VinyardPageRelationResponseCollection = {
  __typename?: 'VinyardPageRelationResponseCollection';
  data: Array<VinyardPageEntity>;
};

export type VinyardPageVinyardPageLayoutDynamicZone = ComponentGlobalImage | ComponentGlobalParagraph | ComponentGlobalTitleNText | Error;

export type VisitsPage = {
  __typename?: 'VisitsPage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  heroImage?: Maybe<UploadFileEntityResponse>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<VisitsPageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  visitsPageLayout?: Maybe<Array<Maybe<VisitsPageVisitsPageLayoutDynamicZone>>>;
};

export type VisitsPageEntity = {
  __typename?: 'VisitsPageEntity';
  attributes?: Maybe<VisitsPage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type VisitsPageEntityResponse = {
  __typename?: 'VisitsPageEntityResponse';
  data?: Maybe<VisitsPageEntity>;
};

export type VisitsPageInput = {
  heroImage?: InputMaybe<Scalars['ID']['input']>;
  visitsPageLayout?: InputMaybe<Array<Scalars['VisitsPageVisitsPageLayoutDynamicZoneInput']['input']>>;
};

export type VisitsPageRelationResponseCollection = {
  __typename?: 'VisitsPageRelationResponseCollection';
  data: Array<VisitsPageEntity>;
};

export type VisitsPageVisitsPageLayoutDynamicZone = ComponentGlobalImage | ComponentGlobalParagraph | ComponentGlobalTextEditor | ComponentGlobalTitleNText | Error;

export type WineCap = {
  __typename?: 'WineCap';
  capType?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<WineCapRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type WineCapLocalizationsArgs = {
  filters?: InputMaybe<WineCapFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type WineCapEntity = {
  __typename?: 'WineCapEntity';
  attributes?: Maybe<WineCap>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type WineCapEntityResponse = {
  __typename?: 'WineCapEntityResponse';
  data?: Maybe<WineCapEntity>;
};

export type WineCapEntityResponseCollection = {
  __typename?: 'WineCapEntityResponseCollection';
  data: Array<WineCapEntity>;
  meta: ResponseCollectionMeta;
};

export type WineCapFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<WineCapFiltersInput>>>;
  capType?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<WineCapFiltersInput>;
  not?: InputMaybe<WineCapFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<WineCapFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type WineCapInput = {
  capType?: InputMaybe<Scalars['String']['input']>;
};

export type WineCapRelationResponseCollection = {
  __typename?: 'WineCapRelationResponseCollection';
  data: Array<WineCapEntity>;
};

export type WineType = {
  __typename?: 'WineType';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  filterName?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<WineTypeRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  wineType?: Maybe<Scalars['String']['output']>;
};


export type WineTypeLocalizationsArgs = {
  filters?: InputMaybe<WineTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type WineTypeEntity = {
  __typename?: 'WineTypeEntity';
  attributes?: Maybe<WineType>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type WineTypeEntityResponse = {
  __typename?: 'WineTypeEntityResponse';
  data?: Maybe<WineTypeEntity>;
};

export type WineTypeEntityResponseCollection = {
  __typename?: 'WineTypeEntityResponseCollection';
  data: Array<WineTypeEntity>;
  meta: ResponseCollectionMeta;
};

export type WineTypeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<WineTypeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  filterName?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<WineTypeFiltersInput>;
  not?: InputMaybe<WineTypeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<WineTypeFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  wineType?: InputMaybe<StringFilterInput>;
};

export type WineTypeInput = {
  filterName?: InputMaybe<Scalars['String']['input']>;
  wineType?: InputMaybe<Scalars['String']['input']>;
};

export type WineTypeRelationResponseCollection = {
  __typename?: 'WineTypeRelationResponseCollection';
  data: Array<WineTypeEntity>;
};

export type WinesPage = {
  __typename?: 'WinesPage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  heroHeading?: Maybe<Scalars['String']['output']>;
  heroSubheading?: Maybe<Scalars['String']['output']>;
  hideFilters?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<WinesPageRelationResponseCollection>;
  showFilters?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type WinesPageEntity = {
  __typename?: 'WinesPageEntity';
  attributes?: Maybe<WinesPage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type WinesPageEntityResponse = {
  __typename?: 'WinesPageEntityResponse';
  data?: Maybe<WinesPageEntity>;
};

export type WinesPageInput = {
  heroHeading?: InputMaybe<Scalars['String']['input']>;
  heroSubheading?: InputMaybe<Scalars['String']['input']>;
  hideFilters?: InputMaybe<Scalars['String']['input']>;
  showFilters?: InputMaybe<Scalars['String']['input']>;
};

export type WinesPageRelationResponseCollection = {
  __typename?: 'WinesPageRelationResponseCollection';
  data: Array<WinesPageEntity>;
};

export type AboutPageQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type AboutPageQuery = { __typename?: 'Query', aboutPage?: { __typename?: 'AboutPageEntityResponse', data?: { __typename?: 'AboutPageEntity', attributes?: { __typename?: 'AboutPage', aboutPageLayout?: Array<{ __typename: 'ComponentGlobalImage', id: string, description?: string | null, imageOrientation?: Enum_Componentglobalimage_Imageorientation | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | { __typename: 'ComponentGlobalTitleNText', id: string, minorHeading?: string | null, majorHeading?: string | null, text?: string | null, marker?: string | null } | { __typename: 'Error' } | null> | null } | null } | null } | null };

export type B2BPageQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type B2BPageQuery = { __typename?: 'Query', b2BPage?: { __typename?: 'B2BPageEntityResponse', data?: { __typename?: 'B2BPageEntity', attributes?: { __typename?: 'B2BPage', b2bPageLayout?: Array<{ __typename: 'ComponentGlobalImage', id: string, description?: string | null, imageOrientation?: Enum_Componentglobalimage_Imageorientation | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null } | { __typename: 'ComponentGlobalParagraph', id: string, text?: string | null } | { __typename: 'ComponentGlobalTextEditor', id: string, text?: string | null, heading?: string | null } | { __typename: 'ComponentGlobalTitleNText', id: string, minorHeading?: string | null, majorHeading?: string | null, text?: string | null, marker?: string | null } | { __typename: 'Error', code: string, message?: string | null } | null> | null, heroImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null } | null } | null } | null, contactForm?: { __typename?: 'ContactFormEntityResponse', data?: { __typename?: 'ContactFormEntity', attributes?: { __typename?: 'ContactForm', contactNameField?: string | null, companyNameField?: string | null, businessActivity?: string | null, privatePerson?: string | null, company?: string | null, horeca?: string | null, interests?: string | null, whiteWines?: string | null, redWines?: string | null, roseWines?: string | null, collectionWines?: string | null, visits?: string | null, knowledge?: string | null, curentOffering?: string | null, phoneNumber?: string | null, email?: string | null, yes?: string | null, no?: string | null, chooseOption?: string | null, formHeading?: string | null, buttonTextSend?: string | null, thankYouHeading?: string | null, thankYouSubheading?: string | null, thankYouButton?: string | null, locale?: string | null } | null } | null } | null };

export type CellerPageQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type CellerPageQuery = { __typename?: 'Query', cellerPage?: { __typename?: 'CellerPageEntityResponse', data?: { __typename?: 'CellerPageEntity', attributes?: { __typename?: 'CellerPage', heroImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null, cellerPageLayout?: Array<{ __typename: 'ComponentGlobalImage', description?: string | null, imageOrientation?: Enum_Componentglobalimage_Imageorientation | null, id: string, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null } | { __typename: 'ComponentGlobalParagraph', id: string, text?: string | null } | { __typename: 'ComponentGlobalTitleNText', id: string, minorHeading?: string | null, majorHeading?: string | null, text?: string | null, marker?: string | null } | { __typename: 'Error' } | null> | null } | null } | null } | null };

export type DiariesCollectionQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type DiariesCollectionQuery = { __typename?: 'Query', diaries?: { __typename?: 'DiaryEntityResponseCollection', data: Array<{ __typename?: 'DiaryEntity', attributes?: { __typename?: 'Diary', content?: string | null, publicationDate?: any | null, slug: string, title?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null, gallery?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null }> } | null } | null }> } | null, homePage?: { __typename?: 'HomePageEntityResponse', data?: { __typename?: 'HomePageEntity', attributes?: { __typename?: 'HomePage', diaryHeading?: string | null, featuredDiary?: { __typename?: 'DiaryRelationResponseCollection', data: Array<{ __typename?: 'DiaryEntity', attributes?: { __typename?: 'Diary', title?: string | null, slug: string, publicationDate?: any | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null } | null }> } | null } | null } | null } | null };

export type DiariesSingleQueryVariables = Exact<{
  filters?: InputMaybe<DiaryFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type DiariesSingleQuery = { __typename?: 'Query', diaries?: { __typename?: 'DiaryEntityResponseCollection', data: Array<{ __typename?: 'DiaryEntity', attributes?: { __typename?: 'Diary', content?: string | null, publicationDate?: any | null, slug: string, title?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null, gallery?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null }> } | null } | null }> } | null, homePage?: { __typename?: 'HomePageEntityResponse', data?: { __typename?: 'HomePageEntity', attributes?: { __typename?: 'HomePage', diaryHeading?: string | null, featuredDiary?: { __typename?: 'DiaryRelationResponseCollection', data: Array<{ __typename?: 'DiaryEntity', attributes?: { __typename?: 'Diary', title?: string | null, slug: string, publicationDate?: any | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null } | null }> } | null } | null } | null } | null };

export type GdprPageQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type GdprPageQuery = { __typename?: 'Query', gdprPage?: { __typename?: 'GdprPageEntityResponse', data?: { __typename?: 'GdprPageEntity', attributes?: { __typename?: 'GdprPage', pageContent?: string | null, pageHeading?: string | null } | null } | null } | null };

export type HomePageQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type HomePageQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePageEntityResponse', data?: { __typename?: 'HomePageEntity', attributes?: { __typename?: 'HomePage', aboutButton?: string | null, aboutText?: string | null, diaryHeading?: string | null, featuredButton?: string | null, featuredWinesHeading?: string | null, featuredWinesSubheading?: string | null, heroHeading?: string | null, heroSubheading?: string | null, newsHeading?: string | null, aboutImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null, featuredDiary?: { __typename?: 'DiaryRelationResponseCollection', data: Array<{ __typename?: 'DiaryEntity', attributes?: { __typename?: 'Diary', title?: string | null, slug: string, publicationDate?: any | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null } | null }> } | null, featuredNews?: { __typename?: 'NewRelationResponseCollection', data: Array<{ __typename?: 'NewEntity', attributes?: { __typename?: 'New', title?: string | null, slug: string, publicationDate?: any | null } | null }> } | null, featuredWines?: { __typename?: 'VinaRelationResponseCollection', data: Array<{ __typename?: 'VinaEntity', attributes?: { __typename?: 'Vina', name?: string | null, slug: string, harvestYear?: any | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null } | null }> } | null, heroImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null, imgLink?: Array<{ __typename?: 'ComponentHomePageImgLink', link?: string | null, text?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null } | null> | null, imgLink2?: Array<{ __typename?: 'ComponentHomePageImgLink', text?: string | null, link?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null } | null> | null } | null } | null } | null };

export type MenuQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type MenuQuery = { __typename?: 'Query', menu?: { __typename?: 'MenuEntityResponse', data?: { __typename?: 'MenuEntity', attributes?: { __typename?: 'Menu', wineEstate?: string | null, ourWines?: string | null, contactUs?: string | null, aboutUs?: string | null, vinyardLink?: string | null, linkCeller?: string | null, linkVisits?: string | null, linkWhites?: string | null, linkReds?: string | null, linkRoses?: string | null, linkCollections?: string | null, linkB2b?: string | null, linkContact?: string | null, linkPhilosophy?: string | null, linkHistory?: string | null, linkTeam?: string | null, linkDiary?: string | null, linkNews?: string | null, linkGDPR?: string | null, linkPolicy?: string | null, linkVinyard?: string | null } | null } | null } | null, contactPage?: { __typename?: 'ContactPageEntityResponse', data?: { __typename?: 'ContactPageEntity', attributes?: { __typename?: 'ContactPage', addressLine1?: string | null, addressLine2?: string | null, addressLine3?: string | null, email?: string | null, phoneNumber?: string | null, heroHeading?: string | null, website?: string | null } | null } | null } | null };

export type NewsCollectionQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type NewsCollectionQuery = { __typename?: 'Query', news?: { __typename?: 'NewEntityResponseCollection', data: Array<{ __typename?: 'NewEntity', attributes?: { __typename?: 'New', content?: string | null, publicationDate?: any | null, slug: string, title?: string | null, image?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null }> } | null } | null }> } | null, homePage?: { __typename?: 'HomePageEntityResponse', data?: { __typename?: 'HomePageEntity', attributes?: { __typename?: 'HomePage', diaryHeading?: string | null, newsHeading?: string | null, featuredDiary?: { __typename?: 'DiaryRelationResponseCollection', data: Array<{ __typename?: 'DiaryEntity', attributes?: { __typename?: 'Diary', title?: string | null, slug: string, publicationDate?: any | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null } | null }> } | null, featuredNews?: { __typename?: 'NewRelationResponseCollection', data: Array<{ __typename?: 'NewEntity', attributes?: { __typename?: 'New', title?: string | null, slug: string, publicationDate?: any | null } | null }> } | null } | null } | null } | null };

export type NewsSingleQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  filters?: InputMaybe<NewFiltersInput>;
}>;


export type NewsSingleQuery = { __typename?: 'Query', news?: { __typename?: 'NewEntityResponseCollection', data: Array<{ __typename?: 'NewEntity', attributes?: { __typename?: 'New', content?: string | null, publicationDate?: any | null, slug: string, title?: string | null, image?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null }> } | null } | null }> } | null, homePage?: { __typename?: 'HomePageEntityResponse', data?: { __typename?: 'HomePageEntity', attributes?: { __typename?: 'HomePage', newsHeading?: string | null, featuredNews?: { __typename?: 'NewRelationResponseCollection', data: Array<{ __typename?: 'NewEntity', attributes?: { __typename?: 'New', title?: string | null, slug: string, publicationDate?: any | null } | null }> } | null } | null } | null } | null };

export type PolicyQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type PolicyQuery = { __typename?: 'Query', policy?: { __typename?: 'PolicyEntityResponse', data?: { __typename?: 'PolicyEntity', attributes?: { __typename?: 'Policy', pageHeading?: string | null, content?: string | null } | null } | null } | null };

export type VinyardPageQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type VinyardPageQuery = { __typename?: 'Query', vinyardPage?: { __typename?: 'VinyardPageEntityResponse', data?: { __typename?: 'VinyardPageEntity', attributes?: { __typename?: 'VinyardPage', heroImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null, vinyardPageLayout?: Array<{ __typename: 'ComponentGlobalImage', id: string, description?: string | null, imageOrientation?: Enum_Componentglobalimage_Imageorientation | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null } | { __typename: 'ComponentGlobalParagraph', id: string, text?: string | null } | { __typename: 'ComponentGlobalTitleNText', id: string, minorHeading?: string | null, majorHeading?: string | null, text?: string | null, marker?: string | null } | { __typename: 'Error' } | null> | null } | null } | null } | null };

export type VisitsPageQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type VisitsPageQuery = { __typename?: 'Query', visitsPage?: { __typename?: 'VisitsPageEntityResponse', data?: { __typename?: 'VisitsPageEntity', attributes?: { __typename?: 'VisitsPage', heroImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null, visitsPageLayout?: Array<{ __typename: 'ComponentGlobalImage', id: string, description?: string | null, imageOrientation?: Enum_Componentglobalimage_Imageorientation | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null } | { __typename: 'ComponentGlobalParagraph', id: string, text?: string | null } | { __typename: 'ComponentGlobalTextEditor', id: string, text?: string | null, heading?: string | null } | { __typename: 'ComponentGlobalTitleNText', id: string, minorHeading?: string | null, majorHeading?: string | null, text?: string | null, marker?: string | null } | { __typename: 'Error' } | null> | null } | null } | null } | null };

export type CollectionPageQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  filters?: InputMaybe<VinaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
}>;


export type CollectionPageQuery = { __typename?: 'Query', vinas?: { __typename?: 'VinaEntityResponseCollection', data: Array<{ __typename?: 'VinaEntity', attributes?: { __typename?: 'Vina', harvestYear?: any | null, slug: string, shortDescription?: string | null, name?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null, wineType?: { __typename?: 'WineTypeEntityResponse', data?: { __typename?: 'WineTypeEntity', attributes?: { __typename?: 'WineType', wineType?: string | null, filterName?: string | null } | null } | null } | null } | null }> } | null, winesPage?: { __typename?: 'WinesPageEntityResponse', data?: { __typename?: 'WinesPageEntity', attributes?: { __typename?: 'WinesPage', heroHeading?: string | null, heroSubheading?: string | null, hideFilters?: string | null, showFilters?: string | null } | null } | null } | null, wineTypes?: { __typename?: 'WineTypeEntityResponseCollection', data: Array<{ __typename?: 'WineTypeEntity', attributes?: { __typename?: 'WineType', filterName?: string | null, wineType?: string | null } | null }> } | null };

export type VinasQueryVariables = Exact<{
  filters?: InputMaybe<VinaFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type VinasQuery = { __typename?: 'Query', vinas?: { __typename?: 'VinaEntityResponseCollection', data: Array<{ __typename?: 'VinaEntity', attributes?: { __typename?: 'Vina', name?: string | null, harvestYear?: any | null, longDescription?: string | null, shortDescription?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null, wineAwards?: Array<{ __typename?: 'ComponentWineProfileWineAwards', awardDescription?: string | null, year?: number | null, id: string } | null> | null, wineDetails?: { __typename?: 'ComponentWineProfileWineDetails', acids?: number | null, alchohol?: number | null, id: string, sugars?: number | null, temperatureC?: number | null, temperatureF?: number | null, year?: any | null, closing?: { __typename?: 'WineCapRelationResponseCollection', data: Array<{ __typename?: 'WineCapEntity', attributes?: { __typename?: 'WineCap', capType?: string | null } | null }> } | null, volumeNCount?: Array<{ __typename?: 'ComponentWineProfileObemIBroj', bottlesProduced?: number | null, volume?: number | null, id: string } | null> | null } | null, wineInformation?: { __typename?: 'ComponentWineProfileWineInformation', degustaion?: string | null, food?: string | null, maturation?: string | null, vinification?: string | null, id: string } | null, winePasspordPDF?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null, wineType?: { __typename?: 'WineTypeEntityResponse', data?: { __typename?: 'WineTypeEntity', attributes?: { __typename?: 'WineType', wineType?: string | null, filterName?: string | null } | null } | null } | null } | null }> } | null, singleWinePage?: { __typename?: 'SingleWinePageEntityResponse', data?: { __typename?: 'SingleWinePageEntity', attributes?: { __typename?: 'SingleWinePage', heroHeading?: string | null, alchohol?: string | null, acid?: string | null, sugars?: string | null, volume?: string | null, closing?: string | null, year?: string | null, bottlesProduced?: string | null, temperature?: string | null, rewardsHeading?: string | null, vinification?: string | null, maturation?: string | null, degustaion?: string | null, food?: string | null, buttonText?: string | null, unit?: string | null } | null } | null } | null };


export const AboutPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AboutPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aboutPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aboutPageLayout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentGlobalImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrientation"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentGlobalTitleNText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"minorHeading"}},{"kind":"Field","name":{"kind":"Name","value":"majorHeading"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"marker"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<AboutPageQuery, AboutPageQueryVariables>;
export const B2BPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"B2BPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"b2BPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"b2bPageLayout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentGlobalImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrientation"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentGlobalParagraph"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentGlobalTextEditor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentGlobalTitleNText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"minorHeading"}},{"kind":"Field","name":{"kind":"Name","value":"majorHeading"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"marker"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"heroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"contactForm"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contactNameField"}},{"kind":"Field","name":{"kind":"Name","value":"companyNameField"}},{"kind":"Field","name":{"kind":"Name","value":"businessActivity"}},{"kind":"Field","name":{"kind":"Name","value":"privatePerson"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"horeca"}},{"kind":"Field","name":{"kind":"Name","value":"interests"}},{"kind":"Field","name":{"kind":"Name","value":"whiteWines"}},{"kind":"Field","name":{"kind":"Name","value":"redWines"}},{"kind":"Field","name":{"kind":"Name","value":"roseWines"}},{"kind":"Field","name":{"kind":"Name","value":"collectionWines"}},{"kind":"Field","name":{"kind":"Name","value":"visits"}},{"kind":"Field","name":{"kind":"Name","value":"knowledge"}},{"kind":"Field","name":{"kind":"Name","value":"curentOffering"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"yes"}},{"kind":"Field","name":{"kind":"Name","value":"no"}},{"kind":"Field","name":{"kind":"Name","value":"chooseOption"}},{"kind":"Field","name":{"kind":"Name","value":"formHeading"}},{"kind":"Field","name":{"kind":"Name","value":"buttonTextSend"}},{"kind":"Field","name":{"kind":"Name","value":"thankYouHeading"}},{"kind":"Field","name":{"kind":"Name","value":"thankYouSubheading"}},{"kind":"Field","name":{"kind":"Name","value":"thankYouButton"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}}]}}]}}]}}]}}]} as unknown as DocumentNode<B2BPageQuery, B2BPageQueryVariables>;
export const CellerPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CellerPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cellerPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cellerPageLayout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentGlobalTitleNText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"minorHeading"}},{"kind":"Field","name":{"kind":"Name","value":"majorHeading"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"marker"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentGlobalImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrientation"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentGlobalParagraph"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CellerPageQuery, CellerPageQueryVariables>;
export const DiariesCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DiariesCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"diaries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"gallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"publicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"homePage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"diaryHeading"}},{"kind":"Field","name":{"kind":"Name","value":"featuredDiary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"publicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<DiariesCollectionQuery, DiariesCollectionQueryVariables>;
export const DiariesSingleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DiariesSingle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DiaryFiltersInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"diaries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"gallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"publicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"homePage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"diaryHeading"}},{"kind":"Field","name":{"kind":"Name","value":"featuredDiary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"publicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<DiariesSingleQuery, DiariesSingleQueryVariables>;
export const GdprPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GdprPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gdprPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageContent"}},{"kind":"Field","name":{"kind":"Name","value":"pageHeading"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GdprPageQuery, GdprPageQueryVariables>;
export const HomePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HomePage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"homePage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aboutButton"}},{"kind":"Field","name":{"kind":"Name","value":"aboutImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"aboutText"}},{"kind":"Field","name":{"kind":"Name","value":"diaryHeading"}},{"kind":"Field","name":{"kind":"Name","value":"featuredButton"}},{"kind":"Field","name":{"kind":"Name","value":"diaryHeading"}},{"kind":"Field","name":{"kind":"Name","value":"featuredDiary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"publicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredNews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"publicationDate"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredWines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"harvestYear"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredWinesHeading"}},{"kind":"Field","name":{"kind":"Name","value":"featuredWinesSubheading"}},{"kind":"Field","name":{"kind":"Name","value":"heroHeading"}},{"kind":"Field","name":{"kind":"Name","value":"heroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"heroSubheading"}},{"kind":"Field","name":{"kind":"Name","value":"newsHeading"}},{"kind":"Field","name":{"kind":"Name","value":"imgLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"imgLink2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<HomePageQuery, HomePageQueryVariables>;
export const MenuDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Menu"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"menu"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wineEstate"}},{"kind":"Field","name":{"kind":"Name","value":"ourWines"}},{"kind":"Field","name":{"kind":"Name","value":"contactUs"}},{"kind":"Field","name":{"kind":"Name","value":"aboutUs"}},{"kind":"Field","name":{"kind":"Name","value":"vinyardLink"}},{"kind":"Field","name":{"kind":"Name","value":"linkCeller"}},{"kind":"Field","name":{"kind":"Name","value":"linkVisits"}},{"kind":"Field","name":{"kind":"Name","value":"linkWhites"}},{"kind":"Field","name":{"kind":"Name","value":"linkReds"}},{"kind":"Field","name":{"kind":"Name","value":"linkRoses"}},{"kind":"Field","name":{"kind":"Name","value":"linkCollections"}},{"kind":"Field","name":{"kind":"Name","value":"linkB2b"}},{"kind":"Field","name":{"kind":"Name","value":"linkContact"}},{"kind":"Field","name":{"kind":"Name","value":"linkPhilosophy"}},{"kind":"Field","name":{"kind":"Name","value":"linkHistory"}},{"kind":"Field","name":{"kind":"Name","value":"linkTeam"}},{"kind":"Field","name":{"kind":"Name","value":"linkDiary"}},{"kind":"Field","name":{"kind":"Name","value":"linkNews"}},{"kind":"Field","name":{"kind":"Name","value":"linkGDPR"}},{"kind":"Field","name":{"kind":"Name","value":"linkPolicy"}},{"kind":"Field","name":{"kind":"Name","value":"linkVinyard"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"contactPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"addressLine3"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"heroHeading"}},{"kind":"Field","name":{"kind":"Name","value":"website"}}]}}]}}]}}]}}]} as unknown as DocumentNode<MenuQuery, MenuQueryVariables>;
export const NewsCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NewsCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"news"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"publicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"homePage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"diaryHeading"}},{"kind":"Field","name":{"kind":"Name","value":"featuredDiary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"publicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"newsHeading"}},{"kind":"Field","name":{"kind":"Name","value":"featuredNews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"publicationDate"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<NewsCollectionQuery, NewsCollectionQueryVariables>;
export const NewsSingleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NewsSingle"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"NewFiltersInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"news"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"publicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"homePage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newsHeading"}},{"kind":"Field","name":{"kind":"Name","value":"featuredNews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"publicationDate"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<NewsSingleQuery, NewsSingleQueryVariables>;
export const PolicyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Policy"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"policy"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageHeading"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]}}]}}]} as unknown as DocumentNode<PolicyQuery, PolicyQueryVariables>;
export const VinyardPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"VinyardPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vinyardPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"vinyardPageLayout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentGlobalImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrientation"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentGlobalParagraph"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentGlobalTitleNText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"minorHeading"}},{"kind":"Field","name":{"kind":"Name","value":"majorHeading"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"marker"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<VinyardPageQuery, VinyardPageQueryVariables>;
export const VisitsPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"VisitsPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"visitsPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"visitsPageLayout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentGlobalImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageOrientation"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentGlobalParagraph"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentGlobalTextEditor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentGlobalTitleNText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"minorHeading"}},{"kind":"Field","name":{"kind":"Name","value":"majorHeading"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"marker"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<VisitsPageQuery, VisitsPageQueryVariables>;
export const CollectionPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CollectionPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"VinaFiltersInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationArg"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vinas"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"harvestYear"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"wineType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wineType"}},{"kind":"Field","name":{"kind":"Name","value":"filterName"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"winesPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroHeading"}},{"kind":"Field","name":{"kind":"Name","value":"heroSubheading"}},{"kind":"Field","name":{"kind":"Name","value":"hideFilters"}},{"kind":"Field","name":{"kind":"Name","value":"showFilters"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"wineTypes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filterName"}},{"kind":"Field","name":{"kind":"Name","value":"wineType"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CollectionPageQuery, CollectionPageQueryVariables>;
export const VinasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Vinas"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"VinaFiltersInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vinas"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"harvestYear"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"longDescription"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"wineAwards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"awardDescription"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"wineDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acids"}},{"kind":"Field","name":{"kind":"Name","value":"alchohol"}},{"kind":"Field","name":{"kind":"Name","value":"closing"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"capType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sugars"}},{"kind":"Field","name":{"kind":"Name","value":"temperatureC"}},{"kind":"Field","name":{"kind":"Name","value":"temperatureF"}},{"kind":"Field","name":{"kind":"Name","value":"volumeNCount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bottlesProduced"}},{"kind":"Field","name":{"kind":"Name","value":"volume"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"year"}}]}},{"kind":"Field","name":{"kind":"Name","value":"wineInformation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degustaion"}},{"kind":"Field","name":{"kind":"Name","value":"food"}},{"kind":"Field","name":{"kind":"Name","value":"maturation"}},{"kind":"Field","name":{"kind":"Name","value":"vinification"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"winePasspordPDF"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"wineType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wineType"}},{"kind":"Field","name":{"kind":"Name","value":"filterName"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"singleWinePage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroHeading"}},{"kind":"Field","name":{"kind":"Name","value":"alchohol"}},{"kind":"Field","name":{"kind":"Name","value":"acid"}},{"kind":"Field","name":{"kind":"Name","value":"sugars"}},{"kind":"Field","name":{"kind":"Name","value":"volume"}},{"kind":"Field","name":{"kind":"Name","value":"closing"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"bottlesProduced"}},{"kind":"Field","name":{"kind":"Name","value":"temperature"}},{"kind":"Field","name":{"kind":"Name","value":"rewardsHeading"}},{"kind":"Field","name":{"kind":"Name","value":"vinification"}},{"kind":"Field","name":{"kind":"Name","value":"maturation"}},{"kind":"Field","name":{"kind":"Name","value":"degustaion"}},{"kind":"Field","name":{"kind":"Name","value":"food"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}}]}}]}}]}}]}}]} as unknown as DocumentNode<VinasQuery, VinasQueryVariables>;