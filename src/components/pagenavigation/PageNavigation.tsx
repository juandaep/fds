"use client";
import { usePageNavigation } from "@/app/hooks/usePageNavigation";
import { classNames } from "@/utils/classNames";
import { FC } from "react";
import BackToTopButton from "../BackToTopButton";
import NavigationItems from "./NavigationItems";

const Navigation: FC<NavigationProps> = ({ sections }) => {
  const activeLink = usePageNavigation(sections);

  return (
    <aside
      className={classNames(
        "hidden",
        "xl:z-10 xl:flex xl:col-span-2 xl:mt-8 xl:pl-4"
      )}
    >
      <div
        className="fixed w-full max-w-[12rem] flex flex-col gap-3 text-left top-20 mt-6 pb-20 h-[calc(100vh-121px)] scrollbar-hide overflow-y-scroll"
        style={{
          WebkitMaskImage:
            "linear-gradient(to top, transparent 0%, #000 100px, #000 100%, transparent 100%)",
        }}
      >
        <div className="scrollbar-hide flex flex-col gap-3">
          <p
            className={classNames(
              "text-sm text-default-800",
              "dark:text-default-100"
            )}
          >
            On this page
          </p>
          {sections.map((section) => (
            <NavigationItems
              key={section.id}
              href={`#${section.id}`}
              label={section.label}
              active={activeLink === section.id}
            />
          ))}
        </div>
        <BackToTopButton />
      </div>
    </aside>
  );
};

export default Navigation;
