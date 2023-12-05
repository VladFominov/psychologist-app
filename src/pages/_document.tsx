import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="uk">
      <Head>
        <meta
          name="google-site-verification"
          content="t6VSTP_V7JgmvsEsWbNBAihdLn6HaHIw3YpMtOTSeaU"
        />
        <meta
          name="google-site-verification"
          content="357K7fHP8jV2xDV7fwFVslZ7we6LM-AEF_fN-n-RpBk"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
          integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
