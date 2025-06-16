'use client';

import { JSX, useEffect, useState } from 'react';

import Link from 'next/link';
import Crud from '@/services/cruds';
import Image from 'next/image';

import { ICategories } from '@/types/categories';
import FlowHeader from '@/components/molecules/FlowHeader';

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
    <section className="mt-10 p-4 2xl:px-0 antialiased">
      <FlowHeader title="Products by category" url="/" />
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
              unoptimized
            />
            <span className="text-sm font-medium text-gray-900 truncate">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;
