import Link from "next/link";

import type { ServiceEntry } from "@/types";

import { Button } from "@/components/ui/button";

import { getExperienceIcon } from "./icons";

type PricingListProps = {
  services: ServiceEntry[];
  note?: string;
  ctaText?: string;
  ctaHref?: string;
};

const PricingList = ({ services, note, ctaText, ctaHref }: PricingListProps) => (
  <div className="exp-pricing-block">
    {note && <p className="exp-note">{note}</p>}
    <ul className="exp-pricing-list">
      {services.map((service) => {
        const Icon = getExperienceIcon(service.icon);
        return (
          <li
            className="exp-pricing-row"
            key={service.title}
          >
            <span className="exp-pricing-label">
              <Icon
                className="exp-service-icon"
                aria-hidden="true"
              />
              {service.title}
            </span>
            {service.price && <span className="exp-pricing-price">{service.price}</span>}
          </li>
        );
      })}
    </ul>
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

export default PricingList;
