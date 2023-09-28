import { Container } from '@/components/views/styledContainers';
import ClientAndCarrier from './ClientAndCarrier';
import Addresses from '@/components/reusable/Addresses';
import { H3 } from '@/components/views/styledTexts';
import Details from './Details';
import PrimaryButton from '@/components/reusable/PrimaryButton';

import Modal from '../Modal';
import AddAddress from '../Modal/AddAddress';
import AddClient from '../Modal/AddClient';
import AddCarrier from '../Modal/AddCarrier';
import { useAppContext } from '@/context/AppContext';
import Amounts from './Amounts';
import Comments from './Comments';

export default function Home() {
  const {
    showAddressModal,
    setShowAddressModal,
    showCarrierModal,
    setShowCarrierModal,
    showClientModal,
    setShowClientModal,
  } = useAppContext();
  return (
    <>
      <Container
        mobileWidth="90%"
        mobileMargin="0 auto"
        mobilePadding="4rem 0 7rem 0"
        id="home-page"
      >
        <Container mobileMargin="0 0 4rem 0" alignSelf="flex-start">
          <H3>Zlecenie nr: 79/BP/08/2023</H3>
        </Container>
        <ClientAndCarrier />
        <Addresses />
        <Details />
        <Amounts />
        <Comments />
        <Container mobilePadding="3rem">
          <PrimaryButton text="Zapisz" url="/" />
        </Container>
      </Container>
      {showAddressModal && (
        <Modal closeModal={() => setShowAddressModal(false)}>
          <AddAddress />
        </Modal>
      )}
      {showClientModal && (
        <Modal closeModal={() => setShowClientModal(false)}>
          <AddClient />
        </Modal>
      )}
      {showCarrierModal && (
        <Modal closeModal={() => setShowCarrierModal(false)}>
          <AddCarrier />
        </Modal>
      )}
    </>
  );
}
