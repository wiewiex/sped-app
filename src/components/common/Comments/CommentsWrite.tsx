import CustomTextArea from '@/components/common/_elements/CustomTextArea';
import Tile from '@/components/common/_elements/Tile';
import { H3 } from '@/components/views/styledTexts';

export default function CommentsWrite() {
  return (
    <Tile mobileWidth="100%" mobileMinHeight="25rem">
      <H3>Uwagi</H3>
      <CustomTextArea />
    </Tile>
  );
}
