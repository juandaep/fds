interface SidebarItem {
  title: string;
  href: string;
}

interface SidebarWithSubItems {
  type: string;
  menu: SidebarItem[];
}

type SidebarDataItem = SidebarItem | SidebarWithSubItems;

interface SidebarItemsProps {
  sidebarData: SidebarDataItem[];
  onItemClick?: () => void;
}

interface MobileSidebarProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}