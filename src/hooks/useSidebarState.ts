import { useEffect, useState } from "react";

export const useSidebarState = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden lg:auto" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen]);

  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return { sidebarOpen, openSidebar, closeSidebar };
};
