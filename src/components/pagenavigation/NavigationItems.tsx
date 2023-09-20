"use client"
import React from 'react';
import Link from 'next/link';

interface NavigationItemProps {
  href: string;
  label: string;
  active: boolean;
}

const NavigationItems: React.FC<NavigationItemProps> = ({ href, label, active }) => {
  return (
    <Link href={href} passHref
        className={`${
          active ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400'
        } px-1.5 py-1 text-sm font-medium`}
      >
        {label}
    </Link>
  );
};

export default NavigationItems;
