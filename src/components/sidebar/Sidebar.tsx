"use client";
import { classNames } from "@/utils/classNames";
import { sidebarData } from "../../data/sidebarData";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  return (
    <aside
      className={classNames(
        "hidden",
        "lg:relative lg:z-10 lg:col-span-2 lg:mt-8 lg:block lg:pr-4",
      )}
    >
      <nav
        className="scrollbar-hide fixed top-20 z-0 mt-6 h-[calc(100vh-121px)] w-full max-w-[calc(11rem+12px)] overflow-y-scroll"
        style={{
          WebkitMaskImage:
            "linear-gradient(to top, transparent 0%, #000 100px, #000 100%, transparent 100%)",
        }}
      >
        <div
          className="flex max-h-[calc(100vh_-_64px)] flex-col gap-4 pb-28"
          tabIndex={0}
        >
          <SidebarItems sidebarData={sidebarData} />
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
