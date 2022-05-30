/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/animate.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/fontawesome-all.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/zimed-icon.css"
        />
        <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/responsive.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
