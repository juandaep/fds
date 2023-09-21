import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderNavLinksProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}
const NavbarList: React.FC<HeaderNavLinksProps> = ({
  href,
  className,
  children,
}) => {
  const pathname = usePathname();
  const active = href === pathname;

  return (
    <Link
      href={href}
      className={`transition-color lg:hover-animation text-lg lg:text-base ${className} ${
        active ||
        (href.startsWith("/components") && pathname.startsWith("/components"))
          ? "bg-default-50 text-primary-500 dark:bg-default-800 dark:text-primary-25 lg:text-primary-500 dark:lg:text-primary-400 lg:bg-transparent dark:lg:bg-transparent"
          : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default NavbarList;
