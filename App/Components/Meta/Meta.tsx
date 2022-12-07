import Head from "next/head";
import { FC, ReactNode } from "react";

interface IMeta {
  title: string;
  children: ReactNode;
}

const Meta: FC<IMeta> = ({ children, title }) => {
  function getCurrentTitle(title: string): string {
    return `${title} | Апельсин`;
  }
  return (
    <>
      <Head>
        <title itemProp="headline">{getCurrentTitle(title)}</title>
        <meta property="og:locale" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {children}
    </>
  );
};

export default Meta;
