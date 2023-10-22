"use client";
import { navbarData } from "@/data/navbarData";
import { useApplyEffect } from "@/hooks/useApplyEffect";
import { useModalState } from "@/hooks/useModalState";
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
        className={`sticky inset-x-0 top-0 z-40 flex w-full items-center justify-center ${
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
                "flex gap-8 text-default-600 ",
                "after:border-r after:border-default-200",
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
      </nav>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <div
          className={classNames(
            "divide flex flex-col justify-center gap-3 divide-y divide-default-200 self-stretch",
            "dark:divide-default-700",
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
    </>
  );
};

export default Navbar;
