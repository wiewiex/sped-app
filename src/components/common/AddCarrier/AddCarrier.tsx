import { Formik } from 'formik';
import { Container } from '@/components/views/styledContainers';
import PrimaryTextInput from '@/components/common/_elements/PrimaryTextInput';
import SecondaryButton from '@/components/common/_elements/SecondaryButton';
import { H2, H4, Text, H5, H6, SmallText } from '@/components/views/styledTexts';
import Switcher from '@/components/common/_elements/Switcher';
import { initialValues, validationSchema } from './handlers';
import CustomSelect from '@/components/common/_elements/CustomSelect';
import Modal from '../Modal';

export default function AddCarrierModal({ closeModal }: { closeModal: () => void }) {
  return (
    <Modal closeModal={closeModal}>
      <AddCarrier />
    </Modal>
  );
}

export function AddCarrier() {
  return (
    <Container
      mobileWidth="90vw"
      width="60vw"
      minHeight="75rem"
      minWidth="85rem"
      mobileMinHeight="150rem"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setValues,
        }) => {
          const {
            name,
            address,
            postCode,
            city,
            country,
            email,
            nip,
            phone,
            contactPersonFullName,
            contactPersonPhone,
            contactPersonEmail,
            driverFullName,
            driverPhone,
            driverRegistrationNumber,
            driverLicenseNumber,
          } = values;

          return (
            <Container flex={1} mobileWidth="100%">
              <H4>Dodaj przewoźnika</H4>
              <Container
                id="add-address-form"
                flex={1}
                mobileWidth="100%"
                flexDirection="row"
                alignItems="stretch"
                mobileJustifyContent="space-between"
                mobileMargin="5rem 0 3rem 0"
              >
                <Container width="50%" mobileWidth="100%" padding="0 5rem" flex={1}>
                  <Container
                    flex={1}
                    mobileWidth="100%"
                    mobileJustifyContent="space-between"
                  >
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
                    <Container
                      mobileWidth="100%"
                      flexDirection="row"
                      justifyContent="space-between"
                    >
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
                        <CustomSelect
                          placeholder="Wybierz kraj"
                          options={['test1', 'test2']}
                        />
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
                    <Container
                      mobileWidth="100%"
                      flexDirection="row"
                      justifyContent="space-between"
                    >
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
                </Container>
                <Container
                  width="50%"
                  flex={1}
                  mobileWidth="100%"
                  padding="0 5rem"
                  mobileJustifyContent="space-between"
                >
                  <Container mobileWidth="100%">
                    <Container mobileMargin="5rem 0 " margin="0 0 2rem 0">
                      <Text>Dane osoby kontaktowej</Text>
                    </Container>
                    <PrimaryTextInput
                      label="Imię i nazwisko"
                      onChange={handleChange('contactPersonFullName')}
                      onBlur={handleBlur('contactPersonFullName')}
                      value={contactPersonFullName}
                      error={
                        touched.contactPersonFullName && errors.contactPersonFullName
                      }
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
                  <Container mobileWidth="100%">
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
                      error={
                        touched.driverRegistrationNumber &&
                        errors.driverRegistrationNumber
                      }
                    />
                    <PrimaryTextInput
                      label="Numer rejestracyjny"
                      onChange={handleChange('driverLicenseNumber')}
                      onBlur={handleBlur('driverLicenseNumber')}
                      value={driverLicenseNumber}
                      error={touched.driverLicenseNumber && errors.driverLicenseNumber}
                    />
                  </Container>
                  <Container alignSelf="flex-end" mobileFlexDirection="row">
                    <Container mobileMargin="0 2rem">
                      <SecondaryButton text="Wyczyść" />
                    </Container>
                    <SecondaryButton text="Zapisz" />
                  </Container>
                </Container>
              </Container>
            </Container>
          );
        }}
      </Formik>
    </Container>
  );
}
