"use client"
import { classNames } from '@/utils/classNames'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HeaderNavLinks, { navLinks } from './navLinks'
import ThemeSwitch from '../themeswitch/ThemeSwitch'
import { MobileNav } from './MobileNav'
import { Bars3Icon } from '@heroicons/react/24/outline'

export const ComponentsNavbar = () => {
  return (
    <nav className="flex flex-col gap-3 z-40 w-full px-6 py-4 items-center justify-center sticky top-0 inset-x-0 backdrop-blur-xl backdrop-saturate-100 bg-light/70 dark:bg-dark/70">
      <header className="z-40 flex mx-auto gap-4 w-full flex-row relative flex-nowrap items-center justify-between max-w-[1280px]">
        <Link
          href="/"
          className={classNames(
            "relative w-[60px] h-[18px]",
            "md:w-[96px] md:h-[32px]"
          )}
        >
          <Image src="/logo.svg" alt="Flux Logo" priority fill />
        </Link>
        <div className="hidden md:flex gap-4 flex-row flex-nowrap items-center justify-end flex-grow basis-1/5 sm:basis-full">
          {navLinks.map((link) => (
            <HeaderNavLinks key={link.title} href={link.href}>
              {link.title}
            </HeaderNavLinks>
          ))}
        </div>
        <ThemeSwitch />
        <MobileNav />
      </header>
      <div className='w-full mx-auto py-3 border-y border-default-200 dark:border-default-700 lg:hidden'>
        <Bars3Icon width={24} />
      </div>
    </nav>
  )
}
