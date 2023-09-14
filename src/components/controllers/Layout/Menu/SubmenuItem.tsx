import { Container } from '@/components/views/styledContainers';
import { Text } from '@/components/views/styledTexts';
import styled from 'styled-components';

export default function SubmenuItem({
  name,
  iconClassName,
}: {
  name: string;
  iconClassName: string;
}) {
  return (
    <Container
      mobileWidth="80%"
      mobileAlignSelf="flex-end"
      mobileJustifyContent="flex-start"
      mobileFlexDirection="row"
      cursor="pointer"
      mobilePadding="1rem 0"
    >
      <Icon className={iconClassName} />
      <Text color="white">{name}</Text>
    </Container>
  );
}

const Icon = styled.i<{ submenu?: boolean }>`
  color: white;
  font-size: 1rem;
  width: 1rem;
  margin-right: 1rem;
`;
