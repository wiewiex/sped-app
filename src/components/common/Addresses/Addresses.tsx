import { Container, ElementPositionWrapper } from '@/components/views/styledContainers';
import Tile from '@/components/common/_elements/Tile';
import { SmallText } from '@/components/views/styledTexts';
import Arrow from '../_icons/Arrow';
import PlusOnQuarter from '@/components/common/_icons/PlusOnQuarter';
import Item from './Item';
import ScrollbarContainer from '@/components/common/_elements/ScrollbarContainer';
import styled from 'styled-components';
import mediaQueries from '@/utils/mediaQueries';
import { addresses } from './data';

const blue = '#89CFF090';
const green = '#77DD7790';

export default function Addresses({ showModal }: { showModal: () => void }) {
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
        onClick={() => showModal()}
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
