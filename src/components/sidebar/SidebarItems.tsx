import { classNames } from "@/utils/classNames";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const SidebarItems: React.FC<SidebarItemsProps> = ({
  sidebarData,
  onItemClick,
}) => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>(
    sidebarData.reduce((idx, item) => {
      if ("menu" in item) {
        idx[item.type] = true;
      }
      return idx;
    }, {})
  );

  const collapseItem = (type: string) => {
    setIsOpen({
      ...isOpen,
      [type]: !isOpen[type],
    });
  };

  return (
    <div className="flex flex-col gap-6 pb-24">
      {sidebarData.map((item, index) => (
        <div key={index} className="flex flex-col gap-3">
          {"menu" in item ? (
            <>
              <div
                onClick={() => collapseItem(item.type)}
                className="flex gap-3"
              >
                {item.type}
                {isOpen[item.type] ? (
                  <ChevronDownIcon width={16} />
                ) : (
                  <ChevronRightIcon width={16} />
                )}
              </div>
              {isOpen[item.type] && (
                <>
                  {item.menu.map((subItem, subIndex) => (
                    <div key={subIndex}>
                      <Link
                        href={subItem.href}
                        className={`before:block before:w-1 before:h-1 before:rounded-full flex items-center justify-start gap-3 pl-3 ${
                          isActive(subItem.href)
                            ? classNames(
                                "before:bg-primary-500 text-primary-500",
                                "dark:before:bg-primary-25 dark:text-primary-50"
                              )
                            : classNames(
                                "before:bg-default-400 text-default-500",
                                "dark:before:bg-default-600 dark:text-default-400"
                              )
                        }`}
                        onClick={onItemClick}
                      >
                        {subItem.title}
                      </Link>
                    </div>
                  ))}
                </>
              )}
            </>
          ) : (
            <Link
              href={item.href}
              className={`flex gap-2 items-center font-medium ${
                isActive(item.href)
                  ? classNames("text-primary-500", "dark:text-primary-50")
                  : classNames("text-default-500", "dark:text-default-400")
              }`}
              onClick={onItemClick}
            >
              <span
                className={`p-1 rounded-lg shadow-sm transition-colors ${
                  pathname === item.href
                    ? classNames(
                        "bg-primary-25 text-primary-500",
                        "dark:bg-primary-800 dark:text-primary-200"
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
          )}
        </div>
      ))}
    </div>
  );
};

export default SidebarItems;
