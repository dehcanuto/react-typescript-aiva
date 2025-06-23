import { JSX } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import FlowHeader from '../FlowHeader';
import ProductCard from '../ProductCard';
import { ProductFlowPropsType } from './types';
import SkeletonProductCard from '../SkeletonProductCard';

const ProductFlow = ({
  products,
  category,
  loading,
}: ProductFlowPropsType): JSX.Element | null => {
  if (products.length === 0 && !loading) return null;

  return (
    <section className="mb-8">
      <FlowHeader title={category.name} url={category.slug} />
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <SkeletonProductCard key={index} />
          ))}
        </div>
      ) : (
        <Swiper
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={product.id}>
              <ProductCard key={index} {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default ProductFlow;
