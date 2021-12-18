import { IPageSectionDefault } from '../@types/contentful_gen';
import * as showdown from 'showdown';
import React from 'react';
import { anchorName } from '../lib/navigation';

export type PageSectionDefaultProps = {
  entry: IPageSectionDefault;
  index: number;
};

export const PageSectionDefault = ({
  entry,
  index,
}: PageSectionDefaultProps) => {
  let bg = '';
  let reverse = '';
  let textMarginSide = 'r';

  if (index % 2 !== 0) {
    bg = 'bg-gray-100';
    reverse = '-reverse';
    textMarginSide = 'l';
  }

  const sd = new showdown.Converter();

  return (
    <div className={`${bg} pt-6 lg:pt-0`}>
      <a id={anchorName(entry)}></a>
      <div className={`container mx-auto lg:flex lg:flex-row${reverse}`}>
        <div className="my-12 lg:my-24 flex-1">
          <div className={`lg:m${textMarginSide}-9`}>
            {entry.fields.showTitle && (
              <h2 className="h2 mb-8">
                {(entry.fields.title && entry.fields.subTitle && (
                  <>
                    <span className="h2-sup">{entry.fields.title}</span>
                    {entry.fields.subTitle}
                  </>
                )) ||
                  entry.fields.title}
              </h2>
            )}
            <article
              className="prose"
              dangerouslySetInnerHTML={{
                __html: sd.makeHtml(entry.fields.content),
              }}
            ></article>
          </div>
        </div>
        {entry.fields.image && (
          <div
            className={`flex-1 bg-center bg-cover py-48`}
            style={{
              backgroundImage: `url(${entry.fields.image.fields.file.url})`,
            }}
          ></div>
        )}
      </div>
    </div>
  );
};
