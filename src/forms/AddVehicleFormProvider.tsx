import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import AddVehicleForm from './AddVehicleForm';
import { FormFields, schema } from './types/FormFields';

const AddVehicleFormProvider = () => {
  const methods = useForm<FormFields>({
    /*defaultValues: {
      email: 'test@email.com',
    },*/
    mode: 'all',
    resolver: zodResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <AddVehicleForm />
    </FormProvider>
  );
};

export default AddVehicleFormProvider;
