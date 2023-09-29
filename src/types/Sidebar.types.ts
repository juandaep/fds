interface SidebarItemProps {
  item: {
    title?: string;
    href?: string;
    type?: string;
    menu?: {
      href: string;
      title: string;
    }[];
  };
  pathname: string;
  onClick?: () => void;
}

interface SidebarItem {
  title: string;
  href: string;
}

interface SidebarWithSubItems {
  type: string;
  menu: SidebarItem[];
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
