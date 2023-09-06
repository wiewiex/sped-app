import styled from 'styled-components';
import { useAppTheme } from '@/utils/theme';
import { Container } from '../views/styledContainers';
import { H5 } from '../views/styledTexts';
import ReactLoading from 'react-loading';
import { useState } from 'react';

interface ISecondaryButton {
  disabled?: boolean;
  handler?: () => void;
  text: string;
  type?: 'button' | 'submit';
  loaded?: boolean;
  hideSpinner?: boolean;
  width?: string;
}

const SecondaryButton = ({
  disabled,
  handler,
  text,
  type = 'button',
  hideSpinner,
  loaded,
  width,
}: ISecondaryButton) => {
  const { colors } = useAppTheme();
  const [loadingState, setLoadingState] = useState<boolean>(false);
  const loading =
    loaded === undefined || loaded === false ? loadingState : false;

  return (
    <SecondaryButtonContainer
      onClick={() => {
        setLoadingState(true);
        handler && handler();
      }}
      disabled={disabled}
      type={type}
      width={width}
    >
      <Container>
        {!hideSpinner && loading ? (
          <ReactLoading
            type="spin"
            color={colors.mainBackground}
            height="20px"
            width="20px"
          />
        ) : (
          <H5 textAlign="center" style={{ cursor: 'pointer' }}>
            {text.toUpperCase()}
          </H5>
        )}
      </Container>
    </SecondaryButtonContainer>
  );
};

export const SecondaryButtonContainer = styled.button<{ width?: string }>`
  background-color: ${(props) =>
    props.disabled ? '#cec9c9' : props.theme.colors.mainBackground};
  height: 50px;
  width: ${(props) => (props.width ? props.width : '15rem')};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  cursor: pointer;
  border: 1px solid #00000020;
  box-shadow: 2px 2px 2px #00000020;

  &&:active {
    transition: 0.2s;
    box-shadow: inset 0 0 10px 10px rgba(255, 255, 255, 0.3);
  }
`;

export default SecondaryButton;
