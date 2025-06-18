'use client';

import { JSX } from 'react';
import { FiShoppingCart } from 'react-icons/fi';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleCartItem } from '@/store/cart';
import { IProduct } from '@/types/product';

const CartButton = (product: IProduct): JSX.Element => {
  const dispatch = useAppDispatch();

  const isInCart = useAppSelector((state) =>
    state.cart.items.some((p) => p.id === product.id)
  );

  return (
    <button
      onClick={() => dispatch(toggleCartItem(product))}
      aria-label={!isInCart ? 'Add to cart' : 'Added to cart'}
      className={`flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 rounded-lg border transition cursor-pointer ${
        isInCart
          ? 'bg-green-500 text-white'
          : 'bg-white text-gray-400 border-gray-200 hover:bg-gray-100'
      }`}
    >
      <FiShoppingCart className="size-5 -ms-2 me-2" />
      {!isInCart ? 'Add to cart' : 'Added to cart'}
    </button>
  );
};

export default CartButton;
