'use client';

import { JSX, useEffect, useState } from 'react';
import { FiHeart } from 'react-icons/fi';

const HeaderFavorites = (): JSX.Element => {
  const [items, setItems] = useState<number>(0);

  useEffect(() => {
    // TODO: Load and update favorite items.
    setItems(6)
  }, [])

  return (
    <div className="relative hidden sm:block">
      <button
        type="button"
        className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 text-sm font-medium leading-none text-gray-900 cursor-pointer"
      >
        <span className="sr-only">Favorites</span>
        <div className="relative me-2.5">
          <FiHeart className="text-lg" />
          <div className="absolute inline-flex items-center justify-center size-4 text-xs text-white font-medium bg-red-500 rounded-full -top-1.5 -end-1.5">
            {items}
          </div>
        </div>
        Favorites
      </button>
    </div>
  );
};

export default HeaderFavorites;
