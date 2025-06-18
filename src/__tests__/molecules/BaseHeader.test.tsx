import React from 'react';
import { render, screen } from '@testing-library/react';
import BaseHeader from '@/components/molecules/BaseHeader';

jest.mock('next/link', () => {
  const MockLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a href={href} data-testid="mock-link">
      {children}
    </a>
  );
  MockLink.displayName = 'MockNextLink';
  return MockLink;
});

jest.mock('@/components/organisms/HeaderSearch', () => {
  const HeaderSearchMock = () => <div data-testid="header-search" />;
  HeaderSearchMock.displayName = 'HeaderSearchMock';
  return HeaderSearchMock;
});

jest.mock('@/components/organisms/HeaderFavorites', () => {
  const HeaderFavoritesMock = () => <div data-testid="header-favorites" />;
  HeaderFavoritesMock.displayName = 'HeaderFavoritesMock';
  return HeaderFavoritesMock;
});

jest.mock('@/components/organisms/HeaderCart', () => {
  const HeaderCartMock = () => <div data-testid="header-cart" />;
  HeaderCartMock.displayName = 'HeaderCartMock';
  return HeaderCartMock;
});

jest.mock('@/components/organisms/HeaderProfile', () => {
  const HeaderProfileMock = () => <div data-testid="header-profile" />;
  HeaderProfileMock.displayName = 'HeaderProfileMock';
  return HeaderProfileMock;
});

jest.mock('@/constants/menu', () => ({
  menu: [
    { name: 'Home', slug: '/' },
    { name: 'Sebastian', slug: '/category/sebastian' },
    { name: 'Electronics', slug: '/category/electronics' },
    { name: 'Furniture', slug: '/category/furniture' },
    { name: 'Shoes', slug: '/category/shoes' },
    { name: 'Miscellaneous', slug: '/category/miscellaneous' },
  ],
}));

describe('BaseHeader', () => {
  it('renderiza marca e subcomponentes principais', () => {
    render(<BaseHeader />);

    expect(screen.getByText('MyEcommerce')).toBeInTheDocument();
    expect(screen.getByTestId('header-search')).toBeInTheDocument();
    expect(screen.getByTestId('header-favorites')).toBeInTheDocument();
    expect(screen.getByTestId('header-cart')).toBeInTheDocument();
    expect(screen.getByTestId('header-profile')).toBeInTheDocument();
  });

  it('renderiza todos os links do menu desktop', () => {
    render(<BaseHeader />);

    const desktopMenuUl = document.querySelector(
      'ul.items-center.hidden.sm\\:flex.gap-8'
    );

    if (!desktopMenuUl) throw new Error('Menu desktop não encontrado');

    const desktopLinks = Array.from(
      desktopMenuUl.querySelectorAll('a[data-testid="mock-link"]')
    ).filter((a) =>
      [
        'Home',
        'Sebastian',
        'Electronics',
        'Furniture',
        'Shoes',
        'Miscellaneous',
      ].includes(a.textContent || '')
    );

    expect(desktopLinks).toHaveLength(6);
    expect(desktopLinks.map((a) => a.textContent)).toEqual([
      'Home',
      'Sebastian',
      'Electronics',
      'Furniture',
      'Shoes',
      'Miscellaneous',
    ]);
  });
});
