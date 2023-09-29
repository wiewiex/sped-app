import { Text } from '@/components/_views/styledTexts';
import Tile from '@/components/_elements/Tile';
import { H3 } from '@/components/_views/styledTexts';
import { ElementPositionWrapper } from '@/components/_views/styledContainers';
import PenOnQuarter from '../_icons/PenOnQuarter';

export default function CommentsRead() {
  return (
    <Tile mobileWidth="100%" mobileMinHeight="25rem">
      <H3>Uwagi</H3>
      <Text>Brak</Text>
      <ElementPositionWrapper mobileRight="0" mobileBottom="0">
        <PenOnQuarter />
      </ElementPositionWrapper>
    </Tile>
  );
}
