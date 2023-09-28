import { H3, Text } from '@/components/views/styledTexts';
import Tile from '@/components/common/_elements/Tile';
import { Container, ElementPositionWrapper } from '@/components/views/styledContainers';
import PrimaryTextInput from '@/components/common/_elements/PrimaryTextInput';
import CustomSelect from '@/components/common/_elements/CustomSelect';
import PenOnQuarter from '../_icons/PenOnQuarter';
import { ReactNode } from 'react';

export default function AmountsRead() {
  return (
    <Tile mobileWidth="100%" minHeight="25rem" mobileMinHeight="30rem">
      <H3>Kwoty</H3>
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
          <Row>Kwota:</Row>
          <Row>Termin:</Row>
          <Row>Data:</Row>
          <Row>PLN:</Row>
        </Column>
        <Column>
          <Row>Kwota od klienta</Row>
          <Row>110 EUR</Row>
          <Row>60 dni</Row>
          <Row>10.11.2023</Row>
          <Row>552</Row>
        </Column>
        <Column>
          <Row>Kwota od klienta</Row>
          <Row>130 EUR</Row>
          <Row>30 dni</Row>
          <Row>13.11.2023</Row>
          <Row>952</Row>
        </Column>
      </Container>
      <ElementPositionWrapper mobileRight="0" mobileBottom="0">
        <PenOnQuarter />
      </ElementPositionWrapper>
    </Tile>
  );
}

const Item = ({ label, selectOptions }: { label: string; selectOptions: string[] }) => (
  <Container mobileFlexDirection="row" width="25rem" mobileWidth="100%">
    <PrimaryTextInput label={label} type="number" />
    <Container mobilePadding="2rem" mobileWidth="100%">
      <CustomSelect options={selectOptions} />
    </Container>
  </Container>
);

const Column = ({ children }: { children: ReactNode }) => (
  <Container width="20%" mobileJustifyContent="flex-start">
    {children}
  </Container>
);

const Row = ({ children }: { children: ReactNode }) => {
  return (
    <Container mobileHeight="4rem" mobileWidth="100%" borderBottom="1px solid gray">
      {children}
    </Container>
  );
};
