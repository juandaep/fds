"use client";
import { navbarData } from "@/data/navbarData";
import { sidebarData } from "@/data/sidebarData";
import { useApplyEffect } from "@/hooks/useApplyEffect";
import { useModalState } from "@/hooks/useModalState";
import { useSidebarState } from "@/hooks/useSidebarState";
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
        className={`sticky inset-x-0 top-0 z-40 flex w-full flex-col items-center justify-center ${
          applyEffect
            ? classNames(
                "bg-light/70 shadow-sm backdrop-blur-xl backdrop-saturate-150 transition-shadow",
                "dark:bg-dark/70",
              )
            : ""
        }`}
      >
        <header className="relative z-40 flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <Logo />
          <div
            className={classNames(
              "hidden",
              "sm:basis-full",
              "lg:flex lg:flex-grow lg:basis-1/5 lg:flex-row lg:flex-nowrap lg:items-center lg:justify-end lg:gap-8",
            )}
          >
            <div
              className={classNames(
                "flex gap-8 text-default-600",
                "after:border-r after:border-default-300",
                "dark:text-default-200 dark:after:border-default-800",
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
              "rounded-lg p-1 text-default-500 outline-none transition-all",
              "dark:text-default-400",
              "lg:hidden",
            )}
            aria-label="Nav Menu"
            onClick={openModal}
          >
            <EllipsisVerticalIcon width={24} />
          </button>
        </header>
        <div
          className={classNames(
            "block w-[calc(100%-3rem)] border-b border-default-200",
            "dark:border-default-800",
            "lg:hidden",
          )}
        />
        <div
          className={classNames(
            "flex w-full gap-6 px-6 pb-2 pt-2",
            "lg:hidden",
          )}
        >
          <button
            type="button"
            className={classNames(
              "flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg p-1 text-default-500 transition-all",
              "dark:text-default-400",
            )}
            aria-label="Nav Menu"
            onClick={sidebarOpen ? closeSidebar : openSidebar}
          >
            <span
              className={`${Bars2BottomLeft} ${
                sidebarOpen
                  ? "before:translate-y-1 before:rotate-45 after:w-6 after:-translate-y-1 after:-rotate-45"
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
            "divide flex flex-col justify-center gap-3 divide-y divide-default-200 self-stretch",
            "dark:divide-default-800",
          )}
        >
          <div
            className={classNames(
              "flex flex-col justify-center gap-2 self-stretch text-default-700",
              "dark:text-default-300",
            )}
            onClick={closeModal}
          >
            {navbarData.map((link) => (
              <NavbarItems
                key={link.title}
                href={link.href}
                className="rounded-lg px-3 py-2"
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
