"use client";
import { classNames } from "@/utils/classNames";
import { Dialog, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import ThemeToggle from "../themeswitch/ThemeToggle";
import HeaderNavLinks, { navLinks } from "./navLinks";

export const MobileNav = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }
  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div
      className={classNames("flex justify-center items-center", "md:hidden")}
    >
      <button
        type="button"
        className={classNames(
          "p-1 text-default-600 transition-all",
          "focus:ring-4 focus:ring-primary-focused focus:rounded-lg",
          "dark:text-default-200 dark:ring-default-800"
        )}
        aria-label="Nav Menu"
        onClick={openModal}
      >
        <EllipsisVerticalIcon width={24} />
      </button>

      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-base-400 bg-opacity-30 backdrop-blur-sm"></div>
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-6 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={classNames(
                    "flex flex-col justify-center items-start gap-6 w-full max-w-md transform rounded-lg bg-light p-3 text-left align-middle shadow-xl transition-all", 'dark:bg-default-900'
                  )}
                >
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
