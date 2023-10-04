interface PageNavigationItemProps {
  href: string;
  label: string;
  active: boolean;
}

interface Section {
  id: string;
  label: string;
}

interface PageNavigationProps {
  sections: Section[];
}
