import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../App/Components/Layout/Layout";
import HeadProvider from "../App/Components/Providers/HeadProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HeadProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </HeadProvider>
  );
}
