import { usePathname } from "next/navigation";
import React from "react";
import {
  SidebarItem,
  SidebarWithSubItems,
  sidebarData,
} from "./sidebar/sidebarData";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

interface BreadcrumbsProps {
  title: string;
  href: string;
}

export const Breadcrumbs = () => {
  const currentPath = usePathname();

  const getBreadcrumbs = (
    items: (SidebarItem | SidebarWithSubItems)[],
    path: string,
    breadcrumbs: string[] = []
  ): string[] => {
    for (const item of items) {
      if ("menu" in item) {
        const submenuBreadcrumbs = getBreadcrumbs(item.menu, path, [
          ...breadcrumbs,
          item.type,
        ]);
        if (submenuBreadcrumbs.length > 0) {
          return submenuBreadcrumbs;
        }
      } else if (item.href === path) {
        return [...breadcrumbs, item.title];
      }
    }
    return [];
  };

  const breadcrumbs = getBreadcrumbs(sidebarData, currentPath);
  function generateHref(title: string): string {
    return `/components/${title.toLowerCase().replace(/ /g, "-")}`;
  }

  return (
    <>
      {breadcrumbs.length > 0 && (
        <div className="flex items-center gap-2 text-default-500">
          {breadcrumbs.map((crumb, index) => (
            <span key={index}>
              {index > 0 && (
                <span>
                  <ChevronRightIcon width={16} />
                </span>
              )}
              {crumb === breadcrumbs[breadcrumbs.length - 1] ? (
                <span className="text-default-200">{crumb}</span>
              ) : (
                <Link href={generateHref(crumb)} className="text-primary-500">
                  {crumb}
                </Link>
              )}
            </span>
          ))}
        </div>
      )}
    </>
  );
};
