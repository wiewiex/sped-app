import { useState, Dispatch, SetStateAction } from 'react';

import { Container } from '@/components/_views/styledContainers';
import { H3 } from '@/components/_views/styledTexts';
import PrimaryButton from '@/components/_elements/PrimaryButton';

import ClientAndCarrierWrite from '@/components/ClientAndCarrier/ClientAndCarrierWrite';
import Addresses from '@/components/Addresses';
import AmountsWrite from '@/components/Amounts/AmountsWrite';
import { CommentsWrite } from '../Comments';
import DetailsWrite from '@/components/Details/DetailsWrite';
import AddCarrierModal from '../AddCarrier';
import AddAddressModal from '../AddAddress';
import AddClientModal from '../AddClient';

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
      <Container mobileWidth="90%" mobileMargin="0 auto" id="home-page">
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
