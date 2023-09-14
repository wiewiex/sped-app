import { Container } from '@/components/views/styledContainers';
import { H4 } from '@/components/views/styledTexts';
import { useAppTheme } from '@/utils/theme';

export default function Header() {
  const { colors } = useAppTheme();
  return (
    <Container
      mobileWidth="100%"
      mobilePadding="0 2rem"
      mobileFlexDirection="row"
      backgroundColor={colors.accent}
      mobileJustifyContent="space-between"
    >
      <H4>HEADER</H4>
      <Container imgFit="contain" mobilePadding="2rem" mobileWidth="200px">
        <img src="/logo_vbs.png" alt="logo" />
      </Container>
      <H4>HEADER</H4>
    </Container>
  );
}
