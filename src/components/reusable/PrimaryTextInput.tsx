import styled from 'styled-components';
import { ChangeEventHandler } from 'react';
import { ElementPositionWrapper } from '@/components/views/styledContainers';
import { SmallText, ValidationText } from '../views/styledTexts';
import { Container } from '../views/styledContainers';

interface IPrimaryTextInput {
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  error?: undefined | string | boolean;
  onBlur?: (e: any) => void;
  type?: 'text' | 'number';
}

const PrimaryTextInput = ({
  label,
  onChange,
  value,
  error,
  onBlur,
  type = 'text',
}: IPrimaryTextInput) => {
  return (
    <Container relative mobileWidth="100%" mobileHeight="70px">
      {label && (
        <ElementPositionWrapper mobileTop="2px" mobileLeft="2px">
          <SmallText>{label}</SmallText>
        </ElementPositionWrapper>
      )}
      <PrimaryTextInputContainer
        error={!!error}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        type={type}
      />
      <ValidationText>{error || ''}</ValidationText>
    </Container>
  );
};

export const PrimaryTextInputContainer = styled.input<{ error: boolean }>`
  padding: 2rem 0 1rem 0.5rem;
  border: none;
  border-bottom: 1px solid
    ${(props) =>
      props.error ? props.theme.colors.error : props.theme.colors.text};
  font-weight: 400;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.text};
  width: 100%;
  background-color: transparent;

  &&::-webkit-inner-spin-button {
    appearance: none;
  }
`;

export default PrimaryTextInput;
