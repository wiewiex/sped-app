import styled, { css } from 'styled-components';
import mediaQueries from '@/utils/mediaQueries';
import AnimationWrapper from '@/utils/AnimationWrapper';
import Link from 'next/link';
import { fadeInTopForButton } from '@/utils/keyframes';
import { useState } from 'react';
import { H5 } from '../views/styledTexts';
import useWindowSize from '@/hooks/useWindowSize';

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

export interface IPrimaryButton {
  text: string;
  url: string;
  rotate?: boolean;
  textColor?: string;
}

const PrimaryButtonContainer = styled.button(
  (props: { icon: string; $rotate: boolean }) => css`
    position: relative;
    cursor: pointer;
    background-color: transparent;
    font-size: 15px;
    padding: 20px 30px;
    border: none;
    max-width: 180px;
    text-align: center;
    font-weight: 600;
    transform: ${props.$rotate ? 'rotate(90deg)' : 'initial'};

    &&::after {
      content: '';
      position: absolute;
      background-color: ${(props) => props.theme.colors.accent};
      background-position: center;
      left: 0;
      right: 0;
      bottom: 0;
      height: 4px;
    }

    @media ${mediaQueries.tabletHorizontal} {
      &&:hover {
        &&::after {
          transition: 0.3s;
          height: 100%;
          background-image: url(${props.icon});
          background-repeat: no-repeat;
          background-size: 35px;
        }
      }
    }
  `
);
