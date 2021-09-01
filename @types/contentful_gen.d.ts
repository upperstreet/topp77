// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IPageFields {
  /** Title */
  title: string;

  /** Slug */
  slug: string;

  /** Sections */
  sections?: IPageSectionDefault[] | undefined;

  /** Company Name */
  companyName: string;

  /** Company Legal Name */
  companyLegalName: string;

  /** Company Address */
  companyAddress?: string | undefined;

  /** Company Zip Code */
  companyZipCode?: string | undefined;

  /** Company City */
  companyCity?: string | undefined;
}

export interface IPage extends Entry<IPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "page";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPageSectionDefaultFields {
  /** Title */
  title?: string | undefined;

  /** Sub Title */
  subTitle?: string | undefined;

  /** Slug */
  slug?: string | undefined;

  /** Content */
  content?: string | undefined;

  /** Image */
  image?: Asset | undefined;

  /** Show title */
  showTitle?: boolean | undefined;
}

export interface IPageSectionDefault extends Entry<IPageSectionDefaultFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "pageSectionDefault";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "page" | "pageSectionDefault";

export type LOCALE_CODE = "sv";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "sv";
