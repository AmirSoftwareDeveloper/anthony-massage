import Link from "next/link";

import { Button } from "@/components/ui/button";

import type { ServiceEntry } from "@/types";

import { getExperienceIcon } from "./icons";

type PricingListProps = {
  services: ServiceEntry[];
  note?: string;
  ctaText?: string;
  ctaHref?: string;
};

const PricingList = ({ services, note, ctaText, ctaHref }: PricingListProps) => (
  <div className="mt-2.5">
    {note && (
      <p className="mt-2.5 mb-0 max-w-3xl font-sans text-base font-light not-italic leading-loose text-white/85 opacity-62">
        {note}
      </p>
    )}
    <ul className="mt-4 flex list-none flex-col">
      {services.map((service) => {
        const Icon = getExperienceIcon(service.icon);
        return (
          <li
            className="flex items-center justify-between gap-4 border-b border-(--s-rule) py-4 transition-colors duration-2200 ease-exp-release [.lit_&]:border-(--s-rule-lit)"
            key={service.title}
          >
            <span className="flex items-center gap-3.5 text-base font-medium">
              <Icon
                className="size-4 flex-none text-(--s-heading) transition-colors duration-2200 ease-exp-release [.lit_&]:text-(--s-heading-lit)"
                aria-hidden="true"
              />
              {service.title}
            </span>
            {service.price && (
              <span className="flex-none font-display text-base italic text-(--s-heading) transition-colors duration-2200 ease-exp-release [.lit_&]:text-(--s-heading-lit)">
                {service.price}
              </span>
            )}
          </li>
        );
      })}
    </ul>
    {ctaText && ctaHref && (
      <div className="mt-7">
        <Link href={ctaHref}>
          <Button
            variant="experience"
            size="experience"
          >
            {ctaText}
          </Button>
        </Link>
      </div>
    )}
  </div>
);

export default PricingList;
