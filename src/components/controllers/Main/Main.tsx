import { Container } from '@/components/views/styledContainers';
import Home from '../Home';
import { useAppContext } from '@/context/AppContext';
import Modal from '../Modal';
import AddAddress from '../AddAddress';

export default function Main() {
  const { showAddAddressModal, setShowAddAddressModal } = useAppContext();

  return (
    <Container relative>
      {showAddAddressModal && (
        <Modal closeModal={() => setShowAddAddressModal(false)}>
          <AddAddress />
        </Modal>
      )}
      <Home />
    </Container>
  );
}
