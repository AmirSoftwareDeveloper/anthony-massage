import Link from "next/link";

import { Button } from "@/components/ui/button";

import type { ServiceEntry } from "@/types";

import { getExperienceIcon } from "./icons";

type ServiceGridProps = {
  services: ServiceEntry[];
  note?: string;
  ctaText?: string;
  ctaHref?: string;
};

const ServiceGrid = ({ services, note, ctaText, ctaHref }: ServiceGridProps) => (
  <div className="mt-2.5">
    {note && (
      <p className="mt-2.5 mb-0 max-w-3xl font-sans text-base font-light not-italic leading-loose text-white/85 opacity-62">
        {note}
      </p>
    )}
    <div className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
      {services.map((service) => {
        const Icon = getExperienceIcon(service.icon);
        return (
          <div
            className="flex items-center gap-3.5 rounded-xl border border-(--s-rule) px-5 py-4 text-base font-medium transition-colors duration-2200 ease-exp-release [.lit_&]:border-(--s-rule-lit)"
            key={service.title}
          >
            <Icon
              className="size-4 flex-none text-(--s-heading) transition-colors duration-2200 ease-exp-release [.lit_&]:text-(--s-heading-lit)"
              aria-hidden="true"
            />
            <span>{service.title}</span>
          </div>
        );
      })}
    </div>
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

export default ServiceGrid;
