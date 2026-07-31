"use client";

import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SheetTrigger } from "../ui/sheet";

const SidebarTrigger = () => {
  return (
    <SheetTrigger asChild>
      <button
        aria-label="Open menu"
        className="w-10 h-10 flex items-center justify-center bg-secondary rounded"
      >
        <FontAwesomeIcon
          icon={faBarsStaggered}
          className="w-4 h-4 text-white"
        />
      </button>
    </SheetTrigger>
  );
};

export default SidebarTrigger;
