import Tile from '@/components/common/_elements/Tile';
import { H3, H4, H5, Text } from '@/components/views/styledTexts';
import { Container, ElementPositionWrapper } from '@/components/views/styledContainers';
import PenOnQuarter from '../_icons/PenOnQuarter';
import { useAppTheme } from '@/utils/theme';

export default function DetailsRead() {
  return (
    <Tile mobileMinHeight="20rem" mobileWidth="100%">
      <H3>Szczegóły</H3>
      <Container
        mobileFlexDirection="row"
        mobileWidth="100%"
        mobileJustifyContent="space-around"
        $mobileWrap
      >
        <Item text="Ilość:" value="2000" />
        <Item text="Waga:" value="5000" />
        <Item text="Kilometry:" value="3000" />
        <Item text="Pojazd:" value="BUS" />
        <Item text="Typ pojazdu:" value="plandeka" />
      </Container>
      <ElementPositionWrapper mobileRight="0" mobileBottom="0">
        <PenOnQuarter />
      </ElementPositionWrapper>
    </Tile>
  );
}

const Item = ({ text, value }: { text: string; value: string }) => {
  const { colors } = useAppTheme();
  return (
    <Container
      mobileFlexDirection="row"
      mobileJustifyContent="space-between"
      justifyContent="space-around"
      $wrap="wrap"
      mobileMargin="1rem 2rem"
    >
      <Container mobileMargin="0 1rem 0 0">
        <H5>{text}</H5>
      </Container>
      <Text color={colors.accent}>
        <b>{value}</b>
      </Text>
    </Container>
  );
};
