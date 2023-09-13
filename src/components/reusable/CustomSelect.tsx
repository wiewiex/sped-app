import styled from 'styled-components';
import { ChangeEvent } from 'react';
import Form from 'react-bootstrap/Form';
import { useAppTheme } from '@/utils/theme';

export default function CustomSelect({
  options,
  placeholder,
  width,
  onChange,
}: {
  options: string[];
  placeholder?: string;
  width?: string;
  onChange?: (e: ChangeEvent<any>) => void;
}) {
  return (
    <CustomSelectContainer width={width}>
      {placeholder && (
        <option value="" hidden>
          {placeholder}
        </option>
      )}
      {options.map((el, i) => (
        <option key={i} value={el}>
          {el}
        </option>
      ))}
    </CustomSelectContainer>
  );
}

const CustomSelectContainer = styled(Form.Select)<{ width?: string }>`
  width: ${(props) => (props.width ? props.width : '100%')};
  padding-top: 1rem;
  padding-bottom: 1rem;
  border: 1px solid ${(props) => props.theme.colors.placeholder + '50'};
  font-size: 1%.5;
`;
