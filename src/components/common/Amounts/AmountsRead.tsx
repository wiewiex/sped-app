import { H3, Text, H5, SmallText } from '@/components/views/styledTexts';
import Tile from '@/components/common/_elements/Tile';
import { Container, ElementPositionWrapper } from '@/components/views/styledContainers';
import PenOnQuarter from '../_icons/PenOnQuarter';
import { ReactNode } from 'react';
import { useAppTheme } from '@/utils/theme';
import styled from 'styled-components';
import mediaQueries from '@/utils/mediaQueries';

export default function AmountsRead() {
  return (
    <Tile mobileWidth="100%" minHeight="25rem" mobileMinHeight="30rem">
      <H3>Kwoty</H3>
      <Container mobileWidth="100%" minWidth="60rem">
        <Container
          flex={1}
          $mobileWrap
          mobileWidth="100%"
          flexDirection="row"
          alignItems="stretch"
          mobileMargin="2rem 0 0 0"
        >
          <Column>
            <Row> </Row>
            <Row>
              <b>Kwota od klienta</b>
            </Row>
            <Row>
              <b>Kwota dla przewoźnika</b>
            </Row>
            <Row>
              <b>Prowizja</b>
            </Row>
          </Column>
          <Column>
            <Row>
              <b>Kwota</b>
            </Row>
            <Row>200 EUR</Row>
            <Row>20 EUR</Row>
            <Row>180 EUR</Row>
          </Column>
          <Column>
            <Row>
              <b>Termin</b>
            </Row>
            <Row>60 dni</Row>
            <Row>30 dni</Row>
            <Row> </Row>
          </Column>
          <Column>
            <Row>
              <b>Data</b>
            </Row>
            <Row>21.12.2023</Row>
            <Row>19.12.2023</Row>
            <Row> </Row>
          </Column>
          <Column>
            <Row>
              <b>PLN</b>
            </Row>
            <Row>500</Row>
            <Row>100</Row>
            <Row> </Row>
          </Column>
        </Container>
        <Container mobileAlignSelf="flex-start" mobileMargin="1rem 0 0 0">
          <SmallText>
            Prowizja jest naliczana po zatwierdzeniu dokumentów wymaganych do zakończenia
            zlecenia.
          </SmallText>
        </Container>
      </Container>
      <ElementPositionWrapper mobileRight="0" mobileBottom="0">
        <PenOnQuarter />
      </ElementPositionWrapper>
    </Tile>
  );
}

const Column = ({ children }: { children: ReactNode }) => (
  <Container
    flex={1}
    mobileJustifyContent="flex-start"
    flexDirection="column"
    mobileFlexDirection="row"
    justifyContent="space-between"
    mobileWidth="100%"
  >
    {children}
  </Container>
);

const Row = styled(Container).attrs(() => ({
  mobileHeight: '4rem',
  mobileWidth: '100%',
  borderBottom: `1px solid #ADA4A520`,
  mobileAlignItems: 'flex-start',
}))`
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.accent};
`;
