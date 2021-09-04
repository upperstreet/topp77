import Link from 'next/link';
import { link } from './header';

export type FooterProps = {
  companyLegalName: string;
  companyAddress?: string;
  companyZipCode?: string;
  companyCity?: string;
  companyRegistrationNumber?: string;
  vatIdentificationNumber?: string;
  links: link[];
};

export const Footer = ({
  companyLegalName,
  companyAddress,
  companyZipCode,
  companyCity,
  companyRegistrationNumber,
  vatIdentificationNumber,
  links,
}: FooterProps) => {
  return (
    <div className="container mx-auto my-12 md:my-24 flex justify-center lg:justify-between">
      <div className="text-center lg:text-left">
        <address>
          <strong>{companyLegalName}</strong>
          <br />
          {companyAddress}
          <br />
          {companyZipCode} {companyCity}
        </address>
        <p className="mt-6">
          Org.nr: {companyRegistrationNumber}
          <br />
          Momsreg.nr: {vatIdentificationNumber}
        </p>
      </div>
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
