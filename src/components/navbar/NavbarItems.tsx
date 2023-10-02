import { classNames } from "@/utils/classNames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

export const NavbarItems: FC<HeaderNavLinksProps> = ({
  href,
  className,
  children,
}) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={`${classNames(
        "text-lg font-medium",
        "lg:hover-animation lg:text-base",
      )} ${className} ${
        isActive ||
        (href.startsWith("/components") && pathname.startsWith("/components"))
          ? classNames(
              "bg-default-50 text-primary-500",
              "dark:bg-default-800/40 dark:text-primary-200",
              "lg:bg-transparent dark:lg:bg-transparent",
            )
          : classNames("text-default-600", "dark:text-default-300")
      }`}
    >
      {children}
    </Link>
  );
};
