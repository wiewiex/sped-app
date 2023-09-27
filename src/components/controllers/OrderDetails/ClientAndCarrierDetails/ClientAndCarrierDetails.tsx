import { Container } from '@/components/views/styledContainers';
import {
  H3,
  H4,
  H5,
  SmallText,
  Text,
} from '@/components/views/styledTexts';
import { ElementPositionWrapper } from '@/components/views/styledContainers';
import Tile from '@/components/reusable/Tile';
import { useAppContext } from '@/context/AppContext';
import PenOnQuarter from '../PenOnQuarter';
import { ReactNode } from 'react';

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
          mobileJustifyContent="flex-start"
          mobileAlignItems="flex-start"
          minHeight="10rem"
        >
          <TitleContainer>
            <H3>Klient</H3>
          </TitleContainer>
          <Container
            mobileAlignItems="flex-start"
            mobileJustifyContent="space-between"
          >
            <H5>Spedapp sp. z.o.o</H5>
            <Text>ul. Nowosądecka 66</Text>
            <Text>00-001 Warszawa</Text>
            <Text>NIP: 1234567890</Text>
          </Container>
        </Container>
        <ElementPositionWrapper
          mobileRight="0"
          mobileBottom="0"
          onClick={() => {
            setShowClientModal(true);
          }}
        >
          <PenOnQuarter />
        </ElementPositionWrapper>
      </Tile>
      <Tile mobileWidth="100%" width="48%">
        <Container
          flex={1}
          mobileWidth="90%"
          mobileMinHeight="20rem"
          minHeight="17rem"
          mobileAlignItems="flex-start"
        >
          <TitleContainer>
            <H3>Przewoźnik</H3>
          </TitleContainer>
          <Container
            mobileJustifyContent="space-around"
            mobileAlignItems="flex-start"
            mobileWidth="100%"
            justifyContent="space-between"
            flexDirection="row"
            alignItems="stretch"
            $wrap="wrap"
            flex={1}
          >
            <Box>
              <H5>Cargo Aleksandra Zalewska</H5>
              <Text>ul. Nowosądecka 66</Text>
              <Text>00-001 Warszawa</Text>
              <Text>NIP: 1234567890</Text>
            </Box>
            <Box>
              <SmallText>Osoba kontaktowa:</SmallText>
              <Text>Maciej Kowalski</Text>
              <Text>macko@hej.pl</Text>
              <Text>+12 3456789</Text>
            </Box>
            <Box>
              <SmallText>Kierowca:</SmallText>
              <Text>Zbyszek Kowalczyk</Text>
              <Text>zbyszek@hej.pl</Text>
              <Text>+12 3456789</Text>
            </Box>
          </Container>
        </Container>
        <ElementPositionWrapper
          mobileRight="0"
          mobileBottom="0"
          onClick={() => {
            setShowCarrierModal(true);
          }}
        >
          <PenOnQuarter />
        </ElementPositionWrapper>
      </Tile>
    </Container>
  );
}

const TitleContainer = ({ children }: { children: ReactNode }) => {
  return <Container mobileMargin="0 0 2rem 0">{children}</Container>;
};

const Box = ({ children }: { children: ReactNode }) => {
  return (
    <Container
      mobileAlignItems="flex-start"
      flex={1}
      minHeight="8rem"
      mobileMargin="0 0 1.5rem 0"
      mobileJustifyContent="space-between"
      minWidth="22rem"
      padding="0 3rem 0 0"
    >
      {children}
    </Container>
  );
};
