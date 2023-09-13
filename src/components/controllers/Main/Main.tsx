import { Container } from '@/components/views/styledContainers';
import Home from '../Home';
import { useAppContext } from '@/context/AppContext';
import Modal from '../Modal';
import AddAddress from '../Modal/AddAddress';
import AddClient from '../Modal/AddClient';
import AddCarrier from '../Modal/AddCarrier';

export default function Main() {
  const {
    showAddressModal,
    setShowAddressModal,
    showCarrierModal,
    setShowCarrierModal,
    showClientModal,
    setShowClientModal,
  } = useAppContext();

  return (
    <Container relative id="app-container">
      <Home />
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
    </Container>
  );
}
