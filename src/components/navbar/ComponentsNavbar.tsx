"use client";
import { classNames } from "@/utils/classNames";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Modal } from "../Modal";
import { MobileSidebar } from "../sidebar/MobileSidebar";
import { sidebarMenuItems } from "../sidebar/sidebarNavLinks";
import ThemeSwitch from "../themeswitch/ThemeSwitch";
import ThemeToggle from "../themeswitch/ThemeToggle";
import HeaderNavLinks, { navLinks } from "./navLinks";

export const ComponentsNavbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

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

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalOpen]);

  const Bars2BottomLeft = `
  before:block before:h-[2px] before:w-6 before:origin-center before:bg-default-500 before:transition-transform before:duration-300 before:ease-in-out 
  after:block after:h-[2px] after:origin-center after:bg-default-500 after:transition-transform after:duration-300 after:ease-in-out after:mt-1.5`;

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
            <div className="flex gap-8 after:border after:border-r after:border-default-200 dark:after:border-default-800">
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
        <button
          type="button"
          className={classNames(
            "group flex h-8 w-8 cursor-pointer items-center justify-center p-1 text-default-600 transition-all",
            "focus:ring-4 focus:ring-primary-focused focus:rounded-lg",
            "dark:text-default-200 dark:ring-default-800",
            "md:hidden"
          )}
          aria-label="Nav Menu"
          onClick={sidebarOpen ? closeSidebar : openSidebar}
        >
          <span
            className={`${Bars2BottomLeft} ${
              sidebarOpen
                ? "before:translate-y-1 before:rotate-45 after:-translate-y-1 after:-rotate-45 after:w-6"
                : "after:w-4"
            }`}
          ></span>
        </button>
      </nav>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <div className="flex flex-col justify-center gap-3 self-stretch divide-y divide divide-default-200 dark:divide-default-700">
          <div className="flex flex-col justify-center gap-2 self-stretch font-medium text-lg text-default-700 dark:text-default-300">
            {navLinks.map((link) => (
              <HeaderNavLinks
                key={link.title}
                href={link.href}
                onClick={closeModal}
              >
                {link.title}
              </HeaderNavLinks>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </Modal>
      <MobileSidebar isOpen={sidebarOpen} onClose={closeSidebar}>
        <div className="flex flex-col gap-2">
          <ul>
            {sidebarMenuItems.map((item, index) => (
              <li key={index} onClick={closeSidebar}>
                {"title" in item ? (
                  <Link
                    href={item.href}
                    passHref
                    className={
                      pathname === item.href
                        ? "text-amber-400"
                        : "text-default-500"
                    }
                  >
                    {item.title}
                  </Link>
                ) : (
                  <div>
                    <p className="text-default-500">{item.type}</p>
                    <ul>
                      {item.menu.map((subItem, subIndex) => (
                        <li key={subIndex} onClick={closeSidebar}>
                          <Link
                            href={subItem.href}
                            passHref
                            className={
                              pathname === subItem.href
                                ? "text-amber-400"
                                : "text-default-500"
                            }
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </MobileSidebar>
    </>
  );
};
