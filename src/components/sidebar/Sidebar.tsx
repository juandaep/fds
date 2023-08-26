"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

interface MenuItem {
  title: string;
  href: string;
}

interface SidebarProps {
  menuItems: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
    const pathname = usePathname()

  return (
    <aside className="hidden relative z-10 lg:block lg:col-span-2 mt-8 pr-4">
      <nav className="lg:fixed lg:top-20 mt-2 z-0 lg:h-[calc(100vh-121px)]">
        <div
          className="flex flex-col gap-4 scrollbar-hide lg:overflow-y-scroll lg:max-h-[calc(100vh_-_64px)] pb-28"
          tabIndex={0}
          style={{
            WebkitMaskImage:
              "linear-gradient(to top, transparent 0%, #000 100px, #000 100%, transparent 100%)",
          }}
        >
          {menuItems.map((link) => (
            <Link key={link.title} href={link.href} className={pathname === link.href ? "text-amber-400" : "text-white"}>
              {link.title}
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
