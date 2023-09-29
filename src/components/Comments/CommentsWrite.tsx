import CustomTextArea from '@/components/_elements/CustomTextArea';
import Tile from '@/components/_elements/Tile';
import { H3 } from '@/components/_views/styledTexts';

export default function CommentsWrite() {
  return (
    <Tile mobileWidth="100%" mobileMinHeight="25rem">
      <H3>Uwagi</H3>
      <CustomTextArea />
    </Tile>
  );
}
