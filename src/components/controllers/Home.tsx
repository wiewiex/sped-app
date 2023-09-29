import { useState, Dispatch, SetStateAction } from 'react';

import { Container } from '@/components/views/styledContainers';
import { H3 } from '@/components/views/styledTexts';
import PrimaryButton from '@/components/common/_elements/PrimaryButton';

import ClientAndCarrierWrite from '@/components/common/ClientAndCarrier/ClientAndCarrierWrite';
import Addresses from '@/components/common/Addresses';
import AmountsWrite from '@/components/common/Amounts/AmountsWrite';
import { CommentsWrite } from '../common/Comments';
import DetailsWrite from '@/components/common/Details/DetailsWrite';
import AddCarrierModal from '../common/AddCarrier';
import AddAddressModal from '../common/AddAddress';
import AddClientModal from '../common/AddClient';

const closeModal = (setState: Dispatch<SetStateAction<boolean>>) => {
  setState(false);
};

const showModal = (setState: Dispatch<SetStateAction<boolean>>) => {
  setState(true);
};

export default function Home() {
  const [showAddAddress, setShowAddAddress] = useState<boolean>(false);
  const [showAddClient, setShowAddClient] = useState<boolean>(false);
  const [showAddCarrier, setShowAddCarrier] = useState<boolean>(false);

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
        <ClientAndCarrierWrite
          showAddClient={() => showModal(setShowAddClient)}
          showAddCarrier={() => showModal(setShowAddCarrier)}
        />
        <Addresses showModal={() => showModal(setShowAddAddress)} />
        <AmountsWrite />
        <DetailsWrite />
        <CommentsWrite />
        <Container mobilePadding="3rem">
          <PrimaryButton text="Dodaj" url="/" />
        </Container>
      </Container>
      {showAddClient && (
        <AddClientModal closeModal={() => closeModal(setShowAddClient)} />
      )}
      {showAddCarrier && (
        <AddCarrierModal closeModal={() => closeModal(setShowAddCarrier)} />
      )}
      {showAddAddress && (
        <AddAddressModal closeModal={() => closeModal(setShowAddAddress)} />
      )}
    </>
  );
}
