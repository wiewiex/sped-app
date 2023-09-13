import { Container } from '@/components/views/styledContainers';
import { Text, H5 } from '@/components/views/styledTexts';
import { useAppTheme } from '@/utils/theme';
import Pin from './Pin';

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
      mobileMinWidth="30rem"
      mobileMargin="2rem 0"
    >
      <Container
        borderBottom={`2px solid ${isUnload ? blue : green}`}
        borderTop={`2px solid ${isUnload ? blue : green}`}
        mobilePadding="2rem"
        mobileAlignItems="flex-start"
        borderRadius={borderRadius}
      >
        <Container mobileMargin="0 0 2rem 0" alignSelf="center">
          <Pin />
        </Container>
        <Container mobileMargin="0 0 0.5rem 0">
          <H5 color="#63666A">{name}</H5>
        </Container>
        <Text>{address}</Text>
        <Text>{postCode}</Text>
        <Text>{city}</Text>
        <Text>{country}</Text>
      </Container>
    </Container>
  );
}
