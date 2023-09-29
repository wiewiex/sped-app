import { Container } from '@/components/_views/styledContainers';
import { H3 } from '@/components/_views/styledTexts';
import Addresses from '../Addresses';
import { ClientAndCarrierRead } from '../ClientAndCarrier';
import { AmountsRead } from '../Amounts';
import { DetailsRead } from '../Details';
import { CommentsRead } from '../Comments';
import Message from '../Message';
import Documents from '../Documents';

export default function OrderDetails() {
  return (
    <Container
      mobileWidth="90%"
      margin="0 auto"
      id="details-page"
      flex={1}
      mobileJustifyContent="flex-start"
    >
      <Container mobileMargin="0 0 4rem 0" alignSelf="flex-start">
        <H3>Zlecenie nr: 79/BP/08/2023</H3>
      </Container>
      <ClientAndCarrierRead />
      <Addresses showModal={console.log} />
      <AmountsRead />
      <DetailsRead />
      <CommentsRead />
      <Documents />
      <Container mobileWidth="100%" maxWidth="70rem" alignSelf="flex-end">
        <Message />
      </Container>
    </Container>
  );
}
