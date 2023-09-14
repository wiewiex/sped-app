import CustomTextArea from '@/components/reusable/CustomTextArea';
import Tile from '@/components/reusable/Tile';
import { H3 } from '@/components/views/styledTexts';

export default function Comments() {
  return (
    <Tile mobileWidth="100%" mobileMinHeight="25rem">
      <H3>Uwagi</H3>
      <CustomTextArea />
    </Tile>
  );
}
