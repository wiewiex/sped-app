import { Container } from '@/components/views/styledContainers';
import { H3 } from '@/components/views/styledTexts';
import PrimaryButton from '@/components/common/_elements/PrimaryButton';

import ClientAndCarrierWrite from '@/components/common/ClientAndCarrier/ClientAndCarrierWrite';
import Addresses from '@/components/common/Addresses';
import AmountsWrite from '@/components/common/Amounts/AmountsWrite';
import Comments from '@/components/common/Comments';
import DetailsWrite from '@/components/common/Details/DetailsWrite';

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
        <ClientAndCarrierWrite />
        <Addresses />
        <AmountsWrite />
        <DetailsWrite />
        <Comments />
        <Container mobilePadding="3rem">
          <PrimaryButton text="Dodaj" url="/" />
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
