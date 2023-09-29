import { Text } from '@/components/views/styledTexts';
import Tile from '@/components/common/_elements/Tile';
import { H3 } from '@/components/views/styledTexts';
import { ElementPositionWrapper } from '@/components/views/styledContainers';
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
