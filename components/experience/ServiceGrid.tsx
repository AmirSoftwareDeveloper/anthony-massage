import Link from "next/link";

import type { ServiceEntry } from "@/types";

import { Button } from "@/components/ui/button";

import { getExperienceIcon } from "./icons";

type ServiceGridProps = {
  services: ServiceEntry[];
  note?: string;
  ctaText?: string;
  ctaHref?: string;
};

const ServiceGrid = ({ services, note, ctaText, ctaHref }: ServiceGridProps) => (
  <div className="exp-service-block">
    {note && <p className="exp-note">{note}</p>}
    <div className="exp-service-grid">
      {services.map((service) => {
        const Icon = getExperienceIcon(service.icon);
        return (
          <div
            className="exp-service-card"
            key={service.title}
          >
            <Icon
              className="exp-service-icon"
              aria-hidden="true"
            />
            <span>{service.title}</span>
          </div>
        );
      })}
    </div>
    {ctaText && ctaHref && (
      <div className="exp-inline-cta">
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
