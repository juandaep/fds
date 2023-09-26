import { classNames } from "@/utils/classNames";
import { Square3Stack3DIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { FC } from "react";
import { SidebarItem, SidebarWithSubItems } from "./sidebarData";

interface SidebarItemProps {
  item: {
    title?: string;
    href?: string;
    type?: string;
    menu?: {
      href: string;
      title: string;
    }[];
  };
  pathname: string;
  onClick?: () => void;
}

const SidebarMenuItem: FC<SidebarItemProps> = ({ item, pathname, onClick }) => {
  return (
    <div onClick={onClick} className="flex flex-col gap-3">
      {"title" in item ? (
        <Link
          href={item.href || ""}
          className={`flex gap-2 items-center font-medium
            ${
              pathname === item.href
                ? classNames("text-primary-500", "dark:text-primary-50")
                : classNames("text-default-500", "dark:text-default-400")
            }
              `}
        >
          <span
            className={`p-1 rounded-lg shadow-sm ${
              pathname === item.href
                ? classNames(
                    "bg-primary-25 text-primary-500",
                    "dark:bg-primary-900 dark:text-primary-300"
                  )
                : classNames(
                    "bg-default-100 text-default-500",
                    "dark:bg-default-900 dark:text-default-400"
                  )
            }`}
          >
            <Square3Stack3DIcon className="w-5 h-5" />
          </span>
          {item.title}
        </Link>
      ) : (
        <>
          <p
            className={classNames(
              "font-semibold text-default-800",
              "dark:text-default-50"
            )}
          >
            {item.type}
          </p>
          {item.menu?.map((subItem, subIndex) => (
            <div key={subIndex} onClick={onClick}>
              <Link
                href={subItem.href}
                className={`before:block before:w-1 before:h-1 before:rounded-full flex items-center justify-start gap-3 pl-3 ${
                  pathname === subItem.href
                    ? classNames(
                        "before:bg-primary-500 text-primary-500",
                        "dark:before:bg-primary-25 dark:text-primary-50"
                      )
                    : classNames(
                        "before:bg-default-400 text-default-500",
                        "dark:before:bg-default-600 dark:text-default-400"
                      )
                }`}
              >
                {subItem.title}
              </Link>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

interface SidebarProps {
  sidebarMenuItems: (SidebarItem | SidebarWithSubItems)[];
  pathname: string;
  onClick?: () => void;
}

export const SidebarItems: React.FC<SidebarProps> = ({
  sidebarMenuItems,
  pathname,
  onClick,
}) => {
  return (
    <div className="flex flex-col gap-6 mt-4 scrollbar-hide pb-24">
      {sidebarMenuItems.map((item, index) => (
        <SidebarMenuItem
          key={index}
          item={item}
          pathname={pathname}
          onClick={onClick}
        />
      ))}
    </div>
  );
};
