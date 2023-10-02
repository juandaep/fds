"use client";
import { classNames } from "@/utils/classNames";
import Link from "next/link";
import { FC } from "react";

const NavigationItems: FC<NavigationItemProps> = ({ href, label, active }) => {
  return (
    <Link
      href={href}
      className={`${
        active
          ? classNames("text-primary-500", "dark:text-primary-25")
          : classNames(
              "text-default-500 hover:text-primary-500",
              "dark:text-default-400 dark:hover:text-primary-25",
            )
      } pl-3 text-sm`}
    >
      {label}
    </Link>
  );
};

export default NavigationItems;
