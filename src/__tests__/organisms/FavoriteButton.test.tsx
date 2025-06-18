// src/__tests__/FavoriteButton.test.tsx

import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';

import FavoriteButton from '@/components/organisms/FavoriteButton';
import { store } from '@/store/store';
import { product } from '@/__mocks__/products';

describe('FavoriteButton', () => {
  it('renderiza o botão', () => {
    render(
      <Provider store={store}>
        <FavoriteButton {...product} />
      </Provider>
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('muda a cor ao favoritar e desfavoritar', () => {
    render(
      <Provider store={store}>
        <FavoriteButton {...product} />
      </Provider>
    );

    const button = screen.getByRole('button');

    expect(button).toHaveClass('text-gray-400');
    fireEvent.click(button);

    expect(button).toHaveClass('text-red-500');

    fireEvent.click(button);
    expect(button).toHaveClass('text-gray-400');
  });
});
