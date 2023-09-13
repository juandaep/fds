"use client";
interface SidebarItem {
  title: string;
  href: string;
}

interface SubMenuItem {
  title: string;
  href: string;
}

interface SidebarWithSubItems {
  type: string;
  menu: SubMenuItem[];
}

export const sidebarMenuItems: (SidebarItem | SidebarWithSubItems)[] = [
  { title: "Components Overview", href: "/components" },
  {
    type: "Atoms",
    menu: [
      { title: "Colors", href: "/components/colors" },
      { title: "Icons", href: "/components/icons" },
      { title: "Shadows", href: "/components/shadows" },
      { title: "Typography", href: "/components/typography" },
    ],
  },
];
