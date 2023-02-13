import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import client from "../client";
import { urlFor } from "@/lib/api";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const getInitialProps = await Document.getInitialProps(ctx);
    const init = await client.fetch(
      '*[_id == "global-config"] {lang, bgImage, bgPattern}[0]'
    );
    return { ...getInitialProps, ...init };
  }

  static getBgStyle(image, asPattern) {
    const style = {};
    if (image) {
      style.backgroundImage = `url(${urlFor(image).url()})`;
      if (asPattern) {
        style.backgroundRepeat = "repeat";
        style.backgroundPosition = "left top";
      } else {
        style.backgroundSize = "cover";
      }
    }
    return style;
  }

  render() {
    const { lang, bgImage, bgPattern } = this.props;
    const bgStyle = MyDocument.getBgStyle(bgImage, bgPattern);
    return (
      <Html lang={lang || "es-MX"}>
        <Head>
          <body style={{ ...bgStyle }}>
            <Main />
            <NextScript />
          </body>
        </Head>
      </Html>
    );
  }
}
