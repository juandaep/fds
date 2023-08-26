import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  href: string;
  title: string;
}

interface HeaderNavLinksProps {
  href: string;
  children: React.ReactNode;
}

export const navLinks: NavLink[] = [
  { href: "/components", title: "Components" },
  { href: "/about", title: "About" },
];

const HeaderNavLinks: React.FC<HeaderNavLinksProps> = ({ href, children }) => {
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

export default HeaderNavLinks;
