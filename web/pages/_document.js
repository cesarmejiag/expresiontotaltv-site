import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import client from "../client";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const getInitialProps = await Document.getInitialProps(ctx);
    return client
      .fetch('*[_id == "global-config"] {lang}.lang[0]')
      .then((lang) => {
        return { ...getInitialProps, lang };
      });
  }

  render() {
    return (
      <Html lang={this.props.lang || "es"}>
        <Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Head>
      </Html>
    );
  }
}
