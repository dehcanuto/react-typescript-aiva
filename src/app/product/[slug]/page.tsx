import React from 'react';

import ProductSingle from '@/components/organisms/ProductSingle';

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = React.use(params);

  return (
    <section className="sm:py-16 antialiased">
      <ProductSingle slug={slug} />
    </section>
  );
}
