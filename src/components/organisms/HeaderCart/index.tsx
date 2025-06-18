'use client';

import { JSX } from 'react';
import { FiShoppingCart, FiTrash2 } from 'react-icons/fi';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import BaseDropdown from '@/components/molecules/BaseDropdown';
import Link from 'next/link';
import { MoneyFormat } from '@/misc/format';
import { toggleCartItem } from '@/store/cart';

const HeaderCart = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const products = useAppSelector((state) => state.cart.items);
  const cartCount = products.length;

  return (
    <div>
      <BaseDropdown
        trigger={() => (
          <button
            type="button"
            className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 text-sm font-medium leading-none text-gray-900 cursor-pointer"
          >
            <div className="relative sm:me-2.5">
              <FiShoppingCart className="text-lg" />
              {cartCount > 0 && (
                <div className="absolute inline-flex items-center justify-center size-4 text-xs text-white font-medium bg-red-500 rounded-full -top-1.5 -end-1.5">
                  {cartCount}
                </div>
              )}
            </div>
            <span className="hidden sm:flex">My Cart</span>
          </button>
        )}
      >
        <div className="w-full max-w-xs">
          {products.length ? (
            <ul>
              {products.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center hover:bg-slate-50"
                >
                  <div className="flex flex-col w-full p-4">
                    <Link
                      href={{ pathname: `/product/${item.slug}` }}
                      className="w-50 truncate text-sm font-semibold leading-none text-gray-900 hover:underline"
                    >
                      {item.title}
                    </Link>
                    <p className="mt-0.5 truncate text-sm font-normal text-gray-500 text-gray-400">
                      {MoneyFormat(item.price)}
                    </p>
                  </div>
                  <div className="flex items-center justify-end">
                    <button
                      type="button"
                      onClick={() => dispatch(toggleCartItem(item))}
                      className="p-3 me-2 text-red-600 bg-white cursor-pointer rounded-lg hover:bg-red-50"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <span className="flex p-4 text-sm">Sem produtos no carrinho</span>
          )}
        </div>
        <div className="border-slate-200 text-gray-700">
          <Link
            href="/cart"
            className="inline-flex p-4 w-full items-center justify-center text-sm font-medium text-blue-500 hover:bg-blue-50"
          >
            See your cart
          </Link>
        </div>
      </BaseDropdown>
    </div>
  );
};

export default HeaderCart;
