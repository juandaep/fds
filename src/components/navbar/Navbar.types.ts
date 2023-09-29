interface NavLink {
  href: string;
  title: string;
}

interface HeaderNavLinksProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

interface SubNavLink {
  href: string;
}
