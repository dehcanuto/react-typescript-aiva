'use client';

import { JSX } from 'react';
import { FiHeart } from 'react-icons/fi';
import { useAppSelector } from '@/store/hooks';
import Link from 'next/link';

const HeaderFavorites = (): JSX.Element => {
  const favorites = useAppSelector((state) => state.favorites.products);

  return (
    <div className="relative">
      <Link
        href="/favorites"
        className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 text-sm font-medium leading-none text-gray-900 cursor-pointer"
      >
        <div className="relative sm:me-2.5">
          <FiHeart className="text-lg" />
          {favorites.length > 0 && (
            <div className="absolute inline-flex items-center justify-center size-4 text-xs text-white font-medium bg-red-500 rounded-full -top-1.5 -end-1.5">
              {favorites.length}
            </div>
          )}
        </div>
        <span className="hidden sm:flex">Favorites</span>
      </Link>
    </div>
  );
};

export default HeaderFavorites;
