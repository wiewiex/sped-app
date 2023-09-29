import { Formik } from 'formik';
import { Container } from '@/components/_views/styledContainers';
import SecondaryButton from '@/components/_elements/SecondaryButton';
import { H4 } from '@/components/_views/styledTexts';
import { initialValues, validationSchema } from './handlers';
import Modal from '../Modal';
import Carrier from './Carrier';
import ContactPerson from './ContactPerson';
import Driver from './Driver';

export default function AddCarrierModal({ closeModal }: { closeModal: () => void }) {
  return (
    <Modal closeModal={closeModal}>
      <AddCarrier />
    </Modal>
  );
}
export interface IFormUtils {
  errors: any;
  touched: any;
  handleChange: any;
  handleBlur: any;
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
                  <Carrier
                    address={address}
                    city={city}
                    country={country}
                    email={email}
                    name={name}
                    nip={nip}
                    phone={phone}
                    postCode={postCode}
                    touched={touched}
                    errors={errors}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                  />
                </Container>
                <Container
                  width="50%"
                  flex={1}
                  mobileWidth="100%"
                  padding="0 5rem"
                  mobileJustifyContent="space-between"
                >
                  <ContactPerson
                    contactPersonEmail={contactPersonEmail}
                    contactPersonFullName={contactPersonFullName}
                    contactPersonPhone={contactPersonPhone}
                    touched={touched}
                    errors={errors}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                  />
                  <Driver
                    driverFullName={driverFullName}
                    driverLicenseNumber={driverLicenseNumber}
                    driverPhone={driverPhone}
                    driverRegistrationNumber={driverRegistrationNumber}
                    touched={touched}
                    errors={errors}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                  />
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
