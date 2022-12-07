import Head from "next/head";
import { FC, ReactNode } from "react";
import { orangeColor, yellowColor } from "../../../constans";
import NextNProgress from "nextjs-progressbar";
import FiveIcons from "./FiveIcons";

const HeadProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <NextNProgress
        color={yellowColor}
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        showOnShallow={true}
        options={{ showSpinner: false }}
      />

      <Head>
        <meta name="theme-color" content={orangeColor} />
        <meta name="msapplication-navbutton-color" content={yellowColor} />
        <FiveIcons />
      </Head>
      {children}
    </>
  );
};

export default HeadProvider;
