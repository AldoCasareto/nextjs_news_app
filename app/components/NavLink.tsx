import Link from 'next/link';
import React from 'react';

type NavProps = {
  category: string;
  isActive: boolean;
};

const NavLink = ({ isActive, category }: NavProps) => {
  return (
    <div>
      <Link href={`/${category}`}>{category}</Link>
    </div>
  );
};

export default NavLink;
