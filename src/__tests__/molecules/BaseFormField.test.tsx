import React from 'react';
import { render, screen } from '@testing-library/react';
import { useForm, FieldError } from 'react-hook-form';

import BaseFormField from '@/components/molecules/BaseFormField';

type FormValues = {
  email: string;
};

const renderWithForm = (props?: {
  error?: FieldError;
  inputProps?: React.ComponentProps<'input'>;
}) => {
  const Wrapper = () => {
    const { register } = useForm<FormValues>();

    return (
      <BaseFormField<FormValues>
        label="Email"
        name="email"
        register={register}
        error={props?.error}
        inputProps={props?.inputProps}
      />
    );
  };

  render(<Wrapper />);
};

describe('BaseFormField', () => {
  it('renderiza corretamente com label e input', () => {
    renderWithForm();

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('exibe mensagem de erro quando houver', () => {
    renderWithForm({
      error: { message: 'Campo obrigatório', type: 'required' },
    });

    expect(screen.getByText('Campo obrigatório')).toBeInTheDocument();
  });

  it('passa props adicionais para o input', () => {
    renderWithForm({
      inputProps: { placeholder: 'Digite seu e-mail' },
    });

    expect(
      screen.getByPlaceholderText('Digite seu e-mail')
    ).toBeInTheDocument();
  });
});
