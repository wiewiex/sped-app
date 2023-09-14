import { Formik } from 'formik';
import { Container } from '@/components/views/styledContainers';
import PrimaryTextInput from '@/components/reusable/PrimaryTextInput';
import SecondaryButton from '@/components/reusable/SecondaryButton';
import { H2, H4 } from '@/components/views/styledTexts';

import { initialValues, validationSchema } from './handlers';
import CustomSelect from '@/components/reusable/CustomSelect';
import Switcher from '@/components/reusable/Switcher';

export default function AddClient() {
  return (
    <Container
      width="45vw"
      mobileWidth="100%"
      mobileMinHeight="60rem"
      minHeight="50rem"
      minWidth="60rem"
      flex={1}
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
            regon,
            paymentDeadline,
          } = values;

          return (
            <Container flex={1} mobileWidth="100%">
              <H4>Dodaj klienta</H4>
              <Container
                id="add-address-form"
                flex={1}
                mobileWidth="90%"
                width="100%"
                flexDirection="row"
                alignItems="stretch"
                mobileJustifyContent="space-between"
                margin="5rem 0 3rem 0"
              >
                <Container mobileWidth="100%" padding="0 5rem" flex={1}>
                  <Container
                    flex={1}
                    mobileWidth="100%"
                    mobileJustifyContent="space-between"
                  >
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
                      <Container width="30%" mobileWidth="100%">
                        <PrimaryTextInput
                          label="Kod pocztowy"
                          onChange={handleChange('postCode')}
                          onBlur={handleBlur('postCode')}
                          value={postCode}
                          error={touched.postCode && errors.postCode}
                        />
                      </Container>
                      <Container width="30%" mobileWidth="100%">
                        <PrimaryTextInput
                          label="Miasto"
                          onChange={handleChange('city')}
                          onBlur={handleBlur('city')}
                          value={city}
                          error={touched.city && errors.city}
                        />
                      </Container>
                      <Container
                        width="30%"
                        mobileWidth="100%"
                        mobileMargin="2rem 0 0  0"
                        margin="0"
                      >
                        <CustomSelect
                          placeholder="Wybierz kraj"
                          options={['test1', 'test2']}
                        />
                      </Container>
                    </Container>
                    <Container
                      mobileWidth="100%"
                      flexDirection="row"
                      justifyContent="space-between"
                    >
                      <Container width="30%" mobileWidth="100%">
                        <PrimaryTextInput
                          label="Termin płatności"
                          onChange={handleChange('paymentDeadline')}
                          onBlur={handleBlur('paymentDeadline')}
                          value={paymentDeadline}
                          error={
                            touched.paymentDeadline &&
                            errors.paymentDeadline
                          }
                        />
                      </Container>
                      <Container width="30%" mobileWidth="100%">
                        <PrimaryTextInput
                          label="Email do przesyłania dokumentów"
                          onChange={handleChange('email')}
                          onBlur={handleBlur('email')}
                          value={email}
                          error={touched.email && errors.email}
                        />
                      </Container>
                      <Container
                        mobileMargin="3rem 0"
                        mobileFlexDirection="row"
                        mobileWidth="30%"
                      >
                        <H2 style={{ fontSize: '3rem' }}>VAT</H2>
                        <Switcher checked={true} handleChange={() => {}} />
                      </Container>
                    </Container>
                  </Container>
                  <Container
                    mobileWidth="100%"
                    mobileFlexDirection="row"
                    mobileJustifyContent="space-between"
                    mobileMargin="5rem 0 0 0"
                  >
                    <SecondaryButton text="Wyczyść" />
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
