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
    <div className="p-4 antialiased">
      {categories.map((category: ICategories, index) => (
        <ProductFlow key={index} {...category} />
      ))}
    </div>
  );
};

export default ProductFlowAllCaregories;
