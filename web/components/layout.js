import Head from "next/head";
import Script from "next/script";
import Footer from "./footer";
import Navigation from "./navigation";
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Expresión Total TV</title>
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
      <Navigation />
      <div className={styles.outerWrapper}>{children}</div>
      <Footer />
    </>
  );
}
