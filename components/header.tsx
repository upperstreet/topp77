import Link from 'next/link';

export type HeaderProps = {
  companyName: string;
  links: link[];
};

export type link = {
  text: string;
  url: string;
};

export const Header = ({ companyName, links }: HeaderProps) => {
  return (
    <div className="container mx-auto my-6 md:my-12 flex justify-between">
      <h1 className="h1">
        <Link href="/">
          <a>{companyName}</a>
        </Link>
      </h1>
      <nav>
        <ul>
          {links.map((l: link) => (
            <li key={l.url} className="inline-block ml-3 md:ml-12">
              <Link href={l.url}>
                <a href={l.url}>{l.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
