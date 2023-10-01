"use client";
import { navbarData } from "@/app/data/navbarData";
import { useApplyEffect } from "@/app/hooks/useApplyEffect";
import { useModalState } from "@/app/hooks/useModalState";
import { classNames } from "@/utils/classNames";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { Logo } from "../Logo";
import { Modal } from "../Modal";
import ThemeSwitch from "../themeswitch/ThemeSwitch";
import ThemeToggle from "../themeswitch/ThemeToggle";
import { NavbarItems } from "./NavbarItems";

const Navbar = () => {
  const { modalOpen, openModal, closeModal } = useModalState();
  const applyEffect = useApplyEffect();

  return (
    <>
      <nav
        className={`flex z-40 w-full items-center justify-center sticky top-0 inset-x-0 ${
          applyEffect
            ? classNames(
                "backdrop-blur-xl backdrop-saturate-150 bg-light/80 transition-all",
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
                "flex gap-8 text-default-600 ",
                "after:border-r after:border-default-200",
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
              "active:bg-default-400",
              "dark:text-default-200 dark:active:bg-default-800",
              "lg:hidden"
            )}
            aria-label="Nav Menu"
            onClick={openModal}
          >
            <EllipsisVerticalIcon width={24} />
          </button>
        </header>
      </nav>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <div
          className={classNames(
            "flex flex-col justify-center gap-3 self-stretch divide-y divide divide-default-200",
            "dark:divide-default-700"
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
    </>
  );
};

export default Navbar;
