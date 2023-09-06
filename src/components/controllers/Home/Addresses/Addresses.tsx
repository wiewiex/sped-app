import {
  Container,
  ElementPositionWrapper,
} from '@/components/views/styledContainers';
import { useAppTheme } from '@/utils/theme';
import Tile from '../Tile';
import { H5, Text } from '@/components/views/styledTexts';
import Pin from './Pin';
import { Fragment } from 'react';
import Arrow from './Arrow';
import PlusOnQuarter from './PlusOnQuarter';
import { useAppContext } from '@/context/AppContext';

export default function Addresses() {
  const { setShowAddAddressModal } = useAppContext();

  return (
    <Tile mobileWidth="100%">
      <Container
        mobileWidth="100%"
        flex={1}
        mobileAlignItems="stretch"
        mobileFlexDirection="row"
        mobileJustifyContent="space-around"
        style={{ overflowX: 'auto' }}
      >
        {addresses.map((el, i) => (
          <Fragment key={i}>
            <Item {...el} index={i} />
            {i < addresses.length - 1 && (
              <Container style={{ transform: 'rotate(-90deg)' }}>
                <Arrow />
              </Container>
            )}
          </Fragment>
        ))}
      </Container>
      <ElementPositionWrapper
        mobileRight="0"
        mobileBottom="0"
        onClick={() => setShowAddAddressModal(true)}
      >
        <PlusOnQuarter />
      </ElementPositionWrapper>
    </Tile>
  );
}

const Item = ({
  index,
  name,
  address,
  postCode,
  city,
  country,
  isUnload,
}: {
  index: number;
  name: string;
  address: string;
  postCode: string;
  city: string;
  country: string;
  isUnload: boolean;
}) => {
  const { colors, borderRadius, boxShadow } = useAppTheme();
  const isEvenNumber = index % 2 === 0;
  const blue = '#89CFF090';
  const green = '#77DD7790';
  return (
    <Container
      mobileMargin="0 0 2rem 0"
      mobileJustifyContent={isEvenNumber ? 'flex-start' : 'flex-end'}
    >
      <Container
        borderBottom={`2px solid ${isUnload ? blue : green}`}
        borderTop={`2px solid ${isUnload ? blue : green}`}
        mobilePadding="2rem"
        mobileAlignItems="flex-start"
        borderRadius={borderRadius}
      >
        <Container mobileMargin="0 0 2rem 0" alignSelf="center">
          <Pin />
        </Container>
        <Container mobileMargin="0 0 0.5rem 0">
          <H5 color="#63666A">{name}</H5>
        </Container>
        <Text>{address}</Text>
        <Text>{postCode}</Text>
        <Text>{city}</Text>
        <Text>{country}</Text>
      </Container>
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
