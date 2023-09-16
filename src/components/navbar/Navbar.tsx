"use client";
import { classNames } from "@/utils/classNames";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeSwitch from "../themeswitch/ThemeSwitch";
import HeaderNavLinks, { navLinks } from "./navLinks";
import { Modal } from "../Modal";
import ThemeToggle from "../themeswitch/ThemeToggle";

const Navbar = () => {
  const [applyBlur, setApplyBlur] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

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

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalOpen]);

  return (
    <>
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
            <div className="flex gap-8 font-medium after:border after:border-r after:border-default-200 dark:after:border-default-800 text-default-600 dark:text-default-200">
              {navLinks.map((link) => (
                <HeaderNavLinks key={link.title} href={link.href}>
                  {link.title}
                </HeaderNavLinks>
              ))}
            </div>
            <ThemeSwitch />
          </div>
          <button
            type="button"
            className={classNames(
              "p-1 text-default-600 transition-all",
              "focus:ring-4 focus:ring-primary-focused focus:rounded-lg",
              "dark:text-default-200 dark:ring-default-800",
              "md:hidden"
            )}
            aria-label="Nav Menu"
            onClick={openModal}
          >
            <EllipsisVerticalIcon width={24} />
          </button>
        </header>
      </nav>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <div className="flex flex-col justify-center gap-3 self-stretch divide-y divide divide-default-200 dark:divide-default-700">
          <div
            className="flex flex-col justify-center gap-2 self-stretch text-default-700 dark:text-default-300"
            onClick={closeModal}
          >
            {navLinks.map((link) => (
              <HeaderNavLinks
                key={link.title}
                href={link.href}
                className="py-2 px-3 rounded-lg"
              >
                {link.title}
              </HeaderNavLinks>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
