import {
  Container,
  ElementPositionWrapper,
} from '@/components/views/styledContainers';
import Tile from '@/components/reusable/Tile';
import { SmallText } from '@/components/views/styledTexts';
import { Fragment } from 'react';
import Arrow from './Arrow';
import PlusOnQuarter from '../PlusOnQuarter';
import { useAppContext } from '@/context/AppContext';
import Item from './Item';
import ScrollbarContainer from '@/components/reusable/ScrollbarContainer';

const blue = '#89CFF090';
const green = '#77DD7790';

export default function Addresses() {
  const { setShowAddressModal } = useAppContext();
  return (
    <Tile mobileWidth="100%" minHeight="40rem" padding="0">
      <ScrollbarContainer>
        <Container
          mobileWidth="100%"
          maxWidth="70vw"
          flex={1}
          alignItems="stretch"
          mobileFlexDirection="row"
          justifyContent="flex-start"
          style={{ overflowX: 'auto' }}
          mobilePadding="8rem 2rem"
          $mobileWrap
          $wrap="nowrap"
        >
          {addresses.map((el, i) => (
            <Fragment key={i}>
              <Item blue={blue} green={green} {...el} />
              {i < addresses.length - 1 && (
                <Container style={{ transform: 'rotate(-90deg)' }}>
                  <Arrow />
                </Container>
              )}
            </Fragment>
          ))}
        </Container>
      </ScrollbarContainer>
      <ElementPositionWrapper
        mobileRight="0"
        mobileBottom="0"
        mobileLeft="0"
        onClick={() => setShowAddressModal(true)}
      >
        <Container
          mobileWidth="100%"
          mobileFlexDirection="row"
          mobileJustifyContent="space-between"
        >
          <Container flexDirection="row" mobileMargin="0 5rem">
            <ColorLegend color={blue} text="rozładunek" />
            <ColorLegend color={green} text="załadunek" />
          </Container>
          <PlusOnQuarter />
        </Container>
      </ElementPositionWrapper>
    </Tile>
  );
}

const ColorLegend = ({ color, text }: { color: string; text: string }) => {
  return (
    <Container mobileFlexDirection="row" mobileMargin="0.5rem">
      <Container
        mobileWidth="2rem"
        mobileHeight="2rem"
        backgroundColor={color}
        mobileMargin="0 0.4rem 0 0"
      />
      <SmallText> - {text}</SmallText>
    </Container>
  );
};

const addresses: {
  name: string;
  address: string;
  postCode: string;
  city: string;
  country: string;
  gps: number[];
  isUnload: boolean;
}[] = [
  {
    name: 'Castorama',
    address: 'Żwirki wigury 4',
    postCode: '39-890',
    city: 'Warszawa',
    country: 'Poland',
    gps: [37.7749, -122.4194],
    isUnload: false,
  },
  {
    name: 'Przykładowa Firma',
    address: 'Aleje Jerozolimskie 123',
    postCode: '00-001',
    city: 'Warszawa',
    country: 'Poland',
    gps: [52.2297, 21.0122],
    isUnload: true,
  },
  {
    name: 'Sklep AGD',
    address: 'ul. Piotrkowska 56',
    postCode: '90-001',
    city: 'Łódź',
    country: 'Poland',
    gps: [51.7704, 19.4562],
    isUnload: false,
  },
  {
    name: 'Meble Domowe',
    address: 'ul. Krakowska 78',
    postCode: '30-001',
    city: 'Kraków',
    country: 'Poland',
    gps: [50.0647, 19.945],
    isUnload: false,
  },
  {
    name: 'Sklep Elektroniczny',
    address: 'ul. Nowy Świat 10',
    postCode: '00-001',
    city: 'Warszawa',
    country: 'Poland',
    gps: [52.2321, 21.016],
    isUnload: true,
  },
];
