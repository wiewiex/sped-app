import { Container } from '@/components/views/styledContainers';
import { H3 } from '@/components/views/styledTexts';
import { ElementPositionWrapper } from '@/components/views/styledContainers';
import Tile from '@/components/reusable/Tile';
import CustomSelect from '@/components/reusable/CustomSelect';
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
          <CustomSelect
            placeholder="Wybierz klienta"
            options={['Tesco', 'Aldi', 'Lidl']}
          />
          <CustomSelect
            placeholder="Wybierz osobę kontaktową"
            options={['Manager', 'Driver']}
          />
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
          <CustomSelect
            placeholder="Wybierz przewoźnika"
            options={['DHL', 'UPS', 'GSL']}
          />
          <CustomSelect
            placeholder="Wybierz osobę kontaktową"
            options={['DHL', 'UPS', 'GSL']}
          />
          <CustomSelect
            placeholder="Wybierz kierowcę"
            options={['Marek', 'Józek', 'Krzysiek']}
          />
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
