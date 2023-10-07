import { classNames } from "@/utils/classNames";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { sidebarData } from "../app/data/sidebarData";

export const Breadcrumbs = () => {
  const currentPath = usePathname();

  const getBreadcrumbs = (
    items: (SidebarItem | SidebarWithSubItems)[],
    path: string,
    breadcrumbs: string[] = [],
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

  return (
    <>
      {breadcrumbs.length > 0 && (
        <div
          className={classNames(
            "flex items-center gap-2 text-default-600",
            "dark:text-default-400",
          )}
        >
          {breadcrumbs.map((crumb, index) => (
            <span key={index} className="flex gap-2 text-sm">
              {index > 0 && <ChevronRightIcon width={16} />}
              {crumb === breadcrumbs[breadcrumbs.length - 1] ? (
                <span
                  className={classNames(
                    "text-primary-500",
                    "dark:text-primary-25",
                  )}
                >
                  {crumb}
                </span>
              ) : (
                <span>{crumb}</span>
              )}
            </span>
          ))}
        </div>
      )}
    </>
  );
};
