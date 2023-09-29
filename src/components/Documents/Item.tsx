import { Container } from '@/components/_views/styledContainers';
import { Text, SmallText, H4 } from '@/components/_views/styledTexts';
import { useAppTheme } from '@/utils/theme';
import styled from 'styled-components';

export default function Item({
  name,
  address,
  postCode,
  city,
}: {
  name: string;
  address: string;
  postCode: string;
  city: string;
}) {
  const { borderRadius, colors } = useAppTheme();
  return (
    <Container
      mobileJustifyContent="center"
      mobileMinWidth="18rem"
      mobileWidth="100%"
      mobileMargin="2rem"
      width="22rem"
    >
      <Container mobilePadding="1rem" mobileJustifyContent="space-between" flex={1}>
        <H4>{name}</H4>
        <Container
          backgroundGradient
          borderRadius={borderRadius}
          mobileWidth="100%"
          mobilePadding="1rem"
          mobileMargin="0 0 1rem 0"
          mobileAlignItems="space-between"
        >
          <Text color="white">{address}</Text>
          <Text color="white">{postCode}</Text>
        </Container>

        <Text>{city}</Text>
        <Container
          mobileMargin="0.5rem 0"
          mobileWidth="100%"
          mobileAlignItems="flex-start"
        >
          <Text>Od: 11.09.2023 8:00</Text>
          <Text>Do: 15.09.2023 16:00</Text>
        </Container>
        <SmallText>GPS: </SmallText>
        <SmallText>Info:</SmallText>
      </Container>
      <Container
        mobileHeight="2rem"
        mobileWidth="100%"
        mobileFlexDirection="row"
        mobileMargin="0 0 1rem 0"
      >
        <Icon className="fas fa-trash-alt" />
        <Icon className="fas fa-download" />
      </Container>
    </Container>
  );
}

const Icon = styled.i`
  font-size: 1.5rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.accent};
  margin: 2rem;
`;
