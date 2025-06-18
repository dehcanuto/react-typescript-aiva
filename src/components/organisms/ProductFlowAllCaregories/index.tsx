'use client';

import { JSX, useEffect, useState } from 'react';

import Crud from '@/services/cruds';

import { ICategories } from '@/types/categories';
import ProductFlowCaregory from '../ProductFlowCaregory';
import ProductFlow from '@/components/molecules/ProductFlow';

const ProductFlowAllCaregories = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<ICategories[]>([]);

  async function getCategories() {
    try {
      const categories = await Crud.list<ICategories[]>('categories');
      setCategories(categories);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="p-4 antialiased">
      {loading ? (
        <ProductFlow
          loading={loading}
          products={[]}
          category={{ name: '', slug: undefined }}
        />
      ) : (
        categories.map((category: ICategories, index) => (
          <ProductFlowCaregory key={index} {...category} />
        ))
      )}
    </div>
  );
};

export default ProductFlowAllCaregories;
