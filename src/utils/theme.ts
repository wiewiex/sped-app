import { useTheme } from 'styled-components';
export const useAppTheme = useTheme as () => ITheme;

export interface ITheme {
  colors: {
    mainBackground: string;
    boxBackground: string;
    navBackground: string;
    text: string;
    accent: string;
    secondaryAccent: string;
    footer: string;
    placeholder: string;
    error: string;
    success: string;
  };
  boxShadow: string;
  backgroundGradient: string;
  borderRadius: string;

  fonts: {
    primary: string;
    secondary: string;
  };
}

export const themeLight: ITheme = {
  colors: {
    mainBackground: '#fff',
    boxBackground: '#ffffff80',
    navBackground: '#7A3685',
    text: '#212427',
    accent: '#3a3e58',
    secondaryAccent: '#6c7098',
    footer: '#f3f2ec',
    placeholder: '#ADA4A5',
    error: '#B22222',
    success: '#6f9d22',
  },
  backgroundGradient: `linear-gradient(177.9deg, rgb(108, 112, 152) 3.6%, rgb(189, 196, 215) 105.8%)`,
  boxShadow: '0px 0px 10px 5px #f3f2ec',
  borderRadius: '1rem',
  fonts: {
    primary: 'Montserrat',
    secondary: 'Montserrat',
  },
};

export const themeDark: ITheme = themeLight;
