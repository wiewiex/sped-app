import styled, { Keyframes, css } from 'styled-components';

interface IAnimationWrapper {
  keyframe: Keyframes;
  duration: number;
  delay?: number;
  isElementInView?: boolean | undefined;
  flex?: number;
  width?: string;
}

const AnimationWrapper = styled.div<IAnimationWrapper>(
  ({ isElementInView, keyframe, duration, delay, flex, width }) => {
    return isElementInView || isElementInView === undefined
      ? css<IAnimationWrapper>`
          visibility: hidden;
          animation: ${keyframe} ${duration}s;
          animation-fill-mode: forwards;
          animation-delay: ${delay}s;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          flex: ${flex ? flex : 'initial'};
          width: ${width ? width : 'auto'};
        `
      : css`
          visibility: hidden;
        `;
  }
);
export default AnimationWrapper;
