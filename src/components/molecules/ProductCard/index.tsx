import { JSX } from 'react';
import { IProduct } from '@/types/product';
import Image from 'next/image';
import { MoneyFormat } from '@/misc/format';
import { FiHeart } from 'react-icons/fi';
import Link from 'next/link';

const ProductCard = ({
  slug,
  title,
  images,
  price,
  category,
}: IProduct): JSX.Element => {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
      <Link href={{ pathname: `/product/${slug}` }} className="h-56 w-full">
        <Image
          src={images[0]}
          className="mx-auto w-full h-56"
          alt={title}
          width={193}
          height={224}
        />
      </Link>
      <div className="flex flex-col mt-3 gap-3">
        <div className="flex items-center justify-between gap-4">
          <Link href={{ pathname: `/category/${category.id}` }}>
            <span className="w-fit bg-slate-100 text-slate-700 text-xs font-semibold me-2 px-2.5 py-0.5 rounded">
              {category.name}
            </span>
          </Link>
          <button
            type="button"
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
          >
            <FiHeart className="size-5" />
          </button>
        </div>
        <Link
          href={{ pathname: `/product/${slug}` }}
          className="mb-4 text-lg font-semibold leading-tight text-gray-900"
        >
          {title}
        </Link>
        <p className="text-2xl text-right font-extrabold leading-tight text-gray-900">
          {MoneyFormat(price)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
