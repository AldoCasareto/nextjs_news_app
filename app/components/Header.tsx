import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import NavLinks from '../NavLinks';
import SearchBox from './SearchBox';

const Header = () => {
  return (
    <header>
      <div className='grid grid-cols-3 items-center p-10'>
        <Bars3Icon className='h-8 w-8 cursor-pointer' />
        <Link href='/' prefetch={false}>
          <h1 className='text-4xl font-serif text-center'>
            Updated
            <span className='underline decoration-6 decoration-orange-600'> WorldWide </span>
            News!
          </h1>
        </Link>
        <div className='flex items-center justify-end space-x-2'>
          <button className='hidden md:inline rounded-full bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 dark:bg-slate-800'>
            Subscribe now
          </button>
        </div>
      </div>
      <NavLinks />
      <SearchBox />
    </header>
  );
};

export default Header;
