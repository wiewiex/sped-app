export const addresses: {
  name: string;
  address: string;
  postCode: string;
  city: string;
  country: string;
  gps: number[];
  isUnload: boolean;
}[] = [
  {
    name: 'Zlecenie',
    address: 'IMG_123.JPG',
    postCode: '0.03MB',
    city: 'Warszawa',
    country: 'Poland',
    gps: [37.7749, -122.4194],
    isUnload: false,
  },
  {
    name: 'CMR',
    address: 'Aleje Jerozolimskie 123',
    postCode: '00-001',
    city: 'Warszawa',
    country: 'Poland',
    gps: [52.2297, 21.0122],
    isUnload: true,
  },
  {
    name: 'Inne dokumenty',
    address: 'ul. Piotrkowska 56',
    postCode: '90-001',
    city: 'Łódź',
    country: 'Poland',
    gps: [51.7704, 19.4562],
    isUnload: false,
  },
  {
    name: 'Zlecenie od klienta',
    address: 'ul. Krakowska 78',
    postCode: '30-001',
    city: 'Kraków',
    country: 'Poland',
    gps: [50.0647, 19.945],
    isUnload: false,
  },
];
