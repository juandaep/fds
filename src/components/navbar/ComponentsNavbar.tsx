"use client";
import { classNames } from "@/utils/classNames";
import Image from "next/image";
import Link from "next/link";
import { MobileSidebar } from "../sidebar/MobileSidebar";
import ThemeSwitch from "../themeswitch/ThemeSwitch";
import { MobileNav } from "./MobileNav";
import HeaderNavLinks, { navLinks } from "./navLinks";
import { useEffect, useState } from "react";

export const ComponentsNavbar = () => {
  const [applyBlur, setApplyBlur] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 20) {
        setApplyBlur(true);
      } else {
        setApplyBlur(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-40 px-4 md:px-6 py-4 items-center justify-center inset-x-0 ${
        applyBlur
          ? "backdrop-blur-lg backdrop-saturate-150 bg-light/80 dark:bg-dark/80 transition-all"
          : ""
      }`}
    >
      <header className="z-40 flex mx-auto md:px-4 gap-4 w-full flex-row relative flex-nowrap items-center justify-between max-w-7xl">
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
          <div className="flex gap-8 after:border after:border-r after:border-default-200 dark:after:border-default-800">
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
      <MobileSidebar />
    </nav>
  );
};
