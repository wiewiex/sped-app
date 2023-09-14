import { Container } from '@/components/views/styledContainers';
import { H4 } from '@/components/views/styledTexts';
import styled from 'styled-components';

export default function MenuItem({
  name,
  iconClassName,
  submenu,
}: {
  name: string;
  iconClassName: string;
  submenu?: boolean;
}) {
  return (
    <Container
      mobilePadding="2rem"
      mobileWidth="100%"
      cursor="pointer"
      mobileFlexDirection="row"
      mobileJustifyContent="space-between"
    >
      <Container
        mobileFlexDirection="row"
        mobileJustifyContent="flex-start"
      >
        <Icon className={iconClassName} />
        <H4 color="white">{name}</H4>
      </Container>
      {submenu && <Icon submenu className="fas fa-angle-up" />}
    </Container>
  );
}

const Icon = styled.i<{ submenu?: boolean }>`
  color: white;
  font-size: 2rem;
  width: 2rem;
  ${(props) =>
    props.submenu ? 'margin-left: 2rem' : 'margin-right: 2rem'};
`;
