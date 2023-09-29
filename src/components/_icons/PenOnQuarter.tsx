import styled from 'styled-components';
import { Container } from '@/components/_views/styledContainers';

export default function PenOnQuarter() {
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
        <i className="fas fa-pencil-alt"></i>
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

  i {
    font-size: 2rem;
    color: white;
  }
`;
