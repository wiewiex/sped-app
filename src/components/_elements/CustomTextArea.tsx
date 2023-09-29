import styled from 'styled-components';

interface IProps {
  padding?: string;
}

export default function CustomTextArea({ padding }: IProps) {
  return (
    <CustomTextAreaContainer padding={padding}>
      <textarea />
    </CustomTextAreaContainer>
  );
}

const CustomTextAreaContainer = styled.div<IProps>`
  border: 1px solid #ada4a540;
  width: 100%;
  height: 10rem;
  border-radius: ${(props) => props.theme.borderRadius};

  textarea {
    border: none;
    width: 100%;
    height: 100%;
    resize: none;
    border-radius: ${(props) => props.theme.borderRadius};
    padding: ${(props) => (props.padding ? props.padding : '1rem')};
  }
`;
