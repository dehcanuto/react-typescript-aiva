'use client';

import React, { useEffect, useState } from 'react';

import Crud from '@/services/cruds';
import { ICategories } from '@/types/categories';
import ProductFlowExtended from '@/components/molecules/ProductFlowExtended';

export default function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = React.use(params);
  const [category, setCategory] = useState<ICategories>();

  async function getCategory(slug: string) {
    const res = await Crud.list<ICategories>(`categories/slug/${slug}`);
    setCategory(res);
  }

  useEffect(() => {
    getCategory(slug);
  }, [slug]);

  return (
    <div className="py-8">
      {category && <ProductFlowExtended {...category} />}
    </div>
  );
}
