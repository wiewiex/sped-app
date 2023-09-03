import Tile from '../Tile';
import { H3, Text } from '@/components/views/styledTexts';
import ToggleButton from '@/components/reusable/ToggleButton';
import { Container } from '@/components/views/styledContainers';
import CustomSelect from '@/components/reusable/CustomSelect';

export default function Other() {
  return (
    <Tile mobileWidth="100%" minHeight="30rem">
      <H3>Inne</H3>
      <Container flexDirection="row">
        <Item text="Rodzaj pojazdu:" selectOptions={['BUS', 'TIR']} />
        <Item
          text="Rodzaj nadwozia:"
          selectOptions={['PLANDEKA', 'BLACHA']}
        />
      </Container>
      <Container
        backgroundGradient
        borderRadius="3rem"
        mobilePadding="0.2rem"
      >
        <ToggleButton offText="FTL" onText="LTL" />
      </Container>
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
  <Container mobileFlexDirection="row" mobileWidth="40rem">
    <Text style={{ whiteSpace: 'nowrap' }}>{text}</Text>
    <CustomSelect name={text} options={selectOptions} width="15rem" />
  </Container>
);
