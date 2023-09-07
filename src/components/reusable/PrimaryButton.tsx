import Link from 'next/link';
import { H4 } from '../views/styledTexts';
import { Container } from '../views/styledContainers';
import { useAppTheme } from '@/utils/theme';

export default function PrimaryButton({ text, url }: IPrimaryButton) {
  const { borderRadius, boxShadow, colors } = useAppTheme();
  return (
    <Container
      backgroundGradient
      mobileWidth="100%"
      mobilePadding="1.5rem 0"
      borderRadius={borderRadius}
      boxShadow="2px 2px 2px #00000010"
      cursor="pointer"
    >
      <Link href={url}>
        <H4 color={colors.accent}>{text}</H4>
      </Link>
    </Container>
  );
}

export interface IPrimaryButton {
  text: string;
  url: string;
}
