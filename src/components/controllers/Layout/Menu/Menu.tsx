import { Container } from '@/components/views/styledContainers';
import MenuItem from './MenuItem';

export default function Menu() {
  return (
    <Container
      mobileWidth="100%"
      flex={1}
      mobileJustifyContent="flex-start"
      backgroundGradient
    >
      <MenuItem name="Panel" iconClassName="fas fa-th-large" />
      <MenuItem name="Spedycja" iconClassName="fas fa-warehouse" />
      <MenuItem name="Transport" iconClassName="fas fa-truck" />
      <MenuItem name="Rozliczenia" iconClassName="fas fa-calculator" />
      <MenuItem name="Ustawienia" iconClassName="fas fa-cog" />
    </Container>
  );
}
