import { Container } from '@/components/views/styledContainers';
import { H3 } from '@/components/views/styledTexts';
import Addresses from '../common/Addresses';
import AmountsRead from '@/components/common/Amounts/AmountsRead';
import ClientAndCarrierRead from '@/components/common/ClientAndCarrier/ClientAndCarrierRead';
import DetailsRead from '@/components/common/Details/DetailsRead';

export default function OrderDetails() {
  return (
    <Container
      mobileWidth="90%"
      margin="0 auto"
      id="details-page"
      flex={1}
      mobileJustifyContent="flex-start"
    >
      <Container mobilePadding="4rem 0" alignSelf="flex-start">
        <H3>Zlecenie nr: 79/BP/08/2023</H3>
      </Container>
      <ClientAndCarrierRead />
      <Addresses showModal={console.log} />
      <AmountsRead />
      <DetailsRead />
    </Container>
  );
}
