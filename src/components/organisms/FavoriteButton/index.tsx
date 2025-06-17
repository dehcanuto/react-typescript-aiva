'use client';

import { JSX } from 'react';
import { FiHeart } from 'react-icons/fi';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleFavorite } from '@/store/favorites';
import { IProduct } from '@/types/product';

const FavoriteButton = (product: IProduct): JSX.Element => {
  const dispatch = useAppDispatch();
  const isFav = useAppSelector((state) =>
    state.favorites.products.some((p) => p.id === product.id)
  );

  return (
    <button
      onClick={() => dispatch(toggleFavorite(product))}
      className={`p-2 rounded-lg hover:bg-gray-100 ${
        isFav ? 'text-red-500' : 'text-gray-400'
      } transition`}
    >
      {isFav ? (
        <FiHeart className="size-5 text-red-500 fill-current" />
      ) : (
        <FiHeart className="size-5" />
      )}
    </button>
  );
};

export default FavoriteButton;
