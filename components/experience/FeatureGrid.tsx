import Link from "next/link";

import { Button } from "@/components/ui/button";

import type { FeatureEntry } from "@/types";

import { getExperienceIcon } from "./icons";

const FeatureGrid = ({ features }: { features: FeatureEntry[] }) => (
  <div className="mt-12 grid grid-cols-1 gap-9 md:grid-cols-3 md:gap-0">
    {features.map((feature) => {
      const Icon = getExperienceIcon(feature.icon);
      return (
        <div
          className="flex flex-col items-center gap-3.5 text-center transition-colors duration-2200 ease-exp-release [.lit_&]:border-(--s-rule-lit) md:border-l md:border-(--s-rule) md:px-10 md:first:border-l-0 md:first:pl-0 md:last:pr-0"
          key={feature.title}
        >
          <Icon
            className="size-9 text-(--s-heading) transition-colors duration-2200 ease-exp-release [.lit_&]:text-(--s-heading-lit)"
            aria-hidden="true"
          />
          <h3 className="m-0 font-display text-3xl font-normal italic transition-colors duration-2200 ease-exp-release [.lit_&]:text-white">
            {feature.title}
          </h3>
          <p className="m-0 max-w-[26ch] text-sm font-light leading-relaxed text-white opacity-88">{feature.text}</p>
          {feature.ctaText && feature.ctaHref && (
            <Link
              href={feature.ctaHref}
              className="mt-1.5"
            >
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
