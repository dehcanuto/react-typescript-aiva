'use client';

import { JSX, useEffect, useState } from 'react';

import Crud from '@/services/cruds';

import { ICategories } from '@/types/categories';
import ProductFlow from '@/components/molecules/ProductFlow';

const ProductFlowAllCaregories = (): JSX.Element => {
  const [categories, setCategories] = useState<ICategories[]>([]);

  async function getCategories() {
    const categories = await Crud.list<ICategories[]>('categories');
    setCategories(categories);
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <section className="py-8 px-4 2xl:px-0 antialiased md:py-16">
      {categories.map((item: ICategories, index) => (
        <ProductFlow key={index} {...item} />
      ))}
    </section>
  );
};

export default ProductFlowAllCaregories;
