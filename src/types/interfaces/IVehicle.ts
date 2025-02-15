export interface IVehicle {
  [key: string]: unknown;
  [key: number]: unknown;
  id: number;
  type: string;
  brand: string;
  model: string;
  plateNumber: string;
  inspection: string;
  insurance: string;
  oilFilter: string;
  battery: string;
  avatar: string;
}
