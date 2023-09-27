import { Container } from '@/components/views/styledContainers';
import { H4 } from '@/components/views/styledTexts';
import styled from 'styled-components';
import { useAppTheme } from '@/utils/theme';

export default function MenuItem({
  name,
  iconClassName,
  submenu,
}: {
  name: string;
  iconClassName: string;
  submenu?: boolean;
}) {
  const { colors } = useAppTheme();

  return (
    <MenuItemContainer>
      <Container
        mobileFlexDirection="row"
        mobileJustifyContent="flex-start"
      >
        <H4 color={colors.mainBackground}>{name}</H4>
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
    background-color: ${(props) => props.theme.colors.accent + '40'};
  }
`;

const Icon = styled.i<{ submenu?: boolean }>`
  font-size: 1.5rem;
  width: 1rem;
  color: white;
  ${(props) =>
    props.submenu ? 'margin-left: 2rem' : 'margin-right: 2rem'};
`;
