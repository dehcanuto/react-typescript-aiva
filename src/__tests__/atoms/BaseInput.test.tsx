import React, { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import BaseInput from '@/components/atoms/BaseInput';

describe('BaseInput', () => {
  it('renderiza um <input> com as classes padrão', () => {
    render(<BaseInput />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass(
      'bg-gray-50',
      'border',
      'border-gray-300',
      'rounded-lg'
    );
  });

  it('aceita props adicionais (ex.: placeholder)', () => {
    render(<BaseInput placeholder="Email" />);
    const input = screen.getByPlaceholderText('Email');
    expect(input).toBeInTheDocument();
  });

  it('forwardRef aponta para o elemento <input>', () => {
    const ref = createRef<HTMLInputElement>();
    render(<BaseInput ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
    ref.current?.focus();
    expect(ref.current).toHaveFocus();
  });
});
