import { IPageSectionDefault } from '../@types/contentful_gen';

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

  return (
    <div className={`${bg}`}>
      <div className={`container mx-auto lg:flex lg:flex-row${reverse}`}>
        <div className="my-12 flex-1">
          <div className={`m${textMarginSide}-6`}>
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
