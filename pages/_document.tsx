import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../styles/stitches.config'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
          <link
            rel="preload"
            href="/fonts/Px-Grotesk-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="img/noise.svg"
            as="image"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
                @font-face {
                  font-family: 'Regular';
                  font-weight: 400;
                  font-display: swap;
                  src: url(/fonts/Px-Grotesk-Regular.woff2) format('woff2');
                }
                `,
            }}
          />
        </Head>
        <body style={{
            background: 'hsl(0, 0%, 4.5%)',
          }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
