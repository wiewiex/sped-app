import { H3, Text } from '@/components/views/styledTexts';
import Tile from '@/components/common/_elements/Tile';
import { Container } from '@/components/views/styledContainers';
import PrimaryTextInput from '@/components/common/_elements/PrimaryTextInput';
import CustomSelect from '@/components/common/_elements/CustomSelect';

export default function AmountsRead() {
  return (
    <Tile mobileWidth="100%" minHeight="25rem" mobileMinHeight="30rem">
      <H3>Kwoty</H3>
      <Container
        $mobileWrap
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

const Item = ({ label, selectOptions }: { label: string; selectOptions: string[] }) => (
  <Container mobileFlexDirection="row" width="25rem" mobileWidth="100%">
    <PrimaryTextInput label={label} type="number" />
    <Container mobilePadding="2rem" mobileWidth="100%">
      <CustomSelect options={selectOptions} />
    </Container>
  </Container>
);
