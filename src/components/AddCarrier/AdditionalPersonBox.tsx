import { Container, ElementPositionWrapper } from '../_views/styledContainers';
import { useAppTheme } from '@/utils/theme';
import styled from 'styled-components';
import { H5 } from '../_views/styledTexts';

export default function AdditionalPersonBox() {
  const { colors } = useAppTheme();
  return (
    <Container mobileFlexDirection="row">
      <Container
        backgroundColor={colors.accent + 90}
        mobilePadding="0.7rem 1.5rem"
        mobileMargin="0 0.5rem 0 0"
        relative
      >
        <ElementPositionWrapper mobileTop="-0.8rem" mobileRight="-0.8rem">
          <Container
            mobileWidth="1rem"
            mobileHeight="1rem"
            backgroundColor={colors.accent + 90}
            borderRadius="50%"
            padding="0.7rem"
            cursor="pointer"
          >
            <H5 color="white">x</H5>
          </Container>
        </ElementPositionWrapper>
        <H5 color="white">1</H5>
      </Container>
      <Icon className="fas fa-plus" />
    </Container>
  );
}

const Icon = styled.i`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.accent};
  cursor: pointer;
`;
