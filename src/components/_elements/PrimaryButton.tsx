import { H4 } from '@/components/_views/styledTexts';
import { useAppTheme } from '@/utils/theme';
import styled from 'styled-components';

export interface IPrimaryButton {
  text: string;
  url: string;
}

export default function PrimaryButton({
  text,
  width,
}: IPrimaryButton & { width?: string }) {
  const { colors } = useAppTheme();
  return (
    <PrimaryButtonContainer width={width}>
      <H4 color={colors.mainBackground}>{text}</H4>
    </PrimaryButtonContainer>
  );
}

const PrimaryButtonContainer = styled.button<{ width?: string }>`
  width: ${(props) => (props.width ? props.width : '25rem')};
  padding: 1rem 0;
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: 2px 2px 2px #00000010;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.accent};
  z-index: 2;
  border: none;
  &&:active {
    transform: scale(1.05);
    transition: 1s;
  }
`;
