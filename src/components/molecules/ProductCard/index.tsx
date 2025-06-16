import { JSX } from 'react';
import { IProduct } from '@/types/product';
import Image from 'next/image';
import { MoneyFormat } from '@/misc/format';
import { FiHeart } from 'react-icons/fi';
import Link from 'next/link';

const ProductCard = ({
  id,
  title,
  images,
  price,
  category,
}: IProduct): JSX.Element => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <Link href={{ pathname: `product/${id}` }} className="h-56 w-full">
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
          <Link href={{ pathname: `category/${category.id}` }}>
            <span className="rounded bg-primary-100 text-sm font-semibold">
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
          href={{ pathname: `product/${id}` }}
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
