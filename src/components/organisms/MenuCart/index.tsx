'use client';

import { JSX, useEffect, useRef, useState } from 'react';
import { FaRegTimesCircle } from 'react-icons/fa';
import { FaBasketShopping } from 'react-icons/fa6';

const MenuCart = (): JSX.Element => {
  const [view, setView] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setView(false);
      }
    };

    if (view) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [view]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        className="flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 text-gray-900 gap-3"
        onClick={() => setView((prev) => !prev)}
      >
        <FaBasketShopping />
        <span className="hidden sm:flex">My Cart</span>
      </button>
      {view && (
        <div className="absolute z-10 mx-auto w-80 space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased shadow-xl">
          <div className="grid grid-cols-2">
            <div>
              <a
                href="#"
                className="truncate text-sm font-semibold leading-none text-gray-900 hover:underline"
              >
                Product Name
              </a>
              <p className="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                $599
              </p>
            </div>
            <div className="flex items-center justify-end gap-6">
              <p className="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                Qty: 1
              </p>
              <button
                type="button"
                className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600"
              >
                <FaRegTimesCircle />
              </button>
            </div>
          </div>
          <a
            href="#"
            className="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
            role="button"
          >
            Proceed to Checkout
          </a>
        </div>
      )}
    </div>
  );
};

export default MenuCart;
