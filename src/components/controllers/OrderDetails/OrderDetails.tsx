import { Container } from '@/components/views/styledContainers';
import { H3 } from '@/components/views/styledTexts';
import Addresses from '@/components/common/Addresses';
import ClientAndCarrierWrite from '@/components/common/ClientAndCarrier/ClientAndCarrierWrite';
import Amounts from '@/components/common/Amounts';

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
      <ClientAndCarrierWrite />
      <Addresses />
      <Amounts />
    </Container>
  );
}
