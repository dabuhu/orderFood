import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
import FilterProvider from "../provider/provider";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <FilterProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FilterProvider>
  );
}
export default MyApp;
