import { H3, Text } from '@/components/views/styledTexts';
import Tile from '../Tile';
import { Container } from '@/components/views/styledContainers';
import PrimaryTextInput from '@/components/reusable/PrimaryTextInput';
import CustomSelect from '@/components/reusable/CustomSelect';

export default function Amounts() {
  return (
    <Tile mobileWidth="100%" minHeight="30rem">
      <H3>Kwoty</H3>
      <Container mobileWidth="100%" mobileFlexDirection="row">
        <Column label="Klient" selectOptions={['EURO', 'PRZELEW']} />
        <Column label="Termin" selectOptions={['EURO', 'PRZELEW']} />
        <Column label="Przewoźnik" selectOptions={['EURO', 'PRZELEW']} />
        <Column label="Term" selectOptions={['EURO', 'PRZELEW']} />
      </Container>
    </Tile>
  );
}

const Column = ({
  label,
  selectOptions,
}: {
  label: string;
  selectOptions: string[];
}) => (
  <Container mobileWidth="70%">
    <Container mobileWidth="12rem">
      <PrimaryTextInput label={label} />
    </Container>
    <Container mobileAlignItems="flex-end">
      <CustomSelect
        width="130px"
        name={'amounts_' + label}
        options={selectOptions}
      />
    </Container>
  </Container>
);
