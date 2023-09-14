import CustomTextArea from '@/components/reusable/CustomTextArea';
import Tile from '@/components/reusable/Tile';
import { H3 } from '@/components/views/styledTexts';

export default function Comments() {
  return (
    <Tile
      mobileWidth="100%"
      minHeight="23rem"
      padding="2rem 0.5rem 0 0.5rem"
    >
      <H3>Uwagi</H3>
      <CustomTextArea />
    </Tile>
  );
}
