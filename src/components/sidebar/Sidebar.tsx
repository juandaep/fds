"use client";
import { classNames } from "@/utils/classNames";
import { sidebarData } from "../../app/data/sidebarData";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  return (
    <aside
      className={classNames(
        "hidden",
        "lg:relative lg:z-10 lg:block lg:col-span-2 lg:mt-8 lg:pr-4"
      )}
    >
      <nav
        className="fixed w-full max-w-[calc(11rem+12px)] top-20 mt-6 z-0 h-[calc(100vh-121px)] scrollbar-hide overflow-y-scroll"
        style={{
          WebkitMaskImage:
            "linear-gradient(to top, transparent 0%, #000 100px, #000 100%, transparent 100%)",
        }}
      >
        <div
          className="flex flex-col gap-4 max-h-[calc(100vh_-_64px)] pb-28"
          tabIndex={0}
        >
          <SidebarItems sidebarData={sidebarData} />
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
