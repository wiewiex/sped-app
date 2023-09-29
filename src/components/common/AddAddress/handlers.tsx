import * as yup from 'yup';

export interface IAddress {
  name: string;
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
  name: '',
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

const errMsg = 'wymagane pole';

export const validationSchema = yup.object({
  name: yup.string().required(errMsg),
  address: yup.string().required(errMsg),
  postCode: yup
    .string()
    // .matches(/\d{2}-\d{3}/, 'Zip code must be in xx-xxx format')
    .required(errMsg),
  city: yup.string().required(errMsg),
  country: yup.string().required(errMsg),
  gps: yup.string().required(errMsg),
  info: yup.string().required(errMsg),
  dateFrom: yup.string().required(errMsg),
  dateTo: yup.string().required(errMsg),
  timeFrom: yup.string().required(errMsg),
  timeTo: yup.string().required(errMsg),
  isLoad: yup.string().required(errMsg),
  isUnload: yup.string().required(errMsg),
});
