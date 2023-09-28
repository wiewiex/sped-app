import Tile from '@/components/reusable/Tile';
import { H3, Text } from '@/components/views/styledTexts';
import ToggleButton from '@/components/reusable/ToggleButton';
import { Container } from '@/components/views/styledContainers';
import CustomSelect from '@/components/reusable/CustomSelect';
import PrimaryTextInput from '@/components/reusable/PrimaryTextInput';

export default function Details() {
  return (
    <Tile minHeight="35rem" mobileWidth="100%">
      <H3>Szczegóły</H3>
      <Container
        flexDirection="row"
        mobileWidth="100%"
        justifyContent="space-around"
      >
        <InputBox label="Waga ładunku" />
        <InputBox label="Ilość ładunku" />
        <InputBox label="Kilometry" />
      </Container>
      <Container mobileWidth="100%">
        <Container
          flexDirection="row"
          mobileWidth="100%"
          justifyContent="space-around"
        >
          <Item text="Rodzaj pojazdu:" selectOptions={['BUS', 'TIR']} />
          <Item
            text="Rodzaj nadwozia:"
            selectOptions={['PLANDEKA', 'BLACHA']}
          />
        </Container>
        <ToggleButton offText="FTL" onText="LTL" />
      </Container>
    </Tile>
  );
}

const InputBox = ({ label }: { label: string }) => (
  <Container width="25%" mobileWidth="100%" margin="2rem">
    <PrimaryTextInput label={label} type="number" />
  </Container>
);

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
