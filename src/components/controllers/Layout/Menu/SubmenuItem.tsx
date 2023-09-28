import { Text } from '@/components/views/styledTexts';
import { useRouter } from 'next/router';
import styled from 'styled-components';

export default function SubmenuItem({
  name,
  iconClassName,
  href,
}: {
  name: string;
  iconClassName: string;
  href?: string;
}) {
  const router = useRouter();
  return (
    <SubmenuItemContainer
      onClick={
        href
          ? () => router.push(href)
          : () => {
              console.log('submenu item clicked');
            }
      }
    >
      <Icon className={iconClassName} />
      <Text color="white">{name}</Text>
    </SubmenuItemContainer>
  );
}

const SubmenuItemContainer = styled.div`
  display: flex;
  width: 85%;
  flex-direction: row;
  cursor: pointer;
  padding: 1rem;

  &&:hover {
    background-color: ${(props) => props.theme.colors.accent + '40'};
  }
`;

const Icon = styled.i<{ submenu?: boolean }>`
  display: flex;
  align-items: center;
  color: white;
  font-size: 1rem;
  width: 1rem;
  margin-right: 1rem;
`;
