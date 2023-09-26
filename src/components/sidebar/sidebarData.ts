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
  {
    type: "Molecules",
    menu: [
      { title: "Accordions", href: "/components/accordions" },
      { title: "Alerts", href: "/components/alerts" },
      { title: "Avatars", href: "/components/avatars" },
      { title: "Badges", href: "/components/badges" },
      { title: "Breadcrumbs", href: "/components/breadcrumbs" },
      { title: "Buttons", href: "/components/buttons" },
      { title: "Button Group", href: "/components/buttongroup" },
      { title: "Checkbox", href: "/components/checkbox" },
      { title: "Input Fields", href: "/components/inputfields" },
      { title: "Pagination", href: "/components/pagination" },
      { title: "Radio Button", href: "/components/radiobutton" },
      { title: "Slider", href: "/components/slider" },
      { title: "Switch", href: "/components/switch" },
      { title: "Table", href: "/components/table" },
      { title: "Tabs", href: "/components/tabs" },
      { title: "Tags", href: "/components/tags" },
      { title: "Tooltips", href: "/components/tooltips" },
    ],
  },
];
