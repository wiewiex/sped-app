import { Container } from '@/components/views/styledContainers';
import { Text, H5, SmallText } from '@/components/views/styledTexts';
import { useAppTheme } from '@/utils/theme';
import styled from 'styled-components';
import Pin from '../_icons/Pin';

export default function Item({
  name,
  address,
  postCode,
  city,
  country,
  isUnload,
  blue,
  green,
}: {
  name: string;
  address: string;
  postCode: string;
  city: string;
  country: string;
  isUnload: boolean;
  blue: string;
  green: string;
}) {
  const { borderRadius } = useAppTheme();
  // const isEvenNumber = index % 2 === 0;
  return (
    <Container
      mobileJustifyContent="center"
      mobileMinWidth="18rem"
      mobileWidth="100%"
      mobileMargin="2rem"
      width="22rem"
      borderBottom={`2px solid ${isUnload ? blue : green}`}
      borderTop={`2px solid ${isUnload ? blue : green}`}
      borderRadius={borderRadius}
    >
      <Container
        mobilePadding="2rem"
        mobileAlignItems="flex-start"
        mobileJustifyContent="space-between"
        flex={1}
      >
        <Container mobileMargin="0 0 2rem 0" mobileAlignSelf="center">
          <Pin />
        </Container>
        <Container mobileMargin="0 0 0.5rem 0">
          <H5 color="#63666A">{name}</H5>
        </Container>
        <Text>{address}</Text>
        <Text>{postCode}</Text>
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
        <Icon className="fas fa-pencil-alt" />
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
