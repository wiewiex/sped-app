import { useTheme } from 'styled-components';
export const useAppTheme = useTheme as () => ITheme;

export interface ITheme {
  colors: {
    mainBackground: string;
    boxBackground: string;
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
    text: '#212427',
    accent: '#63666A',
    secondaryAccent: '#6f9d22',
    footer: '#f3f2ec',
    placeholder: '#ADA4A5',
    error: '#B22222',
    success: '#6f9d22',
  },
  backgroundGradient: `linear-gradient(180deg, rgb(5, 39, 103) 0%, #3a0647 70%);`,
  boxShadow: '0px 0px 10px 5px #f3f2ec',
  borderRadius: '1rem',
  fonts: {
    primary: 'Montserrat',
    secondary: 'Montserrat',
  },
};

export const themeDark: ITheme = themeLight;
