import { Container } from '@/components/views/styledContainers';
import { useAppTheme } from '@/utils/theme';
import { ReactNode } from 'react';

export default function Tile({
  children,
  mobileWidth,
  width,
  minHeight,
}: {
  children: ReactNode;
  width?: string;
  mobileWidth: string;
  minHeight?: string;
}) {
  const { borderRadius, boxShadow } = useAppTheme();
  return (
    <Container
      mobileWidth={mobileWidth}
      width={width}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      justifyContent="space-around"
      minHeight={minHeight}
      mobilePadding="3rem"
      mobileMargin="0 0 4rem 0"
    >
      {children}
    </Container>
  );
}
