import {
  Container,
  ElementPositionWrapper,
} from '@/components/views/styledContainers';
import { ReactNode } from 'react';
import { GlassBackground } from '@/components/views/styledContainers';
import { useAppTheme } from '@/utils/theme';
import CloseIcon from './CloseIcon';
import AnimationWrapper from '@/utils/AnimationWrapper';
import { fadeIn } from '@/utils/keyframes';

export default function Modal({
  children,
  closeModal,
}: {
  children: ReactNode;
  closeModal: () => void;
}) {
  const { colors, boxShadow, borderRadius } = useAppTheme();
  return (
    <ElementPositionWrapper
      mobileTop="0"
      mobileLeft="0"
      mobileRight="0"
      mobileBottom="0"
      zIndex={99}
      position="fixed"
      mobilePosition="absolute"
    >
      <Container flex={1} mobileMinHeight="100vh" mobileWidth="100%">
        <GlassBackground>
          <AnimationWrapper keyframe={fadeIn} duration={0.3}>
            <Container padding="2rem">
              <Container
                mobileMinHeight="100vh"
                mobileMinWidth="100vw"
                minHeight="20rem"
                minWidth="20rem"
                backgroundColor={colors.mainBackground}
                boxShadow={boxShadow}
                borderRadius={borderRadius}
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
                <Container
                  flex={1}
                  mobilePadding="1rem"
                  mobileWidth="100%"
                >
                  {children}
                </Container>
              </Container>
            </Container>
          </AnimationWrapper>
        </GlassBackground>
      </Container>
    </ElementPositionWrapper>
  );
}
