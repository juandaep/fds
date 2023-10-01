"use client";
import { navbarData } from "@/app/data/navbarData";
import { sidebarData } from "@/app/data/sidebarData";
import { useApplyEffect } from "@/app/hooks/useApplyEffect";
import { useModalState } from "@/app/hooks/useModalState";
import { useSidebarState } from "@/app/hooks/useSidebarState";
import { classNames } from "@/utils/classNames";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { Breadcrumbs } from "../Breadcrumbs";
import { Logo } from "../Logo";
import { Modal } from "../Modal";
import { MobileSidebar } from "../sidebar/MobileSidebar";
import SidebarItems from "../sidebar/SidebarItems";
import ThemeSwitch from "../themeswitch/ThemeSwitch";
import ThemeToggle from "../themeswitch/ThemeToggle";
import { NavbarItems } from "./NavbarItems";

export const ComponentsNavbar = () => {
  const { sidebarOpen, openSidebar, closeSidebar } = useSidebarState();
  const { modalOpen, openModal, closeModal } = useModalState();
  const applyEffect = useApplyEffect();

  const Bars2BottomLeft = `
  before:block before:h-[2px] before:w-6 before:origin-center before:bg-default-500 before:transition-transform before:duration-300 before:ease-in-out 
  after:block after:h-[2px] after:origin-center after:bg-default-500 after:transition-transform after:duration-300 after:ease-in-out after:mt-1.5`;

  return (
    <>
      <nav
        className={`flex flex-col x z-40 w-full items-center justify-center sticky top-0 inset-x-0 ${
          applyEffect
            ? classNames(
                "backdrop-blur-xl backdrop-saturate-150 bg-light/80 shadow-sm transition-shadow",
                "dark:bg-dark/80"
              )
            : ""
        }`}
      >
        <header className="flex z-40 px-6 py-4 gap-4 relative w-full items-center justify-between max-w-7xl">
          <Logo />
          <div
            className={classNames(
              "hidden",
              "sm:basis-full",
              "lg:flex lg:gap-8 lg:flex-row lg:flex-nowrap lg:items-center lg:justify-end lg:flex-grow lg:basis-1/5"
            )}
          >
            <div
              className={classNames(
                "flex gap-8 text-default-600",
                "after:border-r after:border-default-300",
                "dark:after:border-default-800 dark:text-default-200"
              )}
            >
              {navbarData.map((link) => (
                <NavbarItems key={link.title} href={link.href}>
                  {link.title}
                </NavbarItems>
              ))}
            </div>
            <ThemeSwitch />
          </div>
          <button
            type="button"
            className={classNames(
              "p-1 text-default-600 transition-all rounded-lg outline-none",
              "active:bg-default-400 active:rounded-lg",
              "dark:text-default-200 dark:active:bg-default-800",
              "lg:hidden"
            )}
            aria-label="Nav Menu"
            onClick={openModal}
          >
            <EllipsisVerticalIcon width={24} />
          </button>
        </header>
        <div
          className={classNames(
            "block border-b border-default-200 w-[calc(100%-3rem)]",
            "dark:border-default-800",
            "lg:hidden"
          )}
        />
        <div
          className={classNames(
            "flex w-full px-6 pb-2 pt-2 gap-6",
            "lg:hidden"
          )}
        >
          <button
            type="button"
            className={classNames(
              "flex h-8 w-8 cursor-pointer items-center justify-center p-1 rounded-lg text-default-600 transition-all",
              "active:bg-default-400",
              "dark:text-default-200 dark:active:bg-default-800"
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
          <Breadcrumbs />
        </div>
      </nav>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <div
          className={classNames(
            "flex flex-col justify-center gap-3 self-stretch divide-y divide divide-default-200",
            "dark:divide-default-800"
          )}
        >
          <div
            className={classNames(
              "flex flex-col justify-center gap-2 self-stretch text-default-700",
              "dark:text-default-300"
            )}
            onClick={closeModal}
          >
            {navbarData.map((link) => (
              <NavbarItems
                key={link.title}
                href={link.href}
                className="py-2 px-3 rounded-lg"
              >
                {link.title}
              </NavbarItems>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </Modal>
      <MobileSidebar isOpen={sidebarOpen} onClose={closeSidebar}>
        <SidebarItems sidebarData={sidebarData} onItemClick={closeSidebar} />
      </MobileSidebar>
    </>
  );
};
