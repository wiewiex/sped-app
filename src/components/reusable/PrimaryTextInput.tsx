import { ChangeEventHandler } from 'react';
import {
  ElementPositionWrapper,
  PrimaryTextInputContainer,
} from '@/components/views/styledContainers';
import { SmallText, ValidationText } from '../views/styledTexts';
import { Container } from '../views/styledContainers';

interface IPrimaryTextInput {
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  error?: undefined | string | boolean;
  onBlur?: (e: any) => void;
}

const PrimaryTextInput = ({
  label,
  onChange,
  value,
  error,
  onBlur,
}: IPrimaryTextInput) => {
  return (
    <Container relative mobileWidth="100%" mobileHeight="70px">
      {label && (
        <ElementPositionWrapper mobileTop="0" mobileLeft="1px">
          <SmallText>{label}</SmallText>
        </ElementPositionWrapper>
      )}
      <PrimaryTextInputContainer
        error={!!error}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      <ValidationText>{error || ''}</ValidationText>
    </Container>
  );
};

export default PrimaryTextInput;
