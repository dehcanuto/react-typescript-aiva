import { JSX, useEffect, useState } from 'react';

import FlowHeader from '../FlowHeader';
import ProductCard from '../ProductCard';
import { ICategories } from '@/types/categories';
import { IProduct } from '@/types/product';
import Crud from '@/services/cruds';
import SkeletonProductCard from '../SkeletonProductCard';

const ProductFlowExtended = (category: ICategories): JSX.Element | null => {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<IProduct[]>([]);

  async function getProducts(id: number) {
    try {
      const res = await Crud.list<IProduct[]>(`categories/${id}/products`);
      setProducts(res);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts(category.id);
  }, [category.id]);

  if (products.length === 0 && !loading) return null;

  return (
    <section className="mb-8">
      <FlowHeader title={category.name} />
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <SkeletonProductCard key={index} />
            ))
          : products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
      </div>
    </section>
  );
};

export default ProductFlowExtended;
