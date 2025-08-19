import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {

  return (
    <Html lang="fa">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="antialiased" >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
