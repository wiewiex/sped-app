import { Container } from '@/components/_views/styledContainers';
import { useAppTheme } from '@/utils/theme';
import { ReactNode } from 'react';

export default function Tile({
  children,
  mobileWidth,
  width,
  minHeight,
  mobileMinHeight,
  padding,
}: {
  children: ReactNode;
  width?: string;
  mobileWidth: string;
  minHeight?: string;
  mobileMinHeight?: string;
  padding?: string;
}) {
  const { borderRadius, boxShadow } = useAppTheme();
  return (
    <Container
      mobileWidth={mobileWidth}
      width={width}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      minHeight={minHeight}
      mobileMinHeight={mobileMinHeight}
      mobileJustifyContent="space-between"
      mobilePadding={padding ? padding : '3rem'}
      mobileMargin="0 0 4rem 0"
      relative
    >
      {children}
    </Container>
  );
}
