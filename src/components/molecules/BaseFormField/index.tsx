import { JSX } from 'react';
import {
  FieldError,
  RegisterOptions,
  UseFormRegister,
  FieldValues,
  Path,
} from 'react-hook-form';

import BaseInput from '@/components/atoms/BaseInput';

type BaseFormFieldProps<TFieldValues extends FieldValues> = {
  label: string;
  name: Path<TFieldValues>;
  register: UseFormRegister<TFieldValues>;
  rules?: RegisterOptions<TFieldValues, Path<TFieldValues>>;
  error?: FieldError;
  inputProps?: React.ComponentProps<typeof BaseInput>;
};

function BaseFormField<TFieldValues extends FieldValues>({
  label,
  name,
  register,
  rules,
  error,
  inputProps,
}: BaseFormFieldProps<TFieldValues>): JSX.Element {
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>

      <BaseInput
        id={name}
        aria-invalid={!!error}
        {...inputProps}
        {...register(name, rules)}
      />

      {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
    </div>
  );
}

export default BaseFormField;
