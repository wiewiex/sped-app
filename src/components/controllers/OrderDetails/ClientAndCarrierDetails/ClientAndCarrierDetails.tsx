import { Container } from '@/components/views/styledContainers';
import { H3, H4, H5 } from '@/components/views/styledTexts';
import { ElementPositionWrapper } from '@/components/views/styledContainers';
import Tile from '@/components/reusable/Tile';
import { useAppContext } from '@/context/AppContext';

export default function ClientAndCarrierDetails() {
  const { setShowCarrierModal, setShowClientModal } = useAppContext();
  return (
    <Container
      flexDirection="row"
      justifyContent="space-between"
      mobileWidth="100%"
      alignItems="stretch"
    >
      <Tile mobileWidth="100%" width="48%">
        <Container
          flex={1}
          mobileWidth="90%"
          mobileJustifyContent="space-around"
          mobileMinHeight="20rem"
          minHeight="25rem"
        >
          <H3>Klient</H3>
          <H5>Spedapp sp. z.o.o</H5>
        </Container>
        <ElementPositionWrapper
          mobileRight="0"
          mobileBottom="0"
          onClick={() => {
            setShowClientModal(true);
          }}
        ></ElementPositionWrapper>
      </Tile>
      <Tile mobileWidth="100%" width="48%">
        <Container
          flex={1}
          mobileWidth="90%"
          mobileJustifyContent="space-around"
          mobileMinHeight="20rem"
        >
          <H3>Przewoźnik</H3>
        </Container>
        <ElementPositionWrapper
          mobileRight="0"
          mobileBottom="0"
          onClick={() => {
            setShowCarrierModal(true);
          }}
        ></ElementPositionWrapper>
      </Tile>
    </Container>
  );
}
