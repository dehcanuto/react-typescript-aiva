'use client';

import { JSX, useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { IProduct } from '@/types/product';
import Crud from '@/services/cruds';
import { MoneyFormat } from '@/misc/format';
import { FiShoppingCart } from 'react-icons/fi';
import ProductFlow from '@/components/molecules/ProductFlow';
import FavoriteButton from '../FavoriteButton';

const ProductSingle = ({ slug }: { slug: string }): JSX.Element | null => {
  const [product, setProduct] = useState<IProduct>();
  const [related, setRelated] = useState<IProduct[]>([]);
  const [thumbs, setThumbs] = useState<SwiperType | null>(null);

  async function getProduct(slug: string) {
    const res = await Crud.view<IProduct>('products/slug', slug);
    setProduct(res);
  }

  async function getRelateds(slug: string) {
    const res = await Crud.list<IProduct[]>(`products/slug/${slug}/related`);
    setRelated(res);
  }

  useEffect(() => {
    getProduct(slug);
    getRelateds(slug);
  }, [slug]);

  if (!product) return null;

  return (
    <div>
      <div className="grid sm:grid-cols-2 gap-8">
        <div className="max-w-md sm:max-w-lg mx-auto">
          <div>
            <Swiper
              modules={[Thumbs]}
              thumbs={{ swiper: thumbs }}
              spaceBetween={10}
              className="mb-4"
            >
              {product.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="rounded-lg bg-white" role="tabpanel">
                    <Image
                      className="w-full mx-auto"
                      src={image}
                      alt=""
                      width={250}
                      height={250}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <Swiper
            modules={[Thumbs]}
            onSwiper={setThumbs}
            slidesPerView={5}
            spaceBetween={10}
            watchSlidesProgress
            className="cursor-pointer"
            breakpoints={{
              0: { slidesPerView: 3 },
              640: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
          >
            {product.images.map((image, index) => (
              <SwiperSlide key={index}>
                <button
                  type="button"
                  className="size-20 overflow-hidden rounded-lg cursor-pointer"
                >
                  <Image
                    className="object-contain w-full h-full"
                    src={image}
                    alt=""
                    width={80}
                    height={80}
                  />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex flex-col max-w-md sm:my-auto gap-4">
          <span className="w-fit bg-slate-100 text-slate-700 text-sm font-semibold me-2 px-2.5 py-0.5 rounded">
            {product.category.name}
          </span>
          <p className="mt-4 text-xl font-bold text-gray-900">
            {product.title}
          </p>
          <p className="text-sm text-slate-500">{product.description}</p>

          <span className="mt-6 text-2xl font-extrabold text-gray-900">
            {MoneyFormat(product.price)}
          </span>

          <div className="mt-6 sm:gap-4 sm:flex sm:items-center sm:mt-8">
            <div className="sm:gap-4 sm:items-center sm:flex">
              <FavoriteButton {...product} extended />
              <a
                href="#"
                className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 z-10"
                role="button"
              >
                <FiShoppingCart className="size-5 -ms-2 me-2" />
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-16">
        {!!related.length && (
          <ProductFlow
            products={related}
            category={{ name: 'Produtos relacionados' }}
          />
        )}
      </div>
    </div>
  );
};

export default ProductSingle;
