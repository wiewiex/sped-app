import styled from 'styled-components';

export default function CustomTextArea() {
  return (
    <CustomTextAreaContainer>
      <textarea />
    </CustomTextAreaContainer>
  );
}

const CustomTextAreaContainer = styled.div`
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
    padding: 1rem;
  }
`;
