import { Container } from '@/components/views/styledContainers';
import Header from './Header';
import Menu from './Menu';
import { useAppTheme } from '@/utils/theme';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  const { navbarWidth } = useAppTheme();
  return (
    <Container relative id="app-container" mobileWidth="100%">
      <Header />
      <Container
        mobileWidth="100%"
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="stretch"
      >
        <Container width={navbarWidth} hiddenOnMobile>
          <Menu />
        </Container>
        <Container flex={1} mobileWidth="100%">
          {children}
        </Container>
      </Container>
    </Container>
  );
}
