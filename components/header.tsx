import { useState } from 'react';

export type HeaderProps = {
  companyName: string;
  links: Link[];
};

export type Link = {
  text: string;
  url: string;
};

export const Header = ({ companyName, links }: HeaderProps) => {
  return (
    <div className="container mx-auto my-6 md:my-12 flex justify-between">
      <h1 className="h1">{companyName}</h1>
      <nav>
        <ul>
          {links.map((l: Link) => (
            <li key={l.url} className="inline-block ml-3 md:ml-12">
              <a href={l.url}>{l.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
