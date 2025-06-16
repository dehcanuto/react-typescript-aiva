'use client';

import { JSX, useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { FiSearch } from 'react-icons/fi';

const HeaderSearch = (): JSX.Element => {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (query.trim()) params.set('q', query.trim());

    router.push(`/search?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex-1 hidden max-w-lg sm:block"
    >
      <div className="relative w-full">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="block p-2 ps-4 pe-11 w-full text-sm text-gray-900 bg-gray-50 rounded-e-lg border border-2 border-gray-50 border-gray-300 placeholder:text-gray-400 focus:outline-none rounded-lg"
          placeholder="What can we help you find today?"
          required
        />
        <button
          type="submit"
          className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full rounded-e-lg border border-gray-300 focus:outline focus:outline-2 focus:outline-transparent focus:outline-offset-2 focus:ring-primary-300"
        >
          <FiSearch />
        </button>
      </div>
    </form>
  );
};

export default HeaderSearch;
