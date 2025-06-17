import { forwardRef, InputHTMLAttributes, JSX, Ref } from 'react';

export type BaseInputProps = InputHTMLAttributes<HTMLInputElement>;

const BaseInput = forwardRef(
  (rest: BaseInputProps, ref: Ref<HTMLInputElement>): JSX.Element => (
    <input
      ref={ref}
      {...rest}
      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
    />
  )
);

BaseInput.displayName = 'BaseInput';

export default BaseInput;
