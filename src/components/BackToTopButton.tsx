"use client";
import { classNames } from "@/utils/classNames";
import { ArrowLongUpIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
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
      className={`${classNames(
        "flex gap-2 text-sm items-center border-t border-default-200 pt-3",
        "dark:border-default-700",
        "hover:text-default-500 hover:dark:text-default-300"
      )} ${
        isVisible
          ? classNames("block text-default-400", "dark:text-default-500")
          : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <ArrowLongUpIcon width={16} />
      Back to Top
    </button>
  );
};

export default BackToTopButton;
