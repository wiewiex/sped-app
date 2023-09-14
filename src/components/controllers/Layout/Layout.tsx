import { Container } from '@/components/views/styledContainers';
import Header from './Header';
import useWindowSize from '@/hooks/useWindowSize';
import Sidebar from './Sidebar';
import Main from './Main';

export default function Layout() {
  const { isMobile } = useWindowSize();

  return (
    <Container relative id="app-container" mobileWidth="100%">
      <Header />
      <Container
        mobileWidth="100%"
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="stretch"
      >
        <Container width="15%" minWidth="12rem">
          {!isMobile && <Sidebar />}
        </Container>
        <Container width="85%" mobileWidth="100%">
          <Main />
        </Container>
      </Container>
    </Container>
  );
}
