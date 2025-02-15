import { Page } from '../components/Page';
import Paper from '@mui/material/Paper';
import AddVehicleFormProvider from '../forms/AddVehicleFormProvider';

export const AddVehicle = () => (
  <Page title="Add Vehicle">
    <Paper elevation={3}>
      <AddVehicleFormProvider />
    </Paper>
  </Page>
);
