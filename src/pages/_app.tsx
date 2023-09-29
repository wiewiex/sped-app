import Layout from '@/components/_controllers/Layout';
import GlobalStyle from '@/utils/GlobalStyle';
import { themeDark } from '@/utils/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themeDark}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
