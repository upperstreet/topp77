import {
  IPageSectionDefault,
  IPageSectionLogotypes,
} from '../@types/contentful_gen';

/** Check if a section is a default section. */
export const isPageSectionDefault = (
  o: IPageSectionDefault | IPageSectionLogotypes
): o is IPageSectionDefault => {
  if (o.sys.contentType.sys.id === 'pageSectionDefault') {
    return true;
  }
  return false;
};

/** Check if a section is a logotype section. */
export const isPageSectionLogotypes = (
  o: IPageSectionDefault | IPageSectionLogotypes
): o is IPageSectionLogotypes => {
  if (o.sys.contentType.sys.id === 'pageSectionLogotypes') {
    return true;
  }
  return false;
};
