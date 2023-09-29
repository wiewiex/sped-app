import { Container } from '@/components/_views/styledContainers';
import { H3 } from '@/components/_views/styledTexts';
import Addresses from '../Addresses';
import AmountsRead from '@/components/Amounts/AmountsRead';
import ClientAndCarrierRead from '@/components/ClientAndCarrier/ClientAndCarrierRead';
import DetailsRead from '@/components/Details/DetailsRead';
import { CommentsRead } from '..//Comments';

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
      <CommentsRead />
    </Container>
  );
}
