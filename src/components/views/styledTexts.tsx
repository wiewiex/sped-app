import styled from 'styled-components';
import mediaQueries from '@/utils/mediaQueries';

export const Text = styled.p<{ textAlign?: string; color?: string }>`
  text-align: ${(props) =>
    props.textAlign ? props.textAlign : 'initial'};
  font-size: 1.5rem;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: 200;
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.accent};
  line-height: 1.15;
  @media ${mediaQueries.tabletHorizontal} {
    font-size: 1.5rem;
  }
`;

export const H2 = styled.h2<{
  color?: string;
  textAlign?: string;
}>`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 3rem;
  font-weight: 700;
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.accent};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
  line-height: 1.1;

  @media ${mediaQueries.tabletHorizontal} {
    font-size: 3.5rem;
    word-break: keep-all;
  }

  @media ${mediaQueries.bigScreen} {
    font-size: 4rem;
    word-break: keep-all;
  }
`;

export const H3 = styled.h3<{ color?: string }>`
  font-size: 2rem;
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.secondary};
  font-weight: 500;
  text-align: center;
  line-height: 1.1;
  @media ${mediaQueries.tabletHorizontal} {
    font-size: 2.5rem;
  }
`;

export const H4 = styled.h4<{ color?: string; fontSize?: string }>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '2rem')};
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.secondary};
  font-weight: 500;
  text-align: center;
  line-height: 1.1;
`;

export const H5 = styled.h5<{
  color?: string;
  textAlign?: string;
}>`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.accent};
  text-align: ${(props) =>
    props.textAlign ? props.textAlign : 'initial'};
  line-height: 1.1;
  @media ${mediaQueries.tabletHorizontal} {
    font-size: 1.5rem;
  }
`;

export const H6 = styled.h6<{
  width?: string;
}>`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 1.5rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.secondary};
  width: ${(props) => (props.width ? props.width : 'auto')};
`;

export const ValidationText = styled.span`
  color: ${(props) => props.theme.colors.error};
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: 600;
  font-size: 1rem;
  height: 3rem;
  text-align: right;
  width: 100%;
  /* padding: 10px 0 10px 10px; */
  min-width: 10rem;
`;

export const H1 = styled.h1<{
  color?: string;
  textAlign?: string;
}>`
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 3rem;
  font-weight: 600;
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.secondary};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
  padding: 2.5rem 0;
  line-height: 1.1;

  @media ${mediaQueries.tabletHorizontal} {
    font-size: 7rem;
    word-break: keep-all;
  }

  @media ${mediaQueries.bigScreen} {
    font-size: 12rem;
    word-break: keep-all;
  }
`;

export const SmallText = styled.p<{ textAlign?: string }>`
  text-align: ${(props) =>
    props.textAlign ? props.textAlign : 'initial'};
  font-size: 1rem;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: 200;
  color: ${(props) => props.theme.colors.placeholder};
  line-height: 1.15;
  @media ${mediaQueries.tabletHorizontal} {
    font-size: 1.2rem;
  }
  @media ${mediaQueries.desktop} {
    font-size: 1.5rem;
  }
`;
