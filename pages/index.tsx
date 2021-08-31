import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { newClient } from '../lib/contentful';
import { IPage, IPageSectionDefault } from '../@types/contentful_gen';
import { PageSectionDefault } from '../components/page_section_default';
import { Footer } from '../components/footer';
import { Header, Link } from '../components/header';

export const getStaticProps: GetStaticProps = async (context) => {
  const client = newClient();
  const entry = await client.getEntry<any>('4ktYp0QYgeCFD5SEqbqHoH');
  return {
    props: {
      entry,
    },
  };
};

type HomeProps = {
  entry: IPage;
};

const Home: NextPage<HomeProps> = ({ entry }) => {
  let links: Link[] = [];
  if (
    typeof entry.fields.sections !== 'undefined' &&
    entry.fields.sections.length > 0
  ) {
    links = entry.fields.sections.map((s: any) => {
      return {
        text: s.fields.title,
        url: '#' + s.fields.title,
      };
    });
  }

  return (
    <div>
      <Head>
        <title>
          {entry.fields.title} - {entry.fields.companyName}
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header companyName={entry.fields.companyName} links={links} />

      <main>
        {entry.fields.sections?.map((s: IPageSectionDefault, i: number) => (
          <PageSectionDefault key={i} index={i} entry={s} />
        ))}
      </main>

      <Footer
        companyLegalName={entry.fields.companyLegalName}
        companyAddress={entry.fields.companyAddress}
        companyZipCode={entry.fields.companyZipCode}
        companyCity={entry.fields.companyCity}
        links={links}
      />
    </div>
  );
};

export default Home;
