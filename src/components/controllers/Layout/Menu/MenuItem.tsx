import { Container } from '@/components/views/styledContainers';
import { H4 } from '@/components/views/styledTexts';
import styled from 'styled-components';

export default function MenuItem({
  name,
  iconClassName,
}: {
  name: string;
  iconClassName: string;
}) {
  return (
    <Container
      mobilePadding="2rem"
      borderTop="1px solid white"
      mobileWidth="100%"
      cursor="pointer"
      mobileFlexDirection="row"
      mobileJustifyContent="flex-start"
    >
      <Icon className={iconClassName} />
      <H4 color="white">{name}</H4>
    </Container>
  );
}

const Icon = styled.i`
  color: white;
  font-size: 2rem;
  width: 2rem;
  margin-right: 2rem;
`;
