import { Container } from '@/components/_views/styledContainers';
import MenuItem from './MenuItem';
import SubmenuItem from './SubmenuItem';
import { ReactNode } from 'react';
import { useAppTheme } from '@/utils/theme';

export default function Menu() {
  const { colors } = useAppTheme();
  return (
    <Container
      mobileWidth="100%"
      flex={1}
      mobileJustifyContent="flex-start"
      backgroundColor={colors.navBackground}
      padding="2rem 0"
    >
      <SubmenuItem name="Home" iconClassName="fas fa-th-large" />
      <Category>
        <MenuItem name="Spedycja" iconClassName="fas fa-warehouse" submenu />
        <SubmenuItem href="/" name="Nowe zlecenie" iconClassName="fas fa-plus" />
        <SubmenuItem href="/details" name="Zlecenia" iconClassName="fas fa-list" />
        <SubmenuItem name="Klienci" iconClassName="fas fa-user-friends" />
        <SubmenuItem name="Przewoźnicy" iconClassName="fas fa-bus" />
      </Category>
      <Category>
        <MenuItem name="Transport" iconClassName="fas fa-truck" submenu />
        <SubmenuItem name="Nowe zlecenie" iconClassName="fas fa-plus" />
        <SubmenuItem name="Zlecenia" iconClassName="fas fa-list" />
        <SubmenuItem name="Klienci" iconClassName="fas fa-user-friends" />
        <SubmenuItem name="Przewoźnicy" iconClassName="fas fa-bus" />
      </Category>
      <MenuItem name="Rozliczenia" iconClassName="fas fa-calculator" />
      <MenuItem name="Ustawienia" iconClassName="fas fa-cog" />
    </Container>
  );
}

const Category = ({ children }: { children: ReactNode }) => (
  <Container mobilePadding="2rem 0" mobileWidth="100%">
    {children}
  </Container>
);
