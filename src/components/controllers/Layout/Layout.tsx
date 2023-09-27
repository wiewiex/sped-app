import { Container } from '@/components/views/styledContainers';
import Header from './Header';
import Menu from './Menu';
import Main from './Main';
import { useAppTheme } from '@/utils/theme';

export default function Layout() {
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
        <Container width="85%" mobileWidth="100%">
          <Main />
        </Container>
      </Container>
    </Container>
  );
}
