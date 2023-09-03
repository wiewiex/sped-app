import AnimationWrapper from '@/utils/AnimationWrapper';
import { PrimaryButtonContainer } from '../views/styledContainers';
import Link from 'next/link';
import { fadeInTopForButton } from '@/utils/keyframes';
import { useState } from 'react';
import { H5 } from '../views/styledTexts';
import useWindowSize from '@/hooks/useWindowSize';

export interface IPrimaryButton {
  text: string;
  url: string;
  rotate?: boolean;
  textColor?: string;
}

export default function PrimaryButton({
  text,
  url,
  rotate,
  textColor,
}: IPrimaryButton) {
  const [animate, setAnimate] = useState<boolean>(true);
  const windowSize = useWindowSize();

  const button = (
    <PrimaryButtonContainer
      $rotate={!!rotate}
      icon="/assets/arrow.png"
      onMouseEnter={() => setAnimate(false)}
      onMouseLeave={() => setAnimate(true)}
    >
      <AnimationWrapper
        keyframe={fadeInTopForButton}
        duration={1}
        isElementInView={windowSize.isMobile ? undefined : animate}
      >
        <H5 textAlign="center" color={textColor}>
          {text.toUpperCase()}
        </H5>
      </AnimationWrapper>
    </PrimaryButtonContainer>
  );

  return <Link href={url}>{button}</Link>;
}
