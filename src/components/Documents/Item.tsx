import { Container, ElementPositionWrapper } from '@/components/_views/styledContainers';
import { SmallText, H4 } from '@/components/_views/styledTexts';
import { useAppTheme } from '@/utils/theme';
import PlusOnQuarter from '../_icons/PlusOnQuarter';
import styled from 'styled-components';

export default function Item({ name }: { name: string }) {
  const { borderRadius, colors } = useAppTheme();
  return (
    <Container
      mobileJustifyContent="center"
      mobileMinWidth="18rem"
      mobileWidth="100%"
      mobileMargin="1rem"
      width="25%"
      border={`1px solid ${colors.placeholder + '50'}`}
      borderRadius={borderRadius}
      relative
    >
      <Container mobilePadding="1rem" mobileJustifyContent="space-between" flex={1}>
        <Container mobileMargin="2rem 0">
          <H4>{name}</H4>
        </Container>
        <File filename="IMG_09.JPG" size="0.9MB" borderRadius={borderRadius} />
        <File filename="file.pdf" size="1MB" borderRadius={borderRadius} />
      </Container>
      <ElementPositionWrapper mobileRight="0" mobileBottom="0">
        <PlusOnQuarter />
      </ElementPositionWrapper>
    </Container>
  );
}

const Icon = styled.i`
  font-size: 1.5rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.accent};
  margin: 0.5rem;
`;

const File = ({
  filename,
  size,
  borderRadius,
}: {
  filename: string;
  size: string;
  borderRadius: string;
}) => {
  return (
    <Container
      mobileFlexDirection="row"
      backgroundGradient
      borderRadius={borderRadius}
      mobileWidth="100%"
      mobileJustifyContent="space-between"
      mobilePadding="1rem 2rem"
      mobileMargin="1rem 0"
    >
      <Container mobileAlignItems="space-between">
        <SmallText color="white">{filename}</SmallText>
        <SmallText color="white">{size}</SmallText>
      </Container>
      <Container mobileFlexDirection="row">
        <Icon className="fas fa-trash-alt" />
        <Icon className="fas fa-download" />
      </Container>
    </Container>
  );
};
