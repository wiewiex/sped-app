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
    accent: '#454545',
    secondaryAccent: '#6f9d22',
    footer: '#f3f2ec',
    placeholder: '#ADA4A5',
    error: '#B22222',
    success: '#6f9d22',
  },
  backgroundGradient: `linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)`,
  boxShadow: '0px 0px 10px 5px #f3f2ec',
  borderRadius: '1rem',
  fonts: {
    primary: 'Montserrat',
    secondary: 'Montserrat',
  },
};

export const themeDark: ITheme = themeLight;
