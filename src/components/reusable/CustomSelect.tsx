import Select from 'react-select';
import styled from 'styled-components';

export default function CustomSelect({
  options,
  placeholder,
  width,
}: {
  options: string[];
  placeholder?: string;
  width?: string;
}) {
  const convertedOptions = options.map((el) => ({ value: el, label: el }));

  const customStyles = {
    control: (provided: any) => ({
      ...provided,

      boxShadow: '2px 2px 2px #00000010',
      cursor: 'pointer',
      border: `1px solid #ADA4A520`,
    }),
  };

  return (
    <CustomSelectContainer width={width}>
      <Select
        options={convertedOptions}
        styles={customStyles}
        placeholder={placeholder}
        defaultValue={!placeholder && convertedOptions[0]}
      />
    </CustomSelectContainer>
  );
}

const CustomSelectContainer = styled.div<{ width?: string }>`
  width: ${(props) => (props.width ? props.width : '100%')};
`;
