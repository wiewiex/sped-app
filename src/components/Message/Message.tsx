import PrimaryButton from '../_elements/PrimaryButton';
import CustomTextArea from '../_elements/CustomTextArea';
import { Container, ElementPositionWrapper } from '../_views/styledContainers';
import { SmallText } from '../_views/styledTexts';

export default function Message() {
  return (
    <Container relative mobileWidth="100%">
      <CustomTextArea padding="3rem 0 0 1rem" />
      <PrimaryButton text="Wyślij" url="/" width="100%" />
      <ElementPositionWrapper mobileLeft="1rem" mobileTop="1rem">
        <SmallText>Wiadomość</SmallText>
      </ElementPositionWrapper>
    </Container>
  );
}
