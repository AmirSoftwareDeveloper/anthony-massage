import Link from "next/link";

import { Button } from "@/components/ui/button";

import type { FeatureEntry } from "@/types";

import { getExperienceIcon } from "./icons";

const FeatureGrid = ({ features }: { features: FeatureEntry[] }) => (
  <div className="exp-feature-grid">
    {features.map((feature) => {
      const Icon = getExperienceIcon(feature.icon);
      return (
        <div
          className="exp-feature-card"
          key={feature.title}
        >
          <Icon
            className="exp-feature-icon"
            aria-hidden="true"
          />
          <h3>{feature.title}</h3>
          <p>{feature.text}</p>
          {feature.ctaText && feature.ctaHref && (
            <Link href={feature.ctaHref}>
              <Button
                variant="experience-outline-neutral"
                size="experience"
              >
                {feature.ctaText}
              </Button>
            </Link>
          )}
        </div>
      );
    })}
  </div>
);

export default FeatureGrid;
