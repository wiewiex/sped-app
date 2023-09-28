import { Container } from '@/components/views/styledContainers';
import { H3 } from '@/components/views/styledTexts';
import PrimaryButton from '@/components/common/_elements/PrimaryButton';

import ClientAndCarrierRead from '@/components/common/ClientAndCarrier/ClientAndCarrierRead';
import Addresses from '@/components/common/Addresses';
import Details from '@/components/common/Details';
import Amounts from '@/components/common/Amounts';
import Comments from '@/components/common/Comments';

import Modal from '../Modal';
import AddAddress from '../Modal/AddAddress';
import AddClient from '../Modal/AddClient';
import AddCarrier from '../Modal/AddCarrier';
import { useAppContext } from '@/context/AppContext';

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
        <ClientAndCarrierRead />
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
