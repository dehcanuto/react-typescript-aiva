import { JSX } from 'react';
import Link from 'next/link';
import { FaRegUser } from 'react-icons/fa6';

import { menu } from '@/constants/menu';
import MenuCart from '@/components/organisms/MenuCart';

const BaseHeader = (): JSX.Element => {
  return (
    <nav className="bg-white antialiased border-b border-slate-200">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="shrink-0">
              <Link href="/" className="flex font-bold text-primary">
                MyEcommerce
              </Link>
            </div>
            <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
              {menu.map((item, index) => (
                <li key={index} className="shrink-0">
                  <Link
                    href={{ pathname: item.slug }}
                    className="flex font-medium text-gray-900 hover:text-primary-700"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center lg:space-x-2">
            <MenuCart />
            <Link
              href="/"
              className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 text-gray-900 gap-3"
            >
              <FaRegUser />
              Account
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BaseHeader;
