"use client";
import { classNames } from "@/utils/classNames";
import { ArrowLongUpIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className={`flex gap-2 text-sm items-center rounded-lg transition-opacity ${
        isVisible
          ? classNames("opacity-100 text-default-400", "dark:text-default-500")
          : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <ArrowLongUpIcon width={16} />
      Back to Top
    </button>
  );
};

export default BackToTopButton;
