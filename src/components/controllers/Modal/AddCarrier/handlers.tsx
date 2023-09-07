import * as yup from 'yup';

export interface IClient {
  name: string;
  email: string;
  address: string;
  postCode: string;
  city: string;
  country: string;
  nip: string;
  phone: string;
  vat: boolean;
  contactPersonFullName: string;
  contactPersonPhone: string;
  contactPersonEmail: string;
  driverFullName: string;
  driverPhone: string;
  driverRegistrationNumber: string;
  driverLicenseNumber: string;
}

export const initialValues: IClient = {
  name: '',
  email: '',
  address: '',
  postCode: '',
  city: '',
  country: '',
  nip: '',
  phone: '',
  vat: false,
  contactPersonFullName: '',
  contactPersonPhone: '',
  contactPersonEmail: '',
  driverFullName: '',
  driverPhone: '',
  driverRegistrationNumber: '',
  driverLicenseNumber: '',
};

const errMsg = 'wymagane pole';

export const validationSchema = yup.object({
  name: yup.string().required(errMsg),
  email: yup.string().required(errMsg).email('niepoprawny email'),
  address: yup.string().required(errMsg),
  postCode: yup.string().required(errMsg),
  city: yup.string().required(errMsg),
  country: yup.string().required(errMsg),
  nip: yup.string().required(errMsg),
  phone: yup.string().required(errMsg),
  vat: yup.boolean().required(errMsg),
  contactPersonFullName: yup.boolean().required(errMsg),
  contactPersonPhone: yup.boolean().required(errMsg),
  contactPersonEmail: yup.boolean().required(errMsg),
  driverFullName: yup.boolean().required(errMsg),
  driverPhone: yup.boolean().required(errMsg),
  driverRegistrationNumber: yup.boolean().required(errMsg),
  driverLicenseNumber: yup.boolean().required(errMsg),
});
