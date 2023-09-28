import { H3, Text, H5, SmallText } from '@/components/views/styledTexts';
import Tile from '@/components/common/_elements/Tile';
import { Container, ElementPositionWrapper } from '@/components/views/styledContainers';
import PrimaryTextInput from '@/components/common/_elements/PrimaryTextInput';
import CustomSelect from '@/components/common/_elements/CustomSelect';
import PenOnQuarter from '../_icons/PenOnQuarter';
import { ReactNode } from 'react';
import { useAppTheme } from '@/utils/theme';
import styled from 'styled-components';

export default function AmountsRead() {
  return (
    <Tile mobileWidth="100%" minHeight="25rem" mobileMinHeight="30rem">
      <H3>Kwoty</H3>
      <Container mobileWidth="90%">
        <Container
          flex={1}
          $mobileWrap
          mobileWidth="100%"
          flexDirection="Row"
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
            <Row>60 dni</Row>
            <Row>10.11.2023</Row>
            <Row>10.11.2023</Row>
          </Column>
          <Column>
            <Row>
              <b>Termin</b>
            </Row>
            <Row>130 EUR</Row>
            <Row>30 dni</Row>
          </Column>
          <Column>
            <Row>
              <b>Data</b>
            </Row>
            <Row>130 EUR</Row>
            <Row>30 dni</Row>
          </Column>
          <Column>
            <Row>
              <b>PLN</b>
            </Row>
            <Row>130 EUR</Row>
            <Row>30 dni</Row>
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

const Item = ({ label, selectOptions }: { label: string; selectOptions: string[] }) => (
  <Container mobileFlexDirection="Row" width="25rem" mobileWidth="100%">
    <PrimaryTextInput label={label} type="number" />
    <Container mobilePadding="2rem" mobileWidth="100%">
      <CustomSelect options={selectOptions} />
    </Container>
  </Container>
);

const Column = ({ children }: { children: ReactNode }) => (
  <Container flex={1} mobileJustifyContent="flex-start">
    {children}
  </Container>
);

const Row = styled(Container).attrs(() => ({
  mobileHeight: '4rem',
  mobileWidth: '100%',
  borderBottom: `1px solid #ADA4A520`,
  mobileAlignItems: 'flex-start',
}))`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.accent};
`;
