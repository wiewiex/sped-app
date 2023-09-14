import { H4 } from '../views/styledTexts';
import { useAppTheme } from '@/utils/theme';
import styled from 'styled-components';

export default function PrimaryButton({ text }: IPrimaryButton) {
  const { colors } = useAppTheme();
  return (
    <PrimaryButtonContainer>
      <H4 color={colors.mainBackground}>{text}</H4>
    </PrimaryButtonContainer>
  );
}

export interface IPrimaryButton {
  text: string;
  url: string;
}

const PrimaryButtonContainer = styled.button`
  width: 15rem;
  padding: 1rem 0;
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: 2px 2px 2px #00000010;
  cursor: pointer;
  background-image: ${(props) => props.theme.backgroundGradient};
  z-index: 2;
  &&:active {
    transform: scale(1.2);
    transition: 1s;
  }
`;
