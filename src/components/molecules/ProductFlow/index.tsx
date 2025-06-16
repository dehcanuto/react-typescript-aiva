import { JSX, useEffect, useState } from 'react';

import FlowHeader from '../FlowHeader';
import { ProductFlowPropsType } from './types';
import { IProduct } from '@/types/product';
import Crud from '@/services/cruds';
import ProductCard from '../ProductCard';

const ProductFlow = ({ id, name, slug }: ProductFlowPropsType): JSX.Element => {
  const [products, setProducts] = useState<IProduct[]>([]);

  async function getProducts(id: number) {
    const res = await Crud.list<IProduct[]>(`categories/${id}/products`);
    setProducts(res);
  }

  useEffect(() => {
    getProducts(id);
  }, [id]);

  return (
    <section>
      <FlowHeader title={name} url={slug} />
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
        {products.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ProductFlow;
