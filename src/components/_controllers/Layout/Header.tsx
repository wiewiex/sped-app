import { Container } from '@/components/_views/styledContainers';
import { H4, H5, H6 } from '@/components/_views/styledTexts';
import mediaQueries from '@/utils/mediaQueries';
import { useAppTheme } from '@/utils/theme';
import styled from 'styled-components';

export default function Header() {
  const { colors, navbarWidth, borderRadius } = useAppTheme();
  return (
    <HeaderColorWrapper>
      <Container
        mobileWidth="100%"
        mobileFlexDirection="row"
        mobileJustifyContent="space-between"
        boxShadow="0px 0px 10px 5px rgba(0, 0, 0, 0.08)"
      >
        <Container cursor="pointer" width={navbarWidth} mobilePadding="1.5rem 1rem">
          <LogoContainer>
            <H4>Logisteo</H4>
          </LogoContainer>
        </Container>
        <Container mobileFlexDirection="row" mobilePadding="0 1rem">
          <H5>Witaj, user</H5>
          <Container cursor="pointer" mobileMargin="0 0.5rem">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={colors.accent}
              width="2.6rem"
              height="2.6rem"
              viewBox="0 0 56 56"
            >
              <path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 27.9999 26.6875 C 31.3983 26.7109 34.1171 23.8047 34.1171 19.9844 C 34.1171 16.4219 31.3983 13.4453 27.9999 13.4453 C 24.6014 13.4453 21.8827 16.4219 21.8827 19.9844 C 21.8827 23.8047 24.6014 26.6641 27.9999 26.6875 Z M 17.0780 39.9766 L 38.8983 39.9766 C 39.8358 39.9766 40.3046 39.3437 40.3046 38.5 C 40.3046 35.8750 36.3671 29.1016 27.9999 29.1016 C 19.6327 29.1016 15.6952 35.8750 15.6952 38.5 C 15.6952 39.3437 16.1640 39.9766 17.0780 39.9766 Z" />
            </svg>
          </Container>
          <Container
            backgroundColor="#FFC007"
            mobilePadding="0.3rem 0.8rem"
            borderRadius={borderRadius}
          >
            <H6 style={{ fontSize: '1.3rem' }}>Logout</H6>
          </Container>
        </Container>
      </Container>
    </HeaderColorWrapper>
  );
}

const LogoContainer = styled.div`
  color: ${(props) => props.theme.colors.mainBackground};
  @media ${mediaQueries.tabletHorizontal} {
    color: ${(props) => props.theme.colors.navBackground};
  }
`;

const HeaderColorWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.navBackground};
  h5 {
    color: ${(props) => props.theme.colors.mainBackground};
  }
  @media ${mediaQueries.tabletHorizontal} {
    background-color: transparent;
    h5 {
      color: ${(props) => props.theme.colors.accent};
    }
  }
`;