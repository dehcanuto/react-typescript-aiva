import React from 'react';
import { render, screen } from '@testing-library/react';

import ProductCard from '@/components/molecules/ProductCard';
import { product } from '@/__mocks__/products';

type HrefType = string | { pathname: string };

jest.mock('next/link', () => {
  const MockLink = ({
    href,
    children,
  }: {
    href: HrefType;
    children: React.ReactNode;
  }) => (
    <a href={typeof href === 'object' ? href.pathname : href}>{children}</a>
  );
  MockLink.displayName = 'MockLink';
  return MockLink;
});

jest.mock('@/components/organisms/FavoriteButton', () => {
  const FavoriteButtonMock = () => <div data-testid="favorite-button" />;
  FavoriteButtonMock.displayName = 'FavoriteButtonMock';
  return FavoriteButtonMock;
});

jest.mock('@/misc/format', () => ({
  MoneyFormat: (value: number) => `$${value.toFixed(2)}`,
}));

describe('ProductCard', () => {
  it('renderiza dados do produto corretamente', () => {
    render(<ProductCard {...product} />);

    expect(screen.getByText(product.title)).toBeInTheDocument();
    expect(screen.getByText(product.category.name)).toBeInTheDocument();
    expect(screen.getByText('$53.00')).toBeInTheDocument();

    const img = screen.getByAltText(product.title);
    expect(img).toHaveAttribute(
      'src',
      '/_next/image?url=https%3A%2F%2Fi.imgur.com%2FQphac99.jpeg&w=640&q=75'
    );
    expect(screen.getByTestId('favorite-button')).toBeInTheDocument();

    const productLinks = screen.getAllByRole('link', {
      name: 'Sleek Modern Leather Sofa',
    });
    expect(productLinks[0]).toHaveAttribute('href', `/product/${product.slug}`);
    expect(productLinks[1]).toHaveAttribute('href', `/product/${product.slug}`);

    const categoryLink = screen.getByText(product.category.name).closest('a');
    expect(categoryLink).toHaveAttribute(
      'href',
      `/category/${product.category.id}`
    );
  });

  it('renderiza imagem padrão quando não há imagem', () => {
    render(<ProductCard {...{ ...product, images: [] }} />);
    expect(screen.getByAltText(product.title)).toHaveAttribute(
      'src',
      '/_next/image?url=%2Fno-image.png&w=640&q=75'
    );
  });
});
