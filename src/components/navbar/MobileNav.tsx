"use client";
import { classNames } from "@/utils/classNames";
import { Dialog, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Fragment, useState } from "react";
import ThemeToggle from "../themeswitch/ThemeToggle";
import { navLinks } from "./navLinks";

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
          "p-1 text-base-600 transition-all",
          "focus:ring-4 focus:ring-primary-focused focus:rounded-lg",
          "dark:text-base-200 dark:ring-base-800"
        )}
        aria-label="Nav Menu"
        onClick={openModal}
      >
        <EllipsisVerticalIcon className="w-6 h-6" />
      </button>

      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                    "flex flex-col justify-center items-start gap-6 w-full max-w-md transform rounded-lg bg-white p-3 text-left align-middle shadow-xl transition-all"
                  )}
                >
                  <div className="flex flex-col justify-center gap-2 self-stretch divide-y divide divide-base-300">
                    <div className="flex flex-col justify-center gap-3 self-stretch font-medium text-lg text-base-700">
                      {navLinks.map((link) => (
                        <Link
                          key={link.title}
                          href={link.href}
                          onClick={closeModal}
                          className={classNames(
                            "flex px-2 py-3 items-center gap-2 self-stretch",
                            "active:rounded-lg active:bg-base-50"
                          )}
                        >
                          {link.title}
                        </Link>
                      ))}
                    </div>
                    <ThemeToggle />
                  </div>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="flex px-4 py-2 justify-center self-stretch rounded-lg bg-primary-surface text-primary-main"
                  >
                    Close
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
