import { menu } from '@/constants/menu';
import Link from 'next/link';
import { JSX } from 'react';

const BaseFooter = (): JSX.Element => {
  const recentYear = new Date().getFullYear();
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10">
      <div className="mx-auto max-w-screen-xl text-center">
        <Link
          href="/"
          className="flex justify-center items-center text-xl font-semibold text-gray-900"
        >
          MyEcommerce
        </Link>
        <p className="my-6 text-gray-500">
          Made with ❤️ and a lot of coffee. Built by hand, with care — just for
          you.
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900">
          {menu.map((item, index) => (
            <li key={index} className="shrink-0">
              <Link
                href={{ pathname: item.slug }}
                className="mr-4 hover:underline md:mr-6"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <span className="text-sm text-gray-500 sm:text-center">
          © {recentYear}
          <a href="https://andrecanuto.dev.br" className="ms-2 hover:underline">
            André Canuto
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default BaseFooter;
