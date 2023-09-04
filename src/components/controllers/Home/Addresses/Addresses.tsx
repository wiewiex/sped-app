import { Container } from '@/components/views/styledContainers';
import { useAppTheme } from '@/utils/theme';
import Tile from '../Tile';
import { Text } from '@/components/views/styledTexts';
import Pin from './Pin';

export default function Addresses() {
  return (
    <Tile mobileWidth="50%" minHeight="20rem">
      <Container mobileWidth="100%" flex={1} mobileAlignItems="flex-start">
        {addresses.map((el, i) => (
          <Item {...el} key={i} index={i} />
        ))}
      </Container>
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
}: {
  index: number;
  name: string;
  address: string;
  postCode: string;
  city: string;
  country: string;
}) => {
  const { colors, borderRadius, boxShadow } = useAppTheme();
  const borderStyle = `1px solid ${colors.text}`;
  const isEvenNumber = index % 2 === 0;
  return (
    <Container
      mobileWidth="100%"
      mobileMargin="0 0 2rem 0"
      mobileAlignItems={isEvenNumber ? 'flex-start' : 'flex-end'}
    >
      <Container
        borderLeft={!isEvenNumber ? borderStyle : 'initial'}
        borderRight={isEvenNumber ? borderStyle : 'initial'}
        mobileAlignItems={isEvenNumber ? 'flex-end' : 'flex-start'}
        mobileWidth="50%"
      >
        <Container
          mobilePadding="2rem"
          mobileWidth="30rem"
          mobileAlignItems={isEvenNumber ? 'flex-end' : 'flex-start'}
        >
          <Container mobileMargin="0 0 2rem 0">
            <Pin />
          </Container>
          <Text>{name}</Text>
          <Text>{address}</Text>
          <Text>{postCode}</Text>
          <Text>{city}</Text>
          <Text>{country}</Text>
        </Container>
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
}[] = [
  {
    name: 'Castorama',
    address: 'Żwirki wigury 4',
    postCode: '39-890',
    city: 'Warszawa',
    country: 'Poland',
    gps: [37.7749, -122.4194],
  },
  {
    name: 'Przykładowa Firma',
    address: 'Aleje Jerozolimskie 123',
    postCode: '00-001',
    city: 'Warszawa',
    country: 'Poland',
    gps: [52.2297, 21.0122],
  },
  {
    name: 'Sklep AGD',
    address: 'ul. Piotrkowska 56',
    postCode: '90-001',
    city: 'Łódź',
    country: 'Poland',
    gps: [51.7704, 19.4562],
  },
  {
    name: 'Meble Domowe',
    address: 'ul. Krakowska 78',
    postCode: '30-001',
    city: 'Kraków',
    country: 'Poland',
    gps: [50.0647, 19.945],
  },
  {
    name: 'Sklep Elektroniczny',
    address: 'ul. Nowy Świat 10',
    postCode: '00-001',
    city: 'Warszawa',
    country: 'Poland',
    gps: [52.2321, 21.016],
  },
];
