import { Container } from '@/components/views/styledContainers';
import { H3 } from '@/components/views/styledTexts';
import ClientAndCarrierDetails from './ClientAndCarrierDetails';
import Addresses from '@/components/reusable/Addresses';

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
      <ClientAndCarrierDetails />
      <Addresses />
    </Container>
  );
}
