import { IPageSectionDefault } from '../@types/contentful_gen';

export type PageSectionDefaultProps = {
  entry: IPageSectionDefault;
};

export const PageSectionDefault = ({ entry }: PageSectionDefaultProps) => {
  return (
    <div className="container mx-auto lg:flex lg:flex-row">
      <div>
        <h2 className="h2">
          {(entry.fields.title && entry.fields.subTitle && (
            <>
              <span className="h2-sup">{entry.fields.title}</span>
              {entry.fields.subTitle}
            </>
          )) ||
            entry.fields.title}
        </h2>
        <p>{entry.fields.content}</p>
      </div>
    </div>
  );
};
