import Link from 'next/link';
import { link } from './header';

export type FooterProps = {
  companyLegalName: string;
  companyAddress?: string;
  companyZipCode?: string;
  companyCity?: string;
  links: link[];
};

export const Footer = ({
  companyLegalName,
  companyAddress,
  companyZipCode,
  companyCity,
  links,
}: FooterProps) => {
  return (
    <div className="container mx-auto my-12 md:my-24 flex justify-center lg:justify-between">
      <address className="text-center lg:text-left">
        <strong>{companyLegalName}</strong>
        <br />
        {companyAddress}
        <br />
        {companyZipCode} {companyCity}
      </address>
      <nav className="hidden lg:block">
        <ul>
          {links?.map((l: link) => (
            <li key={l.url}>
              <Link href={l.url}>
                <a>{l.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
