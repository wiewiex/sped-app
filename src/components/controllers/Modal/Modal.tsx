import {
  Container,
  ElementPositionWrapper,
} from '@/components/views/styledContainers';
import { ReactNode } from 'react';
import { GlassBackground } from '@/components/views/styledContainers';
import { useAppTheme } from '@/utils/theme';
import CloseIcon from './CloseIcon';

export default function Modal({
  children,
  closeModal,
}: {
  children: ReactNode;
  closeModal: () => void;
}) {
  const { colors, boxShadow } = useAppTheme();
  return (
    <ElementPositionWrapper
      mobileTop="0"
      mobileLeft="0"
      mobileRight="0"
      zIndex={99}
      position="fixed"
    >
      <Container mobileHeight="100vh" mobileWidth="100%">
        <GlassBackground>
          <Container
            mobileMinHeight="20rem"
            mobileMinWidth="20rem"
            backgroundColor={colors.mainBackground}
            boxShadow={boxShadow}
          >
            <Container mobileWidth="100%" mobileAlignItems="flex-end">
              <Container
                mobilePadding="1rem"
                cursor="pointer"
                onClick={() => closeModal()}
              >
                <CloseIcon />
              </Container>
            </Container>
            <Container flex={1} mobilePadding="1rem">
              {children}
            </Container>
          </Container>
        </GlassBackground>
      </Container>
    </ElementPositionWrapper>
  );
}
