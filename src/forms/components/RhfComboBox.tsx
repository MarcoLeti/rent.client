import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';
import { Autocomplete, TextField } from '@mui/material';
import { Option } from '../types/Option';

type Props<T extends FieldValues> = {
  name: Path<T>;
  options?: Option[];
  label: string;
  disabled?: boolean;
};

export const RhfComboBox = <T extends FieldValues>({
  name,
  options,
  label,
  disabled,
}: Props<T>) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <Autocomplete<Option>
          disablePortal
          options={options || []}
          value={value?.id}
          isOptionEqualToValue={() => true}
          /*isOptionEqualToValue={(option, value) => {
            console.log('option', option, 'value', value);
            try {
              return option.id === value.id;
            } catch (e) {
              console.log('error', e);
              return false;
            }
          }}*/
          getOptionLabel={(opt) => {
            const selectedOption = options!.find(
              (option) => option.id === opt.id
            );
            return selectedOption ? selectedOption.label : '';
          }}
          onChange={(_, newValue) => {
            onChange(newValue ? newValue.id : null);
          }}
          disabled={disabled}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              //inputRef={ref}
              error={!!error}
              helperText={error?.message}
              label={label}
            />
          )}
        />
      )}
    />
  );
};

export default RhfComboBox;
