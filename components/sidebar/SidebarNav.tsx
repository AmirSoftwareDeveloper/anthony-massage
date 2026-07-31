"use client";

import { NavItem } from "@/types";

import SidebarNavItem from "./SidebarNavItem";

const SidebarNav = ({ items }: { items: NavItem[] }) => {
  return (
    <div className="flex flex-col gap-2">
      {items.map((item) => (
        <SidebarNavItem
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
};

export default SidebarNav;
