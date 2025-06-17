'use client';

import { JSX } from 'react';
import { useAppSelector } from '@/store/hooks';
import ProductCard from '@/components/molecules/ProductCard';

const FavoriteFlow = (): JSX.Element => {
  const products = useAppSelector((state) => state.favorites.products);

  if (!products.length) return <p>Nenhum favorito ainda.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default FavoriteFlow;
