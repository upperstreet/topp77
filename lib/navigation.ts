import {
  IPageSectionDefault,
  IPageSectionLogotypes,
} from '../@types/contentful_gen';
import { link } from '../components/header';
import { isPageSectionDefault } from './types';

/** Get links to all pages that should be visible in the navigation bar. */
export const menuLinks = (
  sections: Array<IPageSectionDefault | IPageSectionLogotypes>
): link[] => {
  const withLinks = sections.filter((s) => {
    if (!isPageSectionDefault(s)) {
      return false;
    }

    return s.fields.showMenuLink === true;
  });

  return withLinks.map((s): link => {
    if (!isPageSectionDefault(s)) {
      return { text: '', url: '' };
    }

    const l: link = {
      text: s.fields.title || '',
      url: anchorHref(s),
    };

    return l;
  });
};

/** Get the name of an anchor for a section. */
export const anchorName = (section: IPageSectionDefault): string => {
  return section.fields.slug || '';
};

/** Get link href for a section. */
export const anchorHref = (section: IPageSectionDefault): string => {
  return '#' + anchorName(section);
};
