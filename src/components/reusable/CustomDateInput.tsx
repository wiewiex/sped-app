import styled from 'styled-components';
import { SmallText } from '../views/styledTexts';
import { Container } from '../views/styledContainers';

export default function CustomDateInput({ text }: { text: string }) {
  return (
    <CustomDateInputContainer>
      <SmallText>{text}</SmallText>
      <input type="datetime-local" />
    </CustomDateInputContainer>
  );
}

const CustomDateInputContainer = styled.div`
  width: 100%;
  input {
    padding: 1rem;
    box-shadow: 2px 2px 2px #00000010;
    cursor: pointer;
    border: 1px solid #ada4a520;
    font-family: Montserrat;
    width: 100%;
    margin-top: 1rem;
  }
`;
