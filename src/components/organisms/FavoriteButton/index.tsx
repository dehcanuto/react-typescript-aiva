'use client';

import { JSX } from 'react';
import { FiHeart } from 'react-icons/fi';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleFavorite } from '@/store/favorites';
import { FavoriteButtonPropType } from './type';

const FavoriteButton = (product: FavoriteButtonPropType): JSX.Element => {
  const dispatch = useAppDispatch();
  const isFav = useAppSelector((state) =>
    state.favorites.products.some((p) => p.id === product.id)
  );

  const isFavClass = isFav ? 'text-red-500' : 'text-gray-400';
  const isExtended =
    product.extended &&
    'flex items-center py-2.5 px-5 text-sm bg-white font-medium rounded-lg border border-gray-200 gap-3';

  return (
    <button
      onClick={() => dispatch(toggleFavorite(product))}
      className={`p-2 rounded-lg hover:bg-gray-100 ${isExtended} ${isFavClass} cursor-pointer transition`}
    >
      {isFav ? (
        <FiHeart className="size-5 text-red-500 fill-current" />
      ) : (
        <FiHeart className="size-5" />
      )}
      {product.extended && 'Add to favorites'}
    </button>
  );
};

export default FavoriteButton;
