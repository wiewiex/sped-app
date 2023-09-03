import { Container } from '@/components/views/styledContainers';
import { H3 } from '@/components/views/styledTexts';
import React from 'react';
import SelectWithPlus from './SelectWithPlus';

import Tile from '../Tile';

export default function ClientAndCarrier() {
  return (
    <Container
      flexDirection="row"
      justifyContent="space-between"
      mobileWidth="100%"
      mobileMinHeight="30rem"
      alignItems="stretch"
    >
      <Tile mobileWidth="100%" width="48%">
        <H3>Klient</H3>
        <SelectWithPlus
          name="klient"
          placeholder="Wybierz klienta"
          options={['Tesco', 'Aldi', 'Lidl']}
        />
        <SelectWithPlus
          name="osoba-kontaktowa"
          placeholder="Wybierz osobę kontaktową"
          options={['Manager', 'Driver']}
        />
      </Tile>
      <Tile mobileWidth="100%" width="48%">
        <H3>Przewoźnik</H3>
        <SelectWithPlus
          name="przewoznik"
          placeholder="Wybierz przewoźnika"
          options={['DHL', 'UPS', 'GSL']}
        />
        <SelectWithPlus
          name="kontakt"
          placeholder="Wybierz osobę kontaktową"
          options={['DHL', 'UPS', 'GSL']}
        />
        <SelectWithPlus
          name="kierowca"
          placeholder="Wybierz kierowcę"
          options={['Marek', 'Józek', 'Krzysiek']}
        />
      </Tile>
    </Container>
  );
}
