import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';
import { DesktopDatePicker } from '@mui/x-date-pickers';

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
};

export const RhfDatePicker = <T extends FieldValues>({
  name,
  label,
}: Props<T>) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => {
        return (
          <DesktopDatePicker
            value={value ?? null}
            label={label}
            onChange={(newValue) => onChange(newValue)}
          />
        );
      }}
    />
  );
};

export default RhfDatePicker;
