import { useState } from "react";

export const useSidebarState = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return { sidebarOpen, openSidebar, closeSidebar };
};
