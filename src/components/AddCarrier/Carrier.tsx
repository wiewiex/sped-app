import { Container } from '../_views/styledContainers';
import { Text, H2, SmallText } from '../_views/styledTexts';
import Switcher from '../_elements/Switcher';
import CustomSelect from '../_elements/CustomSelect';
import PrimaryTextInput from '../_elements/PrimaryTextInput';
import { ICarrier } from './handlers';
import { IFormUtils } from './AddCarrier';

export default function Carrier({
  address,
  city,
  country,
  name,
  email,
  nip,
  phone,
  postCode,
  vat,
  handleBlur,
  handleChange,
  touched,
  errors,
}: ICarrier & IFormUtils) {
  return (
    <Container flex={1} mobileWidth="100%" mobileJustifyContent="space-between">
      <Container mobileMargin="0 0 2rem 0">
        <Text>Dane przewoźnika</Text>
      </Container>
      <PrimaryTextInput
        label="Nazwa"
        onChange={handleChange('name')}
        onBlur={handleBlur('name')}
        value={name}
        error={touched.name && errors.name}
      />
      <PrimaryTextInput
        label="Adres"
        onChange={handleChange('address')}
        onBlur={handleBlur('address')}
        value={address}
        error={touched.address && errors.address}
      />
      <Container mobileWidth="100%" flexDirection="row" justifyContent="space-between">
        <Container width="47%" mobileWidth="100%">
          <PrimaryTextInput
            label="Kod pocztowy"
            onChange={handleChange('postCode')}
            onBlur={handleBlur('postCode')}
            value={postCode}
            error={touched.postCode && errors.postCode}
          />
        </Container>
        <Container width="47%" mobileWidth="100%">
          <PrimaryTextInput
            label="Miasto"
            onChange={handleChange('city')}
            onBlur={handleBlur('city')}
            value={city}
            error={touched.city && errors.city}
          />
        </Container>
      </Container>
      <Container
        mobileWidth="100%"
        mobileFlexDirection="row"
        justifyContent="space-between"
      >
        <Container mobileWidth="47%">
          <CustomSelect placeholder="Wybierz kraj" options={['test1', 'test2']} />
        </Container>
        <Container mobileFlexDirection="row" mobileWidth="47%">
          <H2 style={{ fontSize: '3rem' }}>VAT</H2>
          <Switcher checked={true} handleChange={() => {}} />
        </Container>
      </Container>
      <PrimaryTextInput
        label="NIP"
        onChange={handleChange('nip')}
        onBlur={handleBlur('nip')}
        value={nip}
        error={touched.nip && errors.nip}
      />
      <PrimaryTextInput
        label="Telefon"
        onChange={handleChange('phone')}
        onBlur={handleBlur('phone')}
        value={phone}
        error={touched.phone && errors.phone}
      />
      <PrimaryTextInput
        label="Email"
        onChange={handleChange('email')}
        onBlur={handleBlur('email')}
        value={email}
        error={touched.email && errors.email}
      />
      <Container mobileWidth="100%" flexDirection="row" justifyContent="space-between">
        <Container
          mobileFlexDirection="row"
          width="47%"
          mobileWidth="100%"
          justifyContent="flex-start"
          mobileJustifyContent="space-between"
        >
          <SmallText>KOMUNIKACJA EMAIL</SmallText>
          <Switcher checked={true} handleChange={() => {}} />
        </Container>
        <Container
          mobileFlexDirection="row"
          width="47%"
          mobileWidth="100%"
          justifyContent="flex-end"
          mobileJustifyContent="space-between"
        >
          <SmallText>KOMUNIKACJA KLASYCZNA</SmallText>
          <Switcher checked={true} handleChange={() => {}} />
        </Container>
      </Container>
    </Container>
  );
}
