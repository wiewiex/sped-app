import Tile from '@/components/_elements/Tile';
import { H3, H4, H5, Text } from '@/components/_views/styledTexts';
import { Container, ElementPositionWrapper } from '@/components/_views/styledContainers';
import PenOnQuarter from '../_icons/PenOnQuarter';
import { useAppTheme } from '@/utils/theme';
import styled from 'styled-components';

export default function DetailsRead() {
  return (
    <Tile mobileMinHeight="34rem" minHeight="28rem" mobileWidth="100%">
      <H3>Szczegóły</H3>
      <Container
        mobileFlexDirection="row"
        mobileWidth="100%"
        mobileJustifyContent="space-around"
        $mobileWrap
      >
        <Item text="Ilość:" value="2000" icon="fas fa-hashtag" lineColor="blue" />
        <Item text="Waga:" value="5000" icon="fas fa-weight" />
        <Item text="Kilometry:" value="3000" icon="fas fa-road" />
        <Item text="Pojazd:" value="BUS" icon="fas fa-bus" />
        <Item text="Typ pojazdu:" value="plandeka" icon="fas fa-truck" />
      </Container>
      <ElementPositionWrapper mobileRight="0" mobileBottom="0">
        <PenOnQuarter />
      </ElementPositionWrapper>
    </Tile>
  );
}

const Item = ({
  text,
  value,
  icon,
  lineColor,
}: {
  text: string;
  value: string;
  icon: string;
  lineColor?: string;
}) => {
  const { colors } = useAppTheme();
  return (
    <Container>
      <Icon className={icon} lineColor={lineColor} />
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
    </Container>
  );
};

const Icon = styled.i<{ lineColor?: string }>`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.placeholder};
  border-bottom: 1px solid ${(props) => props.theme.colors.placeholder};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 1.5rem;
`;
