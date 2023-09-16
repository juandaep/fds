"use client";
import { classNames } from "@/utils/classNames";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Modal } from "../Modal";
import ThemeToggle from "../themeswitch/ThemeToggle";
import HeaderNavLinks, { navLinks } from "./navLinks";

export const MobileNav = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
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
    </>
  );
};
