import { H3, Text } from '@/components/views/styledTexts';
import Tile from '../Tile';
import { Container } from '@/components/views/styledContainers';
import PrimaryTextInput from '@/components/reusable/PrimaryTextInput';
import CustomSelect from '@/components/reusable/CustomSelect';

export default function Amounts() {
  return (
    <Tile mobileWidth="100%" minHeight="25rem">
      <H3>Kwoty</H3>
      <Container
        mobileWidth="100%"
        flexDirection="row"
        justifyContent="space-around"
      >
        <Item label="Klient" selectOptions={['EURO', 'PRZELEW']} />
        <Item label="Termin" selectOptions={['EURO', 'PRZELEW']} />
        <Item label="Przewoźnik" selectOptions={['EURO', 'PRZELEW']} />
        <Item label="Term" selectOptions={['EURO', 'PRZELEW']} />
      </Container>
    </Tile>
  );
}

const Item = ({
  label,
  selectOptions,
}: {
  label: string;
  selectOptions: string[];
}) => (
  <Container
    mobileFlexDirection="row"
    mobileWidth="40rem"
    mobileAlignItems="flex-end"
  >
    <PrimaryTextInput label={label} type="number" width="13rem" />
    <Container mobilePadding="2rem">
      <CustomSelect width="13rem" options={selectOptions} />
    </Container>
  </Container>
);
