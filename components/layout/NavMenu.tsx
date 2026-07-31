"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/utils";

import navLinks from "@/constants/navLinks";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const baseLink = "text-sm font-semibold leading-6 transition-colors duration-300 relative hover:text-primary";

const active = "text-primary";

const NavMenu = () => {
  const pathname = usePathname();

  return (
    <div className="hidden xl:flex items-center gap-x-10">
      {navLinks.map((item) => {
        const isActive = pathname === item.href;

        if (item.children?.length) {
          return (
            <NavigationMenu key={item.id}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(baseLink, "bg-transparent p-0 h-auto", isActive && active)}
                  >
                    {item.title}
                  </NavigationMenuTrigger>

                  <NavigationMenuContent>
                    <ul className="min-w-45 p-2 space-y-1">
                      {item.children.map((child) => (
                        <li key={child.slug}>
                          <Link
                            href={child.href}
                            className={cn(
                              "block px-3 py-2 rounded text-sm transition-colors hover:bg-primary/10 hover:text-primary",
                              pathname === child.href && active
                            )}
                          >
                            {child.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          );
        }

        return (
          <Link
            key={item.id}
            href={item.href}
            className={cn(baseLink, isActive && active)}
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};

export default NavMenu;
