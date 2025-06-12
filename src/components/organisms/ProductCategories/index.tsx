'use client';

import { JSX, useEffect, useState } from 'react';

import Link from 'next/link';
import Crud from '@/services/cruds';
import { ICategories } from '@/types/categories';
import Image from 'next/image';

const ProductCategories = (): JSX.Element => {
  const [categories, setCategories] = useState<ICategories[]>([]);

  async function getCategories() {
    const categories = await Crud.list<ICategories[]>('categories');
    setCategories(categories);
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <section className="py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            Products by category
          </h2>
          <Link
            href="/"
            className="flex items-center text-base font-medium text-blue-500 hover:underline"
          >
            See more
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((item: ICategories, index) => (
            <Link
              key={index}
              href={item.slug}
              className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 gap-4"
            >
              <Image
                src={item.image}
                width={40}
                height={40}
                className="size-10 rounded-full"
                alt={item.name}
              />
              <span className="text-sm font-medium text-gray-900 truncate">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
