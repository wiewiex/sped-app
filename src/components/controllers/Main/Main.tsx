import { Container } from '@/components/views/styledContainers';
import Home from '../Home';
import { useAppContext } from '@/context/AppContext';
import Modal from '../Modal';

export default function Main() {
  const { showAddAddressModal, setShowAddAddressModal } = useAppContext();

  return (
    <Container relative>
      {showAddAddressModal && (
        <Modal closeModal={() => setShowAddAddressModal(false)}>
          TEST
        </Modal>
      )}
      <Home />
    </Container>
  );
}
