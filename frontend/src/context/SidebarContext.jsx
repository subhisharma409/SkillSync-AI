import { useMemo, useState } from "react";
import { SidebarContext } from "./SidebarContextValue";

export const SidebarProvider = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed((prev) => !prev);
  const openSidebar = () => setCollapsed(false);
  const closeSidebar = () => setCollapsed(true);

  const value = useMemo(
    () => ({ collapsed, toggleSidebar, openSidebar, closeSidebar }),
    [collapsed],
  );

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
};
