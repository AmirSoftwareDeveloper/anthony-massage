"use client";
import { INFO } from "@/constants";
import navLinks from "@/constants/navLinks";

import { Sheet, SheetContent } from "../ui/sheet";
import SidebarContacts from "./SidebarContacts";
import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";
import SidebarTrigger from "./SidebarTrigger";

const Sidebar = () => {
  return (
    <Sheet>
      <SidebarTrigger />

      <SheetContent className="flex flex-col overflow-hidden p-0">
        <div className="px-5 pt-5">
          <SidebarHeader />
          <p className="mt-4 max-w-xs text-sm text-left text-gray-600">{INFO.MOTTO}</p>
        </div>

        <div className="overflow-y-auto px-5 py-4">
          <p className="text-xs uppercase tracking-widest font-semibold text-secondary mb-3">Navigation</p>
          <SidebarNav items={navLinks} />
        </div>

        <div className="px-5 pb-6 shrink-0">
          <SidebarContacts />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
