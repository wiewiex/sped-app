import { Container } from '@/components/views/styledContainers';
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

const addresses = [
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
