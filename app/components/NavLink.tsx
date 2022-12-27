import Link from 'next/link';
import React from 'react';

type NavProps = {
  category: string;
  isActive: boolean;
};

const NavLink = ({ isActive, category }: NavProps) => {
  return (
    <Link
      className={`navlink ${
        isActive && 'underline decoration-orange-400 underline-offset-4 font-bold'
      }`}
      href={`/news/${category}`}
    >
      {category}
    </Link>
  );
};

export default NavLink;
