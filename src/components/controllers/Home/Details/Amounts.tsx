import { H3, Text } from '@/components/views/styledTexts';
import Tile from '../Tile';
import { Container } from '@/components/views/styledContainers';
import PrimaryTextInput from '@/components/reusable/PrimaryTextInput';
import CustomSelect from '@/components/reusable/CustomSelect';

export default function Amounts() {
  return (
    <Tile mobileWidth="100%" minHeight="40rem">
      <H3>Kwoty</H3>
      <Row text="Klient" selectOptions={['EURO', 'PRZELEW']} />
      <Row text="Termin" selectOptions={['EURO', 'PRZELEW']} />
      <Row text="Przewoźnik" selectOptions={['EURO', 'PRZELEW']} />
      <Row text="Term" selectOptions={['EURO', 'PRZELEW']} />
    </Tile>
  );
}

const Row = ({
  text,
  selectOptions,
}: {
  text: string;
  selectOptions: string[];
}) => (
  <Container
    mobileFlexDirection="row"
    mobileWidth="70%"
    mobileJustifyContent="space-between"
  >
    <Container mobileAlignItems="flex-start" mobileWidth="100px">
      <Text>{text}</Text>
    </Container>
    <Container mobileWidth="20%">
      <PrimaryTextInput />
    </Container>
    <Container mobileAlignItems="flex-end">
      <CustomSelect
        width="130px"
        name={'amounts_' + text}
        options={selectOptions}
      />
    </Container>
  </Container>
);
