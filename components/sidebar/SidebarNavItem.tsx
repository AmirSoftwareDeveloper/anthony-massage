"use client";

import * as React from "react";

import { ChevronDown } from "lucide-react";
import Link from "next/link";

import { cn } from "@/utils";

import { NavItem } from "@/types";

import { SheetClose } from "../ui/sheet";

const SidebarNavItem = ({ item }: { item: NavItem }) => {
  const [open, setOpen] = React.useState(false);
  const hasChildren = !!item.children?.length;

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between border-b border-gray-100">
        <SheetClose asChild>
          <Link
            href={item.href}
            className="flex-1 py-3.5 text-sm font-medium text-accent hover:text-primary transition-colors"
          >
            {item.title}
          </Link>
        </SheetClose>

        {hasChildren && (
          <button
            onClick={() => setOpen((p) => !p)}
            aria-label={open ? "Collapse" : "Expand"}
            className="p-3 text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", open && "rotate-180")} />
          </button>
        )}
      </div>

      {hasChildren && (
        <div
          style={{ display: "grid", gridTemplateRows: open ? "1fr" : "0fr" }}
          className="transition-[grid-template-rows] duration-200 ease-in-out"
        >
          <div className="overflow-hidden">
            <div className="ml-4 border-l-2 border-primary/20 pl-4 py-2 flex flex-col gap-0.5">
              {item.children!.map((child) => (
                <SheetClose
                  asChild
                  key={child.slug}
                >
                  <Link
                    href={child.href}
                    className="py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {child.title}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarNavItem;
