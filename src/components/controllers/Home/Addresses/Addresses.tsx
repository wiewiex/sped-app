import { Container } from '@/components/views/styledContainers';
import { H2, Text } from '@/components/views/styledTexts';
import { useAppTheme } from '@/utils/theme';
import Tile from '../Tile';

export default function Addresses() {
  const { colors, borderRadius, boxShadow } = useAppTheme();
  return (
    <Tile mobileWidth="100%" minHeight="20rem">
      <Container
        mobileFlexDirection="row"
        mobileJustifyContent="space-between"
        mobileAlignItems="stretch"
        mobileWidth="100%"
        flex={1}
      >
        <Container flex={1}>1 adres</Container>
        <Container
          mobileWidth="0.2rem"
          backgroundColor="black"
        ></Container>
        <Container flex={1}> 2 adres</Container>
      </Container>
    </Tile>
  );
}
