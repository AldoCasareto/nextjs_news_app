'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

type Props = {};

const SearchBox = (props: Props) => {
  const [searchInput, setSearchInput] = useState('');
  const route = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchInput) return;

    route.push(`search?term=${searchInput}`);
  };

  return (
    <form
      className='max-w-6xl px-5 flex justify-between mx-auto items-center'
      onSubmit={handleSearch}
    >
      <input
        placeholder='Search keywords'
        className='w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none bg-transparent dark:text-orange-400 flex-1'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button
        className='disabled:text-slate-500 cursor-pointer text-orange-400'
        disabled={!searchInput}
        type='submit'
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
