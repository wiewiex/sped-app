import * as yup from 'yup';

export interface IAddress {
  address: string;
  postCode: string;
  city: string;
  country: string;
  gps: string;
  dateFrom: Date;
  dateTo: Date;
  timeFrom: Date;
  timeTo: Date;
  isLoad: boolean;
  isUnload: boolean;
  info: string;
}

const initialDate = new Date();

export const initialValues: IAddress = {
  address: '',
  postCode: '',
  city: '',
  country: '',
  gps: '',
  info: '',
  dateFrom: initialDate,
  dateTo: initialDate,
  timeFrom: initialDate,
  timeTo: initialDate,
  isLoad: false,
  isUnload: false,
};

export const validationSchema = yup.object({
  fullName: yup.string().required('required field'),
  address: yup.string().required('required field'),
  postCode: yup
    .string()
    .matches(/\d{2}-\d{3}/, 'Zip code must be in xx-xxx format')
    .required('required field'),
  city: yup.string().required('required field'),
  phoneNumber: yup.string().required('required field'),
});
