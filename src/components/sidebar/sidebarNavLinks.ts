"use client";
interface MenuItem {
  title: string;
  href: string;
}

interface SubMenuItem {
  title: string;
  href: string;
}

interface MenuWithSubItems {
  type: string;
  menu: SubMenuItem[];
}

export const menuItems: (MenuItem | MenuWithSubItems)[] = [
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
