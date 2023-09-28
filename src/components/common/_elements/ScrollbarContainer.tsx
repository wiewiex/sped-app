import styled from 'styled-components';

const ScrollbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  z-index: 1;

  > div::-webkit-scrollbar {
    width: 2rem;
    height: 1rem;
  }

  > div::-webkit-scrollbar-track {
  }

  > div::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 10px;
    background-image: ${(props) => props.theme.backgroundGradient};
  }
`;

export default ScrollbarContainer;
