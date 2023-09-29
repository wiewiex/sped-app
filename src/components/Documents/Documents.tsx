import { Container, ElementPositionWrapper } from '@/components/_views/styledContainers';
import Tile from '@/components/_elements/Tile';
import PlusOnQuarter from '@/components/_icons/PlusOnQuarter';
import Item from './Item';
import ScrollbarContainer from '@/components/_elements/ScrollbarContainer';
import styled from 'styled-components';
import mediaQueries from '@/utils/mediaQueries';
import { addresses } from './data';

export default function Documents() {
  return (
    <Tile mobileWidth="100%" minHeight="30rem" padding="0">
      <ScrollbarContainer>
        <ItemsContainer>
          {addresses.map((el, i) => (
            <Container key={i} mobileFlexDirection="row">
              <Item {...el} />
            </Container>
          ))}
        </ItemsContainer>
      </ScrollbarContainer>
      <ElementPositionWrapper mobileRight="0" mobileBottom="0">
        <PlusOnQuarter />
      </ElementPositionWrapper>
    </Tile>
  );
}

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
