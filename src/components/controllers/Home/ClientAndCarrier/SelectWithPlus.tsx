import CustomSelect from '@/components/reusable/CustomSelect';
import { Container } from '@/components/views/styledContainers';

export default function SelectWithPlus({
  name,
  options,
  placeholder,
}: {
  name: string;
  options: string[];
  placeholder?: string;
}) {
  return (
    <Container
      mobileFlexDirection="row"
      alignItems="stretch"
      mobileWidth="100%"
    >
      <CustomSelect
        name={name}
        placeholder={placeholder}
        options={options}
        width="100%"
      />
      <Container mobilePadding="0 20px" cursor="pointer">
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <line
            x1="0"
            y1="10"
            x2="20"
            y2="10"
            stroke="gray"
            strokeWidth="3"
          />
          <line
            x1="10"
            y1="0"
            x2="10"
            y2="20"
            stroke="gray"
            strokeWidth="3"
          />
        </svg>
      </Container>
    </Container>
  );
}
