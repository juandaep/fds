"use client";
import { Bars3Icon } from "@heroicons/react/24/solid";
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { menuItems } from "./sidebarNavLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { classNames } from "@/utils/classNames";
import { XMarkIcon } from "@heroicons/react/24/outline";

export const MobileSidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  function openModal() {
    setSidebarOpen(true);
  }
  function closeModal() {
    setSidebarOpen(false);
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
        <Bars3Icon width={24} />
      </button>

      <Transition appear show={isSidebarOpen} as={Fragment}>
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
            <div className="flex min-h-full items-center justify-center text-center">
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
                      <ul>
                        {menuItems.map((item, index) => (
                          <li key={index}>
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
                                    <li key={subIndex}>
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
