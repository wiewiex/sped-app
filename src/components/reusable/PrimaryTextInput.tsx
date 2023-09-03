import { ChangeEventHandler } from 'react';
import { PrimaryTextInputContainer } from '@/components/views/styledContainers';
import { ValidationText } from '../views/styledTexts';
import { Container } from '../views/styledContainers';

interface IPrimaryTextInput {
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  Imagine?: string;
  error?: undefined | string | boolean;
  onBlur?: (e: any) => void;
}

const PrimaryTextInput = ({
  label,
  onChange,
  value,
  Imagine,
  error,
  onBlur,
}: IPrimaryTextInput) => {
  return (
    <Container relative mobileWidth="100%" mobileHeight="70px">
      {/* {Imagine && <TextInputIcon name={Imagine} size={15} />} */}
      <PrimaryTextInputContainer
        error={!!error}
        placeholder={label}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      <ValidationText>{error || ''}</ValidationText>
    </Container>
  );
};

export default PrimaryTextInput;
