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
    <MenuItemContainer>
      <Container
        mobileFlexDirection="row"
        mobileJustifyContent="flex-start"
      >
        <Icon className={iconClassName} />
        <H4 color="white">{name}</H4>
      </Container>
      {submenu && <Icon submenu className="fas fa-angle-up" />}
    </MenuItemContainer>
  );
}

const MenuItemContainer = styled.div`
  display: flex;
  padding: 2rem;
  width: 100%;
  cursor: pointer;
  flex-direction: row;
  justify-content: space-between;

  &&:hover {
    background-color: ${(props) => props.theme.colors.accent};
  }
`;

const Icon = styled.i<{ submenu?: boolean }>`
  color: white;
  font-size: 2rem;
  width: 2rem;
  ${(props) =>
    props.submenu ? 'margin-left: 2rem' : 'margin-right: 2rem'};
`;
