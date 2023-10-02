"use client";
import { classNames } from "@/utils/classNames";
import Link from "next/link";
import { FC } from "react";

const NavigationItems: FC<NavigationItemProps> = ({ href, label, active }) => {
  return (
    <Link
      href={href}
      passHref
      className={`${
        active
          ? classNames(
              "text-primary-500",
              "dark:text-primary-100",
              "hover:text-primary-500",
            )
          : classNames(
              "text-default-400 hover:text-primary-100",
              "dark:text-default-500 dark:hover:text-primary-100",
            )
      } pl-3 text-sm`}
    >
      {label}
    </Link>
  );
};

export default NavigationItems;
