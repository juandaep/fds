"use client";
import { useEffect, useState } from "react";

export const usePageNavigation = (sections: Section[]) => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY + window.innerHeight / 6;

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
  return activeLink;
};
