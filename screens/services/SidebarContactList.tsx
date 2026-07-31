"use client";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { Button } from "@/components/ui/button";

interface ContactItem {
  icon: IconProp;
  value: string;
  href?: string;
}

interface Props {
  items: ContactItem[];
  buttonHref: string;
  buttonLabel: string;
}

const SidebarContactList = ({ items, buttonHref, buttonLabel }: Props) => {
  return (
    <div className="relative rounded overflow-hidden p-6 lg:p-8">
      <div className="absolute inset-0 bg-secondary/85" />

      <div className="relative z-10">
        <ul className="flex flex-col gap-3">
          {items.map((item) => (
            <li
              key={item.value}
              className="flex items-center gap-3 border-b border-white/20 pb-2.5 last:border-none"
            >
              <FontAwesomeIcon
                icon={item.icon}
                className="text-white w-4 h-4"
              />

              {item.href ? (
                <Link
                  href={item.href}
                  target="_blank"
                  className="text-white text-base font-bold hover:text-primary transition-colors"
                >
                  {item.value}
                </Link>
              ) : (
                <span className="text-white text-base font-bold">{item.value}</span>
              )}
            </li>
          ))}
        </ul>

        <Link
          href={buttonHref}
          className="mt-5 inline-flex"
        >
          <Button variant="neutral">{buttonLabel}</Button>
        </Link>
      </div>
    </div>
  );
};

export default SidebarContactList;
