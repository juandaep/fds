"use client";
import { classNames } from "@/utils/classNames";
import { usePathname } from "next/navigation";
import { sidebarData } from "../../app/data/sidebarData";
import { SidebarItems } from "./SidebarItems";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside
      className={classNames(
        "hidden",
        "lg:relative lg:z-10 lg:block lg:col-span-2 lg:mt-8 lg:pr-4"
      )}
    >
      <nav className="fixed top-20 mt-2 z-0 h-[calc(100vh-121px)]">
        <div
          className="flex flex-col gap-4 scrollbar-hide overflow-y-scroll max-h-[calc(100vh_-_64px)] pb-28"
          tabIndex={0}
          style={{
            WebkitMaskImage:
              "linear-gradient(to top, transparent 0%, #000 100px, #000 100%, transparent 100%)",
          }}
        >
          <SidebarItems sidebarMenuItems={sidebarData} pathname={pathname} />
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
