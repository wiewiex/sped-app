import * as yup from 'yup';

export interface IClient {
  name: string;
  email: string;
  address: string;
  postCode: string;
  city: string;
  country: string;
  nip: string;
  regon: string;
  paymentDeadline: string;
  vat: boolean;
}

export const initialValues: IClient = {
  name: '',
  email: '',
  address: '',
  postCode: '',
  city: '',
  country: '',
  nip: '',
  regon: '',
  paymentDeadline: '',
  vat: false,
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
  regon: yup.string().required(errMsg),
  paymentDeadLine: yup.string().required(errMsg),
  vat: yup.boolean().required(errMsg),
});
