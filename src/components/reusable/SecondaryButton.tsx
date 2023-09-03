import { useAppTheme } from '@/utils/theme';
import {
  Container,
  SecondaryButtonContainer,
} from '../views/styledContainers';
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
}

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

export default SecondaryButton;
