"use client";
import { classNames } from "@/utils/classNames";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";
import { sidebarMenuItems } from "./sidebarNavLinks";

export const MobileSidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  function openSidebar() {
    setSidebarOpen(true);
  }
  function closeSidebar() {
    setSidebarOpen(false);
  }
  return (
    <div className={classNames("flex w-full border-t border-default-300", "md:hidden")}>
      <button
        type="button"
        className={classNames(
          "text-defaul-600 transition-all p-1",
          "focus:rounded-lg",
          "dark:text-defaul-200 dark:ring-defaul-800"
        )}
        aria-label="Nav Menu"
        onClick={openSidebar}
      >
        {isSidebarOpen ? <XMarkIcon width={24} /> : <Bars3Icon width={24} />}
      </button>

      <Transition appear show={isSidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeSidebar}>
          <div className="fixed top-28 inset-0 overflow-y-auto">
            <div className="flex min-h-screen">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel
                  className={classNames(
                    "flex flex-col items-start gap-6 w-full max-w-md transform backdrop-blur-2xl p-4 bg-light/90 dark:bg-dark/90"
                  )}
                >
                  <ul>
                    {sidebarMenuItems.map((item, index) => (
                      <li key={index}>
                        {"title" in item ? (
                          <Link
                            href={item.href}
                            passHref
                            onClick={closeSidebar}
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
                                    onClick={closeSidebar}
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
