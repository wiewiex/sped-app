import { Formik } from 'formik';
import { Dispatch, SetStateAction, useState } from 'react';
import { Container } from '@/components/views/styledContainers';
import PrimaryTextInput from '@/components/reusable/PrimaryTextInput';
import SecondaryButton from '@/components/reusable/SecondaryButton';
import { H4, H6 } from '@/components/views/styledTexts';
import Switcher from '@/components/reusable/Switcher';

import { initialValues, validationSchema } from './handlers';

export default function AddAddress() {
  return (
    <Container mobileWidth="90vw" width="50vw" flex={1}>
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
            <Container
              id="add-address-form"
              flex={1}
              mobileWidth="100%"
              flexDirection="row"
              alignItems="stretch"
              mobileJustifyContent="space-between"
            >
              <Container>
                <H4>Dodaj adres</H4>
                <Container mobileWidth="100%">
                  <PrimaryTextInput
                    label="address"
                    onChange={handleChange('address')}
                    onBlur={handleBlur('address')}
                    value={address}
                    error={touched.address && errors.address}
                  />

                  <PrimaryTextInput
                    label="postCode"
                    onChange={handleChange('postCode')}
                    onBlur={handleBlur('postCode')}
                    value={postCode}
                    error={touched.postCode && errors.postCode}
                  />
                  <PrimaryTextInput
                    label="city"
                    onChange={handleChange('city')}
                    onBlur={handleBlur('city')}
                    value={city}
                    error={touched.city && errors.city}
                  />
                </Container>
                <Container
                  mobileFlexDirection="row"
                  mobileWidth="100%"
                  mobileJustifyContent="flex-start"
                >
                  <Container mobileMargin="0 10px 0 0">
                    <Switcher checked={true} />
                  </Container>
                  <H6>Save this data for future orders</H6>
                </Container>
                <Container
                  mobileFlexDirection="row"
                  mobileJustifyContent="space-between"
                  mobileWidth="100%"
                >
                  <SecondaryButton text="LOAD MY DATA" />
                  <SecondaryButton
                    text="VIEW SUMMARY"
                    handler={handleSubmit}
                    loaded={true}
                  />
                </Container>
              </Container>
              <Container
                backgroundColor="red"
                mobileWidth="50%"
              ></Container>
            </Container>
          );
        }}
      </Formik>
    </Container>
  );
}
