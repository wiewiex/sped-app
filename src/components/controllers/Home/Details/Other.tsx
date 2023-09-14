import Tile from '@/components/reusable/Tile';
import { H3, Text } from '@/components/views/styledTexts';
import ToggleButton from '@/components/reusable/ToggleButton';
import { Container } from '@/components/views/styledContainers';
import CustomSelect from '@/components/reusable/CustomSelect';

export default function Other() {
  return (
    <Tile mobileWidth="100%" mobileMinHeight="30rem">
      <H3>Inne</H3>
      <Container flexDirection="row" mobileWidth="100%">
        <Item text="Rodzaj pojazdu:" selectOptions={['BUS', 'TIR']} />
        <Item
          text="Rodzaj nadwozia:"
          selectOptions={['PLANDEKA', 'BLACHA']}
        />
      </Container>
      <ToggleButton offText="FTL" onText="LTL" />
    </Tile>
  );
}

const Item = ({
  text,
  selectOptions,
}: {
  text: string;
  selectOptions: string[];
}) => (
  <Container
    mobileFlexDirection="row"
    maxWidth="30rem"
    mobileWidth="100%"
    mobileJustifyContent="space-between"
    justifyContent="space-around"
    $wrap="wrap"
    mobileMargin="0 0 1rem 0"
  >
    <Text style={{ whiteSpace: 'nowrap' }}>{text}</Text>
    <CustomSelect options={selectOptions} width="12rem" />
  </Container>
);
