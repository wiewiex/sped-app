import { Container, ElementPositionWrapper } from '@/components/views/styledContainers';
import Tile from '@/components/common/_elements/Tile';
import { SmallText } from '@/components/views/styledTexts';
import Arrow from '../_icons/Arrow';
import PlusOnQuarter from '@/components/common/_icons/PlusOnQuarter';
import Item from './Item';
import ScrollbarContainer from '@/components/common/_elements/ScrollbarContainer';
import { useAppContext } from '@/context/AppContext';
import styled from 'styled-components';
import mediaQueries from '@/utils/mediaQueries';

const blue = '#89CFF090';
const green = '#77DD7790';

export default function Addresses() {
  const { setShowAddressModal } = useAppContext();
  return (
    <Tile mobileWidth="100%" minHeight="40rem" padding="0">
      <ScrollbarContainer>
        <ItemsContainer>
          {addresses.map((el, i) => (
            <Container key={i} mobileFlexDirection="row">
              <Item blue={blue} green={green} {...el} />
              {i < addresses.length - 1 && (
                <Container style={{ transform: 'rotate(-90deg)' }}>
                  <Arrow />
                </Container>
              )}
            </Container>
          ))}
        </ItemsContainer>
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

const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  font-size: 1.3rem;
  overflow-x: auto;
  width: 100%;
  flex: 1;
  padding: 8rem 2rem;

  @media ${mediaQueries.tabletHorizontal} {
    align-items: stretch;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: nowrap;
    max-width: 70vw;
  }

  @media ${mediaQueries.desktop} {
    max-width: 80vw;
  }
`;

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