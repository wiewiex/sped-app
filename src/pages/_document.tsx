import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="apple-touch-icon"
            href="\assets\logo\logo-vector-2-144px.png"
          />
          <meta name="theme-color" content="#fff" />
          <meta property="og:url" content="PLACEHOLDER" />
          <meta property="og:image" content="PLACEHOLDER" />
          <meta property="og:type" content="cv" />
          <meta property="og:title" content="PLACEHOLDER" />
          <meta name="twitter:card" content="PLACEHOLDER" />
          <meta property="og:description" content="PLACEHOLDER" />
          <meta property="og:image" content="PLACEHOLDER" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
