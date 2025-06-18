import { JSX, useEffect, useState } from 'react';

import { IProduct } from '@/types/product';
import { ICategories } from '@/types/categories';
import Crud from '@/services/cruds';
import ProductFlow from '@/components/molecules/ProductFlow';

const ProductFlowCaregory = (category: ICategories): JSX.Element | null => {
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

  return (
    <ProductFlow products={products} category={category} loading={loading} />
  );
};

export default ProductFlowCaregory;
