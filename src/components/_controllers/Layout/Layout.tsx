import { Container } from '@/components/_views/styledContainers';
import Header from './Header';
import Menu from './Menu';
import { useAppTheme } from '@/utils/theme';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  const { navbarWidth } = useAppTheme();
  return (
    <Container relative id="app-container" mobileWidth="100%" minHeight="100vh">
      <Header />
      <Container
        mobileWidth="100%"
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="stretch"
        flex={1}
      >
        <Container minWidth={navbarWidth} hiddenOnMobile>
          <Menu />
        </Container>
        <Container flex={1} mobilePadding="4rem 0 7rem 0">
          {children}
        </Container>
      </Container>
    </Container>
  );
}
