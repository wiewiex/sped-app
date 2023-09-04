import styled from 'styled-components';
import { useAppTheme } from '@/utils/theme';
import { Container } from '../views/styledContainers';
import { H5 } from '../views/styledTexts';
import ReactLoading from 'react-loading';
import { useState } from 'react';

const SecondaryButton = ({
  disabled,
  handler,
  text,
  type = 'button',
  hideSpinner,
  loaded,
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
          <H5
            textAlign="center"
            color={colors.mainBackground}
            style={{ cursor: 'pointer' }}
          >
            {text.toUpperCase()}
          </H5>
        )}
      </Container>
    </SecondaryButtonContainer>
  );
};

interface ISecondaryButton {
  disabled?: boolean;
  handler?: () => void;
  text: string;
  type?: 'button' | 'submit';
  loaded?: boolean;
  hideSpinner?: boolean;
}

export const SecondaryButtonContainer = styled.button`
  background-color: ${(props) =>
    props.disabled ? '#cec9c9' : props.theme.colors.accent};
  height: 50px;
  width: 100%;
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  cursor: pointer;

  &&:active {
    transition: 0.2s;
    box-shadow: inset 0 0 10px 10px rgba(255, 255, 255, 0.3);
  }
`;

export default SecondaryButton;
