"use client";
import { ComponentsNavbar } from "@/components/navbar/ComponentsNavbar";
import Navbar from "@/components/navbar/Navbar";
import { usePathname } from "next/navigation";

export function NavbarProvider() {
  const router = usePathname();
  const subNavLinks: SubNavLink[] = [
    { href: "/components" },
    { href: "/components/colors" },
    { href: "/components/icons" },
    { href: "/components/shadows" },
    { href: "/components/typography" },
    { href: "/components/accordions" },
    { href: "/components/alerts" },
  ];

  const isComponentsPage = subNavLinks.some((link) => router === link.href);

  return <>{isComponentsPage ? <ComponentsNavbar /> : <Navbar />}</>;
}
