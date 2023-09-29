interface NavigationItemProps {
  href: string;
  label: string;
  active: boolean;
}

interface Section {
  id: string;
  label: string;
}

interface NavigationProps {
  sections: Section[];
}
