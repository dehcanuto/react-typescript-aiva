import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import favoritesReducer from '@/store/favorites';
import { product } from '@/__mocks__/products';
import HeaderFavorites from '@/components/organisms/HeaderFavorites';
import { IProduct } from '@/types/product';

jest.mock('next/link', () => {
  const MockLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => <a href={href}>{children}</a>;
  MockLink.displayName = 'MockNextLink';
  return MockLink;
});

const makeStore = (products: IProduct[] = []) =>
  configureStore({
    reducer: { favorites: favoritesReducer },
    preloadedState: {
      favorites: { products },
    },
  });

describe('HeaderFavorites', () => {
  test('não mostra badge quando lista de favoritos está vazia', () => {
    const store = makeStore([]);

    render(
      <Provider store={store}>
        <HeaderFavorites />
      </Provider>
    );

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.queryByText(/^\d+$/)).not.toBeInTheDocument();
  });

  test('mostra contagem correta quando há favoritos', () => {
    const store = makeStore([product, { ...product, id: 2 }]);
    render(
      <Provider store={store}>
        <HeaderFavorites />
      </Provider>
    );

    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/favorites');
  });
});
