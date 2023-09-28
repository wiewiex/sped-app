import { H3, Text } from '@/components/views/styledTexts';
import Tile from '@/components/common/_elements/Tile';
import { Container, ElementPositionWrapper } from '@/components/views/styledContainers';
import PrimaryTextInput from '@/components/common/_elements/PrimaryTextInput';
import CustomSelect from '@/components/common/_elements/CustomSelect';
import PenOnQuarter from '../_icons/PenOnQuarter';
import { ReactNode } from 'react';

export default function AmountsRead() {
  return (
    <Tile mobileWidth="100%" minHeight="25rem" mobileMinHeight="30rem">
      <H3>Kwoty</H3>
      <Container
        flex={1}
        $mobileWrap
        mobileWidth="100%"
        flexDirection="row"
        justifyContent="space-around"
        alignItems="stretch"
      >
        <Column>dsfdsf</Column>
        <Column>fdsfds</Column>
        <Column>dsfsdf</Column>
      </Container>
      <ElementPositionWrapper mobileRight="0" mobileBottom="0">
        <PenOnQuarter />
      </ElementPositionWrapper>
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

const Column = ({ children }: { children: ReactNode }) => (
  <Container border="1px solid red" width="30%">
    {children}
  </Container>
);
