import { JSX, useEffect, useState } from 'react';

import { IProduct } from '@/types/product';
import { ICategories } from '@/types/categories';
import Crud from '@/services/cruds';
import ProductFlow from '@/components/molecules/ProductFlow';

const ProductFlowCaregory = (category: ICategories): JSX.Element | null => {
  const [products, setProducts] = useState<IProduct[]>([]);

  async function getProducts(id: number) {
    const res = await Crud.list<IProduct[]>(`categories/${id}/products`);
    setProducts(res);
  }

  useEffect(() => {
    getProducts(category.id);
  }, [category.id]);

  if (products.length === 0) return null;

  return <ProductFlow products={products} category={category} />;
};

export default ProductFlowCaregory;
