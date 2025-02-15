import axios from 'axios';
import { useEffect, useState } from 'react';
import { IVehicleType } from '../types/interfaces/IVehicleType';

export const useVehicleTypes = (): IVehicleType[] => {
  const [vehicleTypes, setVehicleTypes] = useState<IVehicleType[]>([]);

  useEffect(() => {
    const fetchVehicleTypes = async (): Promise<void> => {
      try {
        const response = await axios.get<IVehicleType[]>(
          'https://localhost:7166/Vehicle/types'
        );
        setVehicleTypes(response.data);
      } catch (error) {
        console.error('Error fetching vehicle types:', error);
      }
    };

    fetchVehicleTypes();
  }, []);

  return vehicleTypes;
};

export const useVehicleBrands = (typeId: number): IVehicleType[] => {
  const [vehicleBrands, setVehicleBrands] = useState<IVehicleType[]>([]);

  useEffect(() => {
    const fetchVehicleBrands = async (): Promise<void> => {
      if (typeId === undefined || typeId === null) {
        setVehicleBrands([]);
        return;
      }

      try {
        const response = await axios.get<IVehicleType[]>(
          `https://localhost:7166/Vehicle/brands/${typeId}`
        );
        setVehicleBrands(response.data);
      } catch (error) {
        console.error('Error fetching vehicle types:', error);
      }
    };

    fetchVehicleBrands();
  }, [typeId]);

  return vehicleBrands;
};

export const useVehicleModels = (brandId: number): IVehicleType[] => {
  const [vehicleModels, setVehicleModels] = useState<IVehicleType[]>([]);

  useEffect(() => {
    const fetchVehicleBrands = async (): Promise<void> => {
      if (brandId === undefined || brandId === null) {
        setVehicleModels([]);
        return;
      }

      try {
        const response = await axios.get<IVehicleType[]>(
          `https://localhost:7166/Vehicle/models/${brandId}`
        );
        setVehicleModels(response.data);
      } catch (error) {
        console.error('Error fetching vehicle types:', error);
      }
    };

    fetchVehicleBrands();
  }, [brandId]);

  return vehicleModels;
};
