"use client";
import React, { useEffect, useState } from "react";
import NavigationItems from "./NavigationItems";
import BackToTopButton from "../BackToTopButton";

interface Section {
  id: string;
  label: string;
}

interface NavigationProps {
  sections: Section[];
}

const Navigation: React.FC<NavigationProps> = ({ sections }) => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY + window.innerHeight / 2;

      const activeSection = sections.find((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          return (
            currentPosition >= offsetTop &&
            currentPosition < offsetTop + offsetHeight
          );
        }
        return false;
      });

      setActiveLink(activeSection?.id || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return (
    <aside className="hidden z-10 xl:flex xl:col-span-2 mt-8 pl-4">
      <div
        className="fixed w-full max-w-[12rem] flex flex-col gap-4 text-left top-20 pb-20 h-[calc(100vh-121px)] scrollbar-hide overflow-y-scroll"
        style={{
          WebkitMaskImage:
            "linear-gradient(to top, transparent 0%, #000 100px, #000 100%, transparent 100%)",
        }}
      >
        <p className="text-sm">My Navigation App</p>
        <div className="scrollbar-hide flex flex-col gap-2">
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
