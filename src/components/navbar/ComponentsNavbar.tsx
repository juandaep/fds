"use client";
import { classNames } from "@/utils/classNames";
import Image from "next/image";
import Link from "next/link";
import { MobileSidebar } from "../sidebar/MobileSidebar";
import ThemeSwitch from "../themeswitch/ThemeSwitch";
import { MobileNav } from "./MobileNav";
import HeaderNavLinks, { navLinks } from "./navLinks";

export const ComponentsNavbar = () => {
  return (
    <nav className="nav-main flex-col">
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
          {navLinks.map((link) => (
            <HeaderNavLinks key={link.title} href={link.href}>
              {link.title}
            </HeaderNavLinks>
          ))}
        </div>
        <ThemeSwitch />
        <MobileNav />
      </header>
      <MobileSidebar />
    </nav>
  );
};
