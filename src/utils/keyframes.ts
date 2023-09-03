import { keyframes } from 'styled-components';

export const sitDown = keyframes`
0% {
  visibility: hidden;
    opacity: 0;
}
10% {
  opacity: 1;
  
  visibility: visible;
  
  transform: scale(1.01);
  transform: translateY(3vh);
}

50% {
  transform: scale(1.15);
  transform: translateY(-3vh);
}

100% {
  transform: scale(1);
  transform: translateY(0);
}
`;

export const fadeIn = keyframes`
  0% {
    visibility: hidden;
    opacity: 0;
  }
  10% {
    visibility: visible;
    opacity: 0;
  }

  100% {
    visibility: visible;
    opacity: 1;
  }
`;

export const fadeInLeft = keyframes`
  10% {
      transform: translateX(-800px);
      visibility: hidden;
      opacity: 0;
  }
  50% {
      visibility: visible;
      opacity: 0;
  }
  100% {
     transform: translateX(0);
     visibility: visible;
     opacity: 1;
  }
`;

export const fadeInRight = keyframes`
  10% {
      transform: translateX(800px);
      visibility: hidden;
      opacity: 0;
  }

  100% {
     transform: translateX(0);
     visibility: visible;
     opacity: 1;
  }
`;

export const fadeInBottomRight = keyframes`
  10% {
      transform: translate(300px, 300px);
      visibility: hidden;
      opacity: 0;
  }
  50% {
      visibility: visible;
      opacity: 0;
  }
  100% {
     transform: translateX(0);
     visibility: visible;
     opacity: 1;
  }
`;

export const fadeInTopForButton = keyframes`
  0% {
      visibility: hidden;
      transform: translateY(-22px);
  }
  100% {
      visibility: visible;
      transform: translateY(0);
  }
`;

export const fadeInBottom = keyframes`
  0% {
      visibility: hidden;
      transform: translateY(200px);
  }
  100% {
      visibility: visible;
      transform: translateY(0);
  }
`;

export const scroll = keyframes`
  0% {
      transform: translateY(-50px);
      visibility: hidden;
      opacity: 0;
  }
  100% {
     transform: translateY(0);
     visibility: visible;
     opacity: 1;
  }
`;

const mobileWidth = '100vw';
const width = '30vw';
const mobileMinWidth = 'auto';
const minWidth = '370px';

export const expandSidebar = (isMobile: boolean | undefined) => keyframes`
  0% {
    min-width: 0;
    width: 0;
    animation-timing-function:  ${
      isMobile ? 'cubic-bezier(0.9, 0.1, 0.4, 0.1)' : 'ease-in'
    }
  }
  100% {
    min-width: ${isMobile ? mobileMinWidth : minWidth};
    width: ${isMobile ? mobileWidth : width};

  }
`;

export const collapseSidebar = (
  isMobile: boolean | undefined
) => keyframes`
  0% {
    min-width: ${isMobile ? mobileMinWidth : minWidth};
    width: ${isMobile ? mobileWidth : width};   
    animation-timing-function:  ${
      isMobile ? 'cubic-bezier(0.9, 0.1, 0.4, 0.1)' : 'ease-in'
    }
  }
  100% {
    width: 0;
    min-width: 0; 
    opacity: 0;
  }
`;
