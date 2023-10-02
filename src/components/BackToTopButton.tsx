"use client";
import { useScrollTop } from "@/app/hooks/useScrollTop";
import { classNames } from "@/utils/classNames";
import { ArrowLongUpIcon } from "@heroicons/react/24/outline";

const BackToTopButton = () => {
  const { isVisible, scrollToTop } = useScrollTop();

  return (
    <button
      type="button"
      className={`${classNames(
        "flex items-center gap-2 border-t border-default-200 pt-3 text-sm",
        "dark:border-default-700",
        "hover:text-default-500 hover:dark:text-default-300",
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
