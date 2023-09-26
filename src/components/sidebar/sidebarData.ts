import { type } from "os";

export interface SidebarItem {
  title: string;
  href: string;
}

export interface SubmenuItem {
  title: string;
  href: string;
}

export interface SidebarWithSubItems {
  type: string;
  menu: SubmenuItem[];
}

export const sidebarData: (SidebarItem | SidebarWithSubItems)[] = [
  { title: "Overview", href: "/components" },
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
