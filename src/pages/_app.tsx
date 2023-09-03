import GlobalStyle from '@/utils/GlobalStyle';
import { themeDark } from '@/utils/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themeDark}>
      <Reset />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
