import styled from 'styled-components';
import { Container } from '@/components/views/styledContainers';

export default function PlusOnQuarter() {
  return (
    <PlusContainer>
      <Container
        mobileWidth="7rem"
        mobileHeight="7rem"
        backgroundGradient
        style={{ borderTopLeftRadius: '100%' }}
        mobileAlignItems="flex-end"
        mobileJustifyContent="flex-end"
        mobilePadding="2rem"
        cursor="pointer"
      >
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <line
            x1="0"
            y1="10"
            x2="20"
            y2="10"
            stroke="white"
            strokeWidth="3"
          />
          <line
            x1="10"
            y1="0"
            x2="10"
            y2="20"
            stroke="white"
            strokeWidth="3"
          />
        </svg>
      </Container>
    </PlusContainer>
  );
}

const PlusContainer = styled.div`
  z-index: 2;
  &&:active {
    transform: scale(1.2);
    transition: 1s;
  }
`;
