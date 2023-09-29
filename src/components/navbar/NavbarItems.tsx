import { classNames } from "@/utils/classNames";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavbarItems: React.FC<HeaderNavLinksProps> = ({
  href,
  className,
  children,
}) => {
  const pathname = usePathname();
  const active = href === pathname;

  return (
    <Link
      href={href}
      className={`${classNames(
        "text-lg font-medium",
        "lg:hover-animation lg:text-base"
      )} ${className} ${
        active ||
        (href.startsWith("/components") && pathname.startsWith("/components"))
          ? classNames(
              "bg-default-100 text-primary-500",
              "dark:bg-default-800/40 dark:text-primary-300",
              "lg:bg-transparent dark:lg:bg-transparent"
            )
          : classNames("text-default-600", "dark:text-default-300")
      }`}
    >
      {children}
    </Link>
  );
};
