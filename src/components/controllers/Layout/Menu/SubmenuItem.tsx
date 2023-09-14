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
    <SubmenuItemContainer>
      <Icon className={iconClassName} />
      <Text color="white">{name}</Text>
    </SubmenuItemContainer>
  );
}

const SubmenuItemContainer = styled.div`
  display: flex;
  width: 80%;
  align-self: flex-end;
  justify-content: flex-start;
  flex-direction: row;
  cursor: pointer;
  padding: 1rem;
  &&:hover {
    background-color: ${(props) => props.theme.colors.accent};
  }
`;

const Icon = styled.i<{ submenu?: boolean }>`
  color: white;
  font-size: 1rem;
  width: 1rem;
  margin-right: 1rem;
`;
