import { Container } from '@/components/_views/styledContainers';
import Tile from '@/components/_elements/Tile';
import Item from './Item';
import { H3 } from '../_views/styledTexts';

export default function Documents() {
  return (
    <Tile mobileWidth="100%" minHeight="30rem">
      <Container mobileMargin="0 0 2rem 0">
        <H3>Dokumenty</H3>
      </Container>
      <Container flexDirection="row" mobileWidth="100%">
        <Item name="Zlecenie" />
        <Item name="CMR" />
        <Item name="Inne dokoumenty" />
        <Item name="Zlecenie od klienta" />
      </Container>
    </Tile>
  );
}
