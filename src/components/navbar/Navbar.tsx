"use client";
import { classNames } from "@/utils/classNames";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import HeaderNavLinks, { navLinks } from "./navLinks";
import ThemeSwitch from "../themeswitch/ThemeSwitch";
import ThemeToggle from "../themeswitch/ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex z-40 w-full h-auto items-center justify-center data-[menu-open=true]:border-none sticky top-0 inset-x-0 backdrop-blur-lg data-[menu-open=true]:backdrop-blur-xl backdrop-saturate-150 bg-background/70">
      <header className="z-40 flex px-6 gap-4 w-full flex-row relative flex-nowrap items-center justify-between h-[var(--navbar-height)] max-w-[1280px]">
        <Link
          href="/"
          className={classNames(
            "relative w-[60px] h-[18px]",
            "md:w-[96px] md:h-[32px]"
          )}
        >
          <Image src="/logo.svg" alt="Flux Logo" priority fill />
        </Link>
        <div className="flex gap-4 flex-row flex-nowrap items-center data-[justify=start]:justify-start data-[justify=start]:flex-grow data-[justify=start]:basis-0 data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=end]:flex-grow data-[justify=end]:basis-0 basis-1/5 sm:basis-full h-20">
          {navLinks.map((link) => (
            <HeaderNavLinks key={link.title} href={link.href}>
              {link.title}
            </HeaderNavLinks>
          ))}

          <Link
            href="https://www.figma.com/community/file/1172091403014887161"
            className={classNames(
              "transition-all flex items-center gap-2",
              "hover-animation hover:text-primary-main"
            )}
            target="_blank"
          >
            Figma
            <span className="w-4 h-4">
              <ArrowTopRightOnSquareIcon />
            </span>
          </Link>
        </div>
        <ThemeSwitch />
        <ThemeToggle />
      </header>
    </nav>
  );
};

export default Navbar;
