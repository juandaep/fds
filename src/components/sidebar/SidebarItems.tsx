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
    }, {}),
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
                        className={`flex items-center justify-start gap-3 pl-3 before:block before:h-1 before:w-1 before:rounded-full ${
                          isActive(subItem.href)
                            ? classNames(
                                "text-primary-500 before:bg-primary-500",
                                "dark:text-primary-50 dark:before:bg-primary-25",
                              )
                            : classNames(
                                "text-default-500 before:bg-default-400",
                                "dark:text-default-400 dark:before:bg-default-600",
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
              className={`flex items-center gap-2 font-medium ${
                isActive(item.href)
                  ? classNames("text-primary-500", "dark:text-primary-50")
                  : classNames("text-default-500", "dark:text-default-400")
              }`}
              onClick={onItemClick}
            >
              <span
                className={`rounded-lg p-1 shadow-sm transition-colors ${
                  pathname === item.href
                    ? classNames(
                        "bg-primary-25 text-primary-500",
                        "dark:bg-primary-800 dark:text-primary-200",
                      )
                    : classNames(
                        "bg-default-100 text-default-500",
                        "dark:bg-default-900 dark:text-default-400",
                      )
                }`}
              >
                <Square3Stack3DIcon className="h-5 w-5" />
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
