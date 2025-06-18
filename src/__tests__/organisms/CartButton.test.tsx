import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';

import CartButton from '@/components/organisms/CartButton';
import cartReducer from '@/store/cart';
import { product } from '@/__mocks__/products';

const setupStore = () =>
  configureStore({
    reducer: { cart: cartReducer },
    preloadedState: {
      cart: { items: [] },
    },
  });

describe('CartButton', () => {
  it('renderiza botão no estado inicial (não no carrinho)', () => {
    const store = setupStore();
    render(
      <Provider store={store}>
        <CartButton {...product} />
      </Provider>
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-white');
    expect(button).toHaveTextContent('Add to cart');
  });

  it('adiciona produto ao carrinho ao clicar, mudando texto e estilo', () => {
    const store = setupStore();
    render(
      <Provider store={store}>
        <CartButton {...product} />
      </Provider>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(button).toHaveTextContent('Added to cart');
    expect(button).toHaveClass('bg-green-500');
    expect(button).toHaveAttribute('aria-label', 'Added to cart');
  });

  it('remove produto do carrinho ao clicar de novo', () => {
    const store = setupStore();
    render(
      <Provider store={store}>
        <CartButton {...product} />
      </Provider>
    );

    const button = screen.getByRole('button');

    // Clica para adicionar
    fireEvent.click(button);

    // Clica para remover
    fireEvent.click(button);

    // Agora o botão deve voltar a "Add to cart"
    expect(button).toHaveTextContent('Add to cart');
    expect(button).toHaveClass('bg-white');
    expect(button).toHaveAttribute('aria-label', 'Add to cart');
  });
});
