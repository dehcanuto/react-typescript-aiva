'use client';

import { JSX, useEffect, useMemo, useCallback, useState, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiChevronDown, FiSearch } from 'react-icons/fi';

import BaseDropdown from '@/components/molecules/BaseDropdown';
import { ICategories } from '@/types/categories';
import Crud from '@/services/cruds';

const HeaderSearch = (): JSX.Element => {
  const router = useRouter();
  
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [query, setQuery] = useState('');

  const getCategories = useCallback(async () => {
    const data = await Crud.list<ICategories[]>('categories');
    setCategories(data);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (query.trim()) params.set('q', query.trim());

    router.push(`/search?${params.toString()}`);
  };

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const sortedCategories = useMemo(
    () => [...categories].sort((a, b) => a.name.localeCompare(b.name)),
    [categories]
  );

  return (
    <form onSubmit={handleSubmit} className="relative flex-1 hidden max-w-lg sm:block">
      <div className="flex -space-x-0.5">
        <BaseDropdown
          trigger={() => (
            <button
              type="button"
              className="inline-flex items-center w-34 px-3 py-2 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100"
            >
              All categories
              <FiChevronDown className="w-4 h-4 ms-2 -me-0.5" />
            </button>
          )}
        >
          <ul className="p-2 w-40 text-sm text-gray-900 bg-white rounded-lg">
            {sortedCategories.map((item) => (
              <li key={item.id ?? item.name}>
                <Link
                  href={{ pathname: `category/${item.slug}` }}
                  className="block px-3 py-2 capitalize rounded-md hover:bg-gray-100"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </BaseDropdown>
        <div className="relative w-full">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="block p-2 pe-11 w-full text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 placeholder:text-gray-400 focus:outline-none"
            placeholder="What can we help you find today?"
            required
          />
          <button
            type="submit"
            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full bg-primary-700 rounded-e-lg border border-gray-300 hover:bg-primary-800 focus:outline focus:outline-2 focus:outline-transparent focus:outline-offset-2 focus:ring-primary-300"
          >
            <FiSearch />
          </button>
        </div>
      </div>
    </form>
  );
};

export default HeaderSearch;
