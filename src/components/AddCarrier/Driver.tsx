import { Container, ElementPositionWrapper } from '../_views/styledContainers';
import AdditionalPersonBox from './AdditionalPersonBox';
import { Text } from '../_views/styledTexts';
import PrimaryTextInput from '../_elements/PrimaryTextInput';
import { IDriver } from './handlers';
import { IFormUtils } from './AddCarrier';

export default function Driver({
  driverFullName,
  driverLicenseNumber,
  driverPhone,
  driverRegistrationNumber,
  errors,
  handleBlur,
  handleChange,
  touched,
}: IDriver & IFormUtils) {
  return (
    <Container mobileWidth="100%" relative>
      <ElementPositionWrapper mobileLeft="0" mobileTop="0">
        <AdditionalPersonBox />
      </ElementPositionWrapper>
      <Container mobileMargin="0 0 2rem 0">
        <Text>Dane kierowcy</Text>
      </Container>
      <PrimaryTextInput
        label="Imię i nazwisko"
        onChange={handleChange('driverFullName')}
        onBlur={handleBlur('driverFullName')}
        value={driverFullName}
        error={touched.driverFullName && errors.driverFullName}
      />
      <PrimaryTextInput
        label="Telefon"
        onChange={handleChange('driverPhone')}
        onBlur={handleBlur('driverPhone')}
        value={driverPhone}
        error={touched.driverPhone && errors.driverPhone}
      />

      <PrimaryTextInput
        label="Numer rejestracyjny"
        onChange={handleChange('driverRegistrationNumber')}
        onBlur={handleBlur('driverRegistrationNumber')}
        value={driverRegistrationNumber}
        error={touched.driverRegistrationNumber && errors.driverRegistrationNumber}
      />
      <PrimaryTextInput
        label="Numer rejestracyjny"
        onChange={handleChange('driverLicenseNumber')}
        onBlur={handleBlur('driverLicenseNumber')}
        value={driverLicenseNumber}
        error={touched.driverLicenseNumber && errors.driverLicenseNumber}
      />
    </Container>
  );
}
