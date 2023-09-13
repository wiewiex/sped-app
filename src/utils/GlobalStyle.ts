import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import { ITheme } from './theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/playfair-display/700.css';
import '@fontsource/playfair-display/500.css';
import '@fontsource/montserrat/800.css';
import '@fontsource/montserrat/300.css';

export const remSize = '11px';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
  html {
    font-size: ${remSize};
    font-family: ${(props: { theme: ITheme }) =>
      props.theme.fonts.primary};
    color: ${(props: { theme: ITheme }) => props.theme.colors.text};
  }
  header, footer, section, article, main {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  a {
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
