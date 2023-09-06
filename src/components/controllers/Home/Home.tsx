import { Container } from '@/components/views/styledContainers';
import ClientAndCarrier from './ClientAndCarrier';
import Addresses from './Addresses';
import { H3 } from '@/components/views/styledTexts';
import SecondaryButton from '@/components/reusable/SecondaryButton';
import Details from './Details';

export default function Home() {
  return (
    <Container mobileWidth="90%" margin="0 auto">
      <Container mobilePadding="4rem 0" alignSelf="flex-start">
        <H3>Zlecenie nr: 79/BP/08/2023</H3>
      </Container>
      <ClientAndCarrier />
      <Addresses />
      <Details />
      <Container mobilePadding="2rem 0" mobileWidth="100%">
        <SecondaryButton text="zapisz" width="100%" />
      </Container>
    </Container>
  );
}
