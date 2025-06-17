import { JSX } from 'react';
import Link from 'next/link';
import { FiMenu, FiSearch } from 'react-icons/fi';

import HeaderSearch from '@/components/organisms/HeaderSearch';
import HeaderFavorites from '@/components/organisms/HeaderFavorites';
import HeaderCart from '@/components/organisms/HeaderCart';
import HeaderProfile from '@/components/organisms/HeaderProfile';
import { menu } from '@/constants/menu';

const BaseHeader = (): JSX.Element => {
  return (
    <nav className="bg-white bg-gray-800 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-0">
        <div className="py-4 border-b border-slate-200 text-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center flex-1 gap-4">
              <Link href="/" className="flex font-bold text-primary text-xl">
                MyEcommerce
              </Link>
              <HeaderSearch />
            </div>
            <div className="flex items-center justify-end">
              <div className="relative sm:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"
                >
                  <FiSearch className="size-5" />
                </button>
              </div>
              <HeaderFavorites />
              <HeaderCart />
              <HeaderProfile />
              <button
                type="button"
                className="flex sm:hidden items-center rounded-lg justify-center gap-2 p-2 hover:bg-gray-100 text-sm font-medium leading-none text-gray-900"
              >
                <FiMenu className="size-5 text-gray-900" />
                Menu
              </button>
            </div>
          </div>
        </div>
        <form
          action="#"
          className="w-full sm:w-auto sm:flex-1 sm:order-2 hidden pt-4"
        >
          <div className="relative">
            <input
              type="search"
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 text-gray-700 border-gray-600 placeholder:text-gray-400"
              placeholder="Search in all categories 2"
              required
            />
            <button
              type="submit"
              className="absolute end-1.5 bg-primary-700 hover:bg-primary-800 focus:outline focus:outline-2 focus:outline-transparent focus:outline-offset-2 focus:ring-primary-300 font-medium rounded-lg text-sm px-3"
            >
              Search
            </button>
          </div>
        </form>
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 py-4 sm:gap-4">
          <div className="flex items-center">
            <ul className="items-center hidden sm:flex gap-8">
              {menu.map((item, index) => (
                <li key={index} className="shrink-0">
                  <Link
                    href={{ pathname: item.slug }}
                    className="block text-sm font-medium text-gray-900 hover:text-primary-700"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full bg-gray-50 text-gray-700 border-gray-600 border border-slate-200 rounded-lg py-3 hidden px-4 mt-2">
            <ul className="text-gray-900 text-sm font-medium">
              {menu.map((item, index) => (
                <li key={index}>
                  <Link
                    href={{ pathname: item.slug }}
                    className="hover:text-primary-700"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BaseHeader;
