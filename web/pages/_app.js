import Context from "@/context/context";
import { getVisitCount } from "@/lib/api";
import client from "../client";

import "../styles/globals.css";

const siteConfigQuery = `
  *[_id == "global-config"] {
    ...,
    logo {asset->{extension, url}},
    mainNavigation[] -> {
      ...,
      "title": page->title,
    },
    footerNavigation[] -> {
      ...,
      "title": page->title
    }
  }[0]
`;

export default function App({ Component, pageProps }) {
  return (
    <Context>
      <Component {...pageProps} />
    </Context>
  );
}

App.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  // Attach visitCount.
  // pageProps.visitCount = await getVisitCount();
  pageProps.visitCount = 421876;

  // Add site config from sanity.
  const config = await client.fetch(siteConfigQuery);
  if (!config) {
    return { pageProps };
  }
  if (config && pageProps) {
    pageProps.config = config;
  }
  return { pageProps };
};
