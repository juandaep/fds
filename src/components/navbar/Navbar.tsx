"use client";
import { classNames } from "@/utils/classNames";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitch from "../themeswitch/ThemeSwitch";
import HeaderNavLinks, { navLinks } from "./navLinks";
import { MobileNav } from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="nav-main">
      <header className="header-main">
        <Link
          href="/"
          className={classNames(
            "relative w-[60px] h-[18px]",
            "md:w-[96px] md:h-[32px]"
          )}
        >
          <Image src="/logo.svg" alt="Flux Logo" priority fill />
        </Link>
        <div className="hidden md:flex gap-8 flex-row flex-nowrap items-center justify-end flex-grow basis-1/5 sm:basis-full">
          <div className="flex gap-8 after:border after:border-r after:border-default-200">
          {navLinks.map((link) => (
            <HeaderNavLinks key={link.title} href={link.href}>
              {link.title}
            </HeaderNavLinks>
          ))}
          </div>
        <ThemeSwitch />
        </div>
        <MobileNav />
      </header>
    </nav>
  );
};

export default Navbar;
