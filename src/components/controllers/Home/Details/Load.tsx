import Tile from '@/components/reusable/Tile';
import { H3 } from '@/components/views/styledTexts';
import { Container } from '@/components/views/styledContainers';
import PrimaryTextInput from '@/components/reusable/PrimaryTextInput';

export default function Load() {
  return (
    <Tile minHeight="22rem" mobileWidth="100%">
      <H3>Ładunek</H3>
      <Container
        flexDirection="row"
        mobileWidth="100%"
        justifyContent="space-around"
      >
        <Item label="Waga" />
        <Item label="Ilość" />
        <Item label="Kilometry" />
      </Container>
    </Tile>
  );
}

const Item = ({ label }: { label: string }) => (
  <Container width="20rem" mobileWidth="80%">
    <PrimaryTextInput label={label} type="number" />
  </Container>
);
