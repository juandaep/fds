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
        <Link href={item.href || ""}
            className={
              pathname === item.href ? "text-amber-400" : "text-default-500"
            }
          >
            {item.title}
        </Link>
      ) : (
        <>
          <p className="text-default-500">{item.type}</p>
          {item.menu?.map((subItem, subIndex) => (
            <div key={subIndex} onClick={onClick}>
              <Link href={subItem.href}
                  className={`before:block before:w-1 before:h-1 before:rounded-full flex items-center justify-start gap-3 pl-4 ${
                    pathname === subItem.href
                      ? "before:bg-amber-400 text-amber-400"
                      : "before:bg-default-500 text-default-500"
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

export const SidebarList: React.FC<SidebarProps> = ({
  sidebarMenuItems,
  pathname,
  onClick,
}) => {
  return (
    <div className="flex flex-col gap-4 mt-4 scrollbar-hide pb-24">
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
