import { AppContextProvider } from '@/context/AppContext';
import GlobalStyle from '@/utils/GlobalStyle';
import { themeDark } from '@/utils/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themeDark}>
      <AppContextProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AppContextProvider>
    </ThemeProvider>
  );
}

export default App;
