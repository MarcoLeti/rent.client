import { useFormContext, SubmitHandler, useWatch } from 'react-hook-form';

import { Button, Grid, Stack } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import RhfComboBox from './components/RhfComboBox';
import { FormFields } from './types/FormFields';
import {
  useVehicleTypes,
  useVehicleBrands,
  useVehicleModels,
} from '../services/queries';
import { useEffect } from 'react';
import { DevTool } from '@hookform/devtools';
import RhfDatePicker from './components/RhfDatePicker';

const AddVehicleForm = () => {
  const {
    handleSubmit,
    setError,
    setValue,
    formState: { errors, isSubmitting },
    control,
  } = useFormContext<FormFields>();

  const vehicleTypes = useVehicleTypes();

  const typeId: number = useWatch({ name: 'vehicleTypes' });
  const vehicleBrands = useVehicleBrands(typeId);

  const brandId: number = useWatch({ name: 'vehicleBrands' });
  const vehicleModels = useVehicleModels(brandId);

  useEffect(() => {
    setValue('vehicleModels', undefined);
    setValue('vehicleBrands', undefined);
  }, [setValue, typeId]);

  useEffect(() => {
    setValue('vehicleModels', undefined);
  }, [setValue, brandId]);

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      setError('root', {
        message: 'This email is already taken',
      });
    }
  };

  return (
    <>
      <form className="tutorial gap-2" onSubmit={handleSubmit(onSubmit)}>
        <Grid container sx={{ padding: 2 }}>
          <Grid container xs={12} sm={3} sx={{ padding: 2 }}>
            <Grid item xs={12} sm={12}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: '100%',
                  maxHeight: '150px',
                }}
              >
                <img
                  src="./vite.svg"
                  alt="Description"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </div>
            </Grid>
          </Grid>
          <Grid container xs={12} sm={9} sx={{ padding: 2 }} spacing={2}>
            <Grid item xs={12} sm={4}>
              <RhfComboBox<FormFields>
                name="vehicleTypes"
                label="Vehicle Type"
                options={vehicleTypes.map((v) => ({
                  label: v.label,
                  id: v.id,
                }))}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <RhfComboBox<FormFields>
                name="vehicleBrands"
                label="Vehicle Brands"
                options={vehicleBrands.map((b) => ({
                  label: b.label,
                  id: b.id,
                }))}
                disabled={!typeId}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <RhfComboBox<FormFields>
                name="vehicleModels"
                label="Vehicle Models"
                options={vehicleModels.map((m) => ({
                  label: m.label,
                  id: m.id,
                }))}
                disabled={!brandId || !typeId}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Stack direction="column" alignItems="stretch" spacing={2}>
                <RhfDatePicker name="inspectionDate" label="Inspection" />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Stack direction="column" alignItems="stretch" spacing={2}>
                <RhfDatePicker name="insuranceDate" label="Insurance" />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Stack direction="column" alignItems="stretch" spacing={2}>
                <RhfDatePicker name="oilFilterDate" label="Oil/Filter" />
              </Stack>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} sx={{ padding: 2 }}>
            {isSubmitting ? (
              <LoadingButton
                loading
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="outlined"
              >
                Saving...
              </LoadingButton>
            ) : (
              <Button disabled={isSubmitting} variant="contained" type="submit">
                Add Vehicle
              </Button>
            )}
            {errors.root && (
              <div className="text-red-500">{errors.root.message}</div>
            )}
          </Grid>
        </Grid>
      </form>
      <DevTool control={control} placement="top-right" />
    </>
  );
};

export default AddVehicleForm;
