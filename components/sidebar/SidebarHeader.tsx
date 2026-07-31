"use client";
import { INFO } from "@/constants";

import Logo from "@/components/logo";

import { SheetDescription, SheetHeader, SheetTitle } from "../ui/sheet";

const SidebarHeader = () => {
  return (
    <SheetHeader className="flex flex-row items-center justify-between space-y-0 pb-5 border-b border-gray-100">
      <div className="flex flex-col">
        <SheetTitle asChild>
          <div>
            <Logo />
          </div>
        </SheetTitle>
      </div>

      <SheetDescription className="sr-only">{INFO.MOTTO}</SheetDescription>
    </SheetHeader>
  );
};

export default SidebarHeader;
