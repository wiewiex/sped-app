import Tile from '../Tile';
import { H3, H4 } from '@/components/views/styledTexts';
import { Container } from '@/components/views/styledContainers';
import PrimaryTextInput from '@/components/reusable/PrimaryTextInput';

export default function Load() {
  return (
    <Tile minHeight="25rem" mobileWidth="100%">
      <H3>Ładunek</H3>
      <Container
        flexDirection="row"
        mobileWidth="100%"
        justifyContent="space-around"
      >
        <Item text="Waga" />
        <Item text="Ilość" />
        <Item text="Kilometry" />
      </Container>
    </Tile>
  );
}

const Item = ({ text }: { text: string }) => (
  <Container>
    <H4>{text}</H4>
    <Container width="20rem">
      <PrimaryTextInput />
    </Container>
  </Container>
);
