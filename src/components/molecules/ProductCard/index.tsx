import { JSX } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { IProduct } from '@/types/product';
import { MoneyFormat } from '@/misc/format';
import FavoriteButton from '@/components/organisms/FavoriteButton';

const ProductCard = (product: IProduct): JSX.Element => {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
      <Link
        href={{ pathname: `/product/${product.slug}` }}
        className="h-56 w-full"
      >
        <Image
          src={product.images[0] ?? '/no-image.png'}
          className="mx-auto w-full h-56"
          alt={product.title}
          width={193}
          height={224}
        />
      </Link>
      <div className="flex flex-col mt-3 gap-3">
        <div className="flex items-center justify-between gap-4">
          <Link href={{ pathname: `/category/${product.category.id}` }}>
            <span className="w-fit bg-slate-100 text-slate-700 text-xs font-semibold me-2 px-2.5 py-0.5 rounded">
              {product.category.name}
            </span>
          </Link>
          <FavoriteButton {...product} />
        </div>
        <Link
          href={{ pathname: `/product/${product.slug}` }}
          className="mb-4 text-lg font-semibold leading-tight text-gray-900"
        >
          {product.title}
        </Link>
        <p className="text-2xl text-right font-extrabold leading-tight text-gray-900">
          {MoneyFormat(product.price)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
