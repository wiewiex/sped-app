import { Formik } from 'formik';
import { Dispatch, SetStateAction, useState } from 'react';
import { Container } from '@/components/views/styledContainers';
import PrimaryTextInput from '@/components/reusable/PrimaryTextInput';
import SecondaryButton from '@/components/reusable/SecondaryButton';
import { H4, SmallText, Text } from '@/components/views/styledTexts';

import { initialValues, validationSchema } from './handlers';
import CustomSelect from '@/components/reusable/CustomSelect';
import CustomDateInput from '@/components/reusable/CustomDateInput';
import ToggleButton from '@/components/reusable/ToggleButton';
import CustomTextArea from '@/components/reusable/CustomTextArea';

export default function AddAddress() {
  return (
    <Container
      mobileWidth="90vw"
      width="50vw"
      mobileMinHeight="100rem"
      minHeight="50rem"
      minWidth="70rem"
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
            gps,
            info,
            dateFrom,
            dateTo,
            timeFrom,
            timeTo,
            isLoad,
            isUnload,
          } = values;

          return (
            <Container flex={1} mobileWidth="100%">
              <H4>Dodaj adres</H4>
              <Container
                id="add-address-form"
                flex={1}
                mobileWidth="100%"
                flexDirection="row"
                alignItems="stretch"
                mobileJustifyContent="space-between"
                mobileMargin="5rem 0 3rem 0"
              >
                <Container width="50%" mobileWidth="100%" padding="0 5rem">
                  <Container
                    flex={1}
                    mobileWidth="100%"
                    mobileJustifyContent="space-between"
                  >
                    <CustomSelect
                      placeholder="Wybierz istniejący adres"
                      options={['test1', 'test2']}
                    />
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
                    <CustomSelect
                      placeholder="Wybierz kraj"
                      options={['test1', 'test2']}
                    />
                    <PrimaryTextInput
                      label="GPS"
                      onChange={handleChange('gps')}
                      onBlur={handleBlur('gps')}
                      value={gps}
                      error={touched.gps && errors.gps}
                    />
                  </Container>
                </Container>
                <Container
                  width="50%"
                  mobileWidth="100%"
                  padding="0 5rem"
                  mobileJustifyContent="space-between"
                  flex={1}
                >
                  <CustomDateInput text="Data i godzina rozpoczęcia załadunku" />
                  <CustomDateInput text="Data i godzina rozpoczęcia rozładunku" />
                  <Container
                    mobileWidth="100%"
                    mobileAlignItems="flex-start"
                  >
                    <Container mobileMargin="0 0 1rem 0">
                      <SmallText>Dodatkowe informacje</SmallText>
                    </Container>
                    <CustomTextArea />
                  </Container>
                  <ToggleButton offText="Załadunek" onText="Rozładunek" />
                  <Container
                    mobileFlexDirection="row"
                    mobileWidth="100%"
                    mobileJustifyContent="space-between"
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
