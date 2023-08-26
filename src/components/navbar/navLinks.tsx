import Link from "next/link";
import { usePathname } from "next/navigation";

export const navLinks = [
  { href: "/components", title: "Components Overview" },
  { href: "/about", title: "About" },
];

export const HeaderNavLinks = ({ href, children }) => {
  const pathname = usePathname();
  const active = href === pathname;

  return (
    <Link
      href={href}
      className={`transition-all hover-animation ${
        active ||
        (href.startsWith("/components") && pathname.startsWith("/components"))
          ? "text-purple-500"
          : ""
      }`}
    >
      {children}
    </Link>
  );
};
