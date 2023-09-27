import { useAppTheme } from '@/utils/theme';
import {
  Container,
  ElementPositionWrapper,
} from '../views/styledContainers';
import styled from 'styled-components';
import { Text } from '../views/styledTexts';
import { useRef, useState } from 'react';

export default function ToggleButton({
  offText,
  onText,
}: {
  offText: string;
  onText: string;
}) {
  const { colors, borderRadius } = useAppTheme();
  const checkboxId = `toggle-button_${offText}_${onText}`;
  const width = 25;
  const [checked, setChecked] = useState(false);

  return (
    <Container
      border={`1px solid ${colors.navBackground}`}
      borderRadius={borderRadius}
      mobileWidth={width + 'rem'}
      mobileHeight="5rem"
      relative
    >
      <ToggleButtonContainer htmlFor={checkboxId} width={width}>
        <Container
          mobileWidth="100%"
          mobileFlexDirection="row"
          mobileJustifyContent="space-around"
          zIndex={2}
          cursor="pointer"
        >
          <Text color={checked ? 'black' : 'white'}>{offText}</Text>
          <Text color={!checked ? 'black' : 'white'}>{onText}</Text>
        </Container>
        <input
          onChange={() => setChecked((prev) => !prev)}
          id={checkboxId}
          type="checkbox"
        />
        <ElementPositionWrapper
          mobileTop="0.2rem"
          mobileBottom="0.2rem"
          mobileLeft="0.2rem"
          mobileRight="0.2rem"
          zIndex={1}
        >
          <Container
            backgroundColor={colors.navBackground}
            mobileWidth={width / 2 + 'rem'}
            flex={1}
            borderRadius={borderRadius}
            className="marker"
          />
        </ElementPositionWrapper>
      </ToggleButtonContainer>
    </Container>
  );
}

const ToggleButtonContainer = styled.label<{ width: number }>`
  display: flex;
  width: 100%;
  flex: 1;

  input {
    display: none;
  }

  .marker {
    transition: 0.5s;
  }

  input:checked + div .marker {
    transform: translateX(${(props) => props.width / 2 - 0.5 + 'rem'});
    transition: 0.8s;
  }
`;
