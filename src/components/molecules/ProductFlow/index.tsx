import { JSX } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import FlowHeader from '../FlowHeader';
import ProductCard from '../ProductCard';
import { ProductFlowPropsType } from './types';

const ProductFlow = ({
  products,
  category,
}: ProductFlowPropsType): JSX.Element | null => {
  if (products.length === 0) return null;

  return (
    <section className="mb-8">
      <FlowHeader title={category.name} url={category.slug} />
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 4.5 },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={product.id}>
            <ProductCard key={index} {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductFlow;
