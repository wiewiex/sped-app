import { Container, ElementPositionWrapper } from '../_views/styledContainers';
import AdditionalPersonBox from './AdditionalPersonBox';
import { Text } from '../_views/styledTexts';
import PrimaryTextInput from '../_elements/PrimaryTextInput';
import { IFormUtils } from './AddCarrier';
import { IContactPerson } from './handlers';

export default function ContactPerson({
  contactPersonEmail,
  contactPersonFullName,
  contactPersonPhone,
  errors,
  handleBlur,
  handleChange,
  touched,
}: IContactPerson & IFormUtils) {
  return (
    <Container mobileWidth="100%" relative>
      <ElementPositionWrapper mobileLeft="0" mobileTop="0">
        <AdditionalPersonBox />
      </ElementPositionWrapper>
      <Container mobileMargin="5rem 0 " margin="0 0 2rem 0">
        <Text>Dane osoby kontaktowej</Text>
      </Container>
      <PrimaryTextInput
        label="Imię i nazwisko"
        onChange={handleChange('contactPersonFullName')}
        onBlur={handleBlur('contactPersonFullName')}
        value={contactPersonFullName}
        error={touched.contactPersonFullName && errors.contactPersonFullName}
      />
      <PrimaryTextInput
        label="Telefon"
        onChange={handleChange('contactPersonPhone')}
        onBlur={handleBlur('contactPersonPhone')}
        value={contactPersonPhone}
        error={touched.contactPersonPhone && errors.contactPersonPhone}
      />
      <PrimaryTextInput
        label="Email"
        onChange={handleChange('contactPersonEmail')}
        onBlur={handleBlur('contactPersonEmail')}
        value={contactPersonEmail}
        error={touched.contactPersonEmail && errors.contactPersonEmail}
      />
    </Container>
  );
}
