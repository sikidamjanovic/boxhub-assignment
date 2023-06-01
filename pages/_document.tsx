import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="english" className="bg-neutral-950">
      <Head>
        {/* FAVICON */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link 
          rel="manifest" 
          href="/images/site.webmanifest" 
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}