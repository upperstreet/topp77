import { linkSync } from 'fs';
import { Link } from './header';

export type FooterProps = {
  companyLegalName: string;
  companyAddress?: string;
  companyZipCode?: string;
  companyCity?: string;
  links: Link[];
};

export const Footer = ({
  companyLegalName,
  companyAddress,
  companyZipCode,
  companyCity,
  links,
}: FooterProps) => {
  return (
    <div className="container mx-auto my-12 md:my-24 flex justify-between">
      <address>
        <strong>{companyLegalName}</strong>
        <br />
        {companyAddress}
        <br />
        {companyZipCode} {companyCity}
      </address>
      <nav>
        <ul>
          {links?.map((l: Link) => (
            <li key={l.url}>
              <a href={l.url}>{l.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
