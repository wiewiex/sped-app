import { Container } from '@/components/views/styledContainers';
import Navbar from './Navbar';
import useWindowSize from '@/hooks/useWindowSize';
import Sidebar from './Sidebar';
import Main from './Main';

export default function Layout() {
  const { isMobile } = useWindowSize();

  return (
    <Container relative id="app-container" mobileWidth="100%">
      <Navbar />
      <Container
        mobileWidth="100%"
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="stretch"
      >
        <Container width="20%" backgroundColor="red">
          {!isMobile && <Sidebar />}
        </Container>
        <Container flex={1} mobileWidth="100%" width="auto">
          <Main />
        </Container>
      </Container>
    </Container>
  );
}
