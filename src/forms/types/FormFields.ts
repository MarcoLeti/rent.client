import dayjs, { Dayjs } from 'dayjs';
import * as z from 'zod';

export const schema = z.object({
  //email: z.string().email().min(2),
  //password: z.string().min(6),
  vehicleTypes: z.number().max(3),
  vehicleBrands: z.number(),
  vehicleModels: z.number(),
  inspectionDate: z.instanceof(dayjs as unknown as typeof Dayjs),
  insuranceDate: z.instanceof(dayjs as unknown as typeof Dayjs),
  oilFilterDate: z.instanceof(dayjs as unknown as typeof Dayjs),
});

export type FormFields = {
  vehicleTypes?: number;
  vehicleBrands?: number;
  vehicleModels?: number;
  inspectionDate?: Dayjs;
  insuranceDate?: Dayjs;
  oilFilterDate?: Dayjs;
};
