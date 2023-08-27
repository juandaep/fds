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
          active ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700'
        } px-3 py-2 rounded-md text-sm font-medium`}
      >
        {label}
    </Link>
  );
};

export default NavigationItems;
