import { IPageSectionLogotypes } from '../@types/contentful_gen';
import React from 'react';
import { Asset } from 'contentful';

export type PageSectionLogotypesProps = {
  entry: IPageSectionLogotypes;
  index: number;
};

export const PageSectionLogotypes = ({
  entry,
  index,
}: PageSectionLogotypesProps) => {
  console.log(entry.fields.logotypes);

  return (
    <div className="py-6 lg:py-0">
      <div className="container mx-auto">
        <div className="lg:flex lg:flex-row">
          {entry.fields.logotypes?.map((l: Asset) => (
            <div
              key={l.sys.id}
              className="flex flex-1 justify-center items-center"
            >
              <img
                src={l.fields.file.url}
                alt={l.fields.title}
                className="w-4/5 my-6 lg:my-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
