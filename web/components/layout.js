import Head from "next/head";
import Script from "next/script";
import Footer from "./footer";
import Navigation from "./navigation";
import styles from "../styles/layout.module.css";

export default function Layout({ config, children }) {
  if (!config) {
    console.log("Missing config");
    return <div>Missing config</div>;
  }

  const {
    title,
    mainNavigation,
    footerNavigation,
    footerText,
    logo,
    url,
    magazineUrl,
  } = config;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, viewport-fit=cover"
        />
      </Head>
      {/* Google tag (gtag.js) */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-E4FFK8NVXP`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-E4FFK8NVXP');
            `,
        }}
      />
      <Navigation
        navItems={mainNavigation}
        logo={logo}
        magazineUrl={magazineUrl}
      />
      <div className={styles.outerWrapper}>{children}</div>
      <Footer navItems={footerNavigation} text={footerText} />
    </>
  );
}
