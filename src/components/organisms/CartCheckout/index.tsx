'use client';

import { MoneyFormat } from '@/misc/format';
import { useAppSelector } from '@/store/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';

const TAX_RATE = 0.0825;
const DELIVERY_FEE = 100;
const DISCOUNT_VALUE = 100;
const DISCOUNT_THRESHOLD = 200;

const CartCheckout = (): JSX.Element => {
  const products = useAppSelector((state) => state.cart.items);

  const subtotal = products.reduce((sum, p) => sum + p.price, 0);
  const discount = subtotal >= DISCOUNT_THRESHOLD ? DISCOUNT_VALUE : 0;
  const taxedBase = subtotal - discount;
  const tax = taxedBase * TAX_RATE;
  const deliveryFee = subtotal > 0 ? DELIVERY_FEE : 0;
  const total = taxedBase + tax + deliveryFee;

  const fmt = MoneyFormat;
  const fmtSubtotal  = fmt(subtotal);
  const fmtDiscount  = fmt(discount);
  const fmtDelivery  = fmt(deliveryFee);
  const fmtTax       = fmt(tax);
  const fmtTotal     = fmt(total);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
          Shopping cart
        </h2>
        <table className="mt-5 w-full text-left font-medium text-gray-900 md:table-fixed">
          <tbody className="bg-white shadow divide-y divide-gray-200 rounded-lg">
            {products.map((item) => (
              <tr
                key={item.id}
                className="flex items-center justify-between p-4"
              >
                <td className="whitespace-nowrap md:w-[384px]">
                  <div className="flex items-center gap-4">
                    <Link
                      href={{ pathname: `/product/${item.slug}` }}
                      className="flex items-center aspect-square size-14 shrink-0"
                    >
                      <Image
                        src={item.images[0]}
                        width={80}
                        height={80}
                        alt={item.title}
                        className="rounded-lg"
                      />
                    </Link>
                    <Link
                      href={{ pathname: `/product/${item.slug}` }}
                      className="hover:underline"
                    >
                      {item.title}
                    </Link>
                  </div>
                </td>
                <td className="p-4 text-right text-base font-bold text-gray-900">
                  {MoneyFormat(item.price)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 bg-white max-w-sm mx-auto">
        <div className="mt-6 space-y-4">
          <h4 className="text-lg font-semibold text-gray-900">
            Billing & Delivery information
          </h4>
          <dl>
            <dt className="text-base font-medium text-gray-900">Individual</dt>
            <dd className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
              Bonnie Green - +1 234 567 890, San Francisco, California, United
              States, 3454, Scott Street
            </dd>
          </dl>
        </div>
        <div className="mt-4 space-y-6">
          <h4 className="text-xl font-semibold text-gray-900">Order summary</h4>

          <div className="space-y-4">
            <div className="space-y-2">
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-gray-500 dark:text-gray-400">
                  Items ({products.length})
                </dt>
                <dd className="text-base font-medium text-gray-900">
                  {fmtSubtotal}
                </dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-gray-500 dark:text-gray-400">Savings</dt>
                <dd className="text-base font-medium text-green-500">
                  {fmtDiscount}
                </dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-gray-500 dark:text-gray-400">
                  Shipping
                </dt>
                <dd className="text-base font-medium text-gray-900">{fmtDelivery}</dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-gray-500 dark:text-gray-400">Tax <small>({(TAX_RATE*100).toFixed(2)}%)</small></dt>
                <dd className="text-base font-medium text-gray-900">{fmtTax}</dd>
              </dl>
            </div>

            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
              <dt className="text-lg font-bold text-gray-900">Total</dt>
              <dd className="text-lg font-bold text-gray-900">{fmtTotal}</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;
