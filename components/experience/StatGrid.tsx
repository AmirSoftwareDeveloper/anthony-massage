import CountUp from "@/components/experience/CountUp";

import type { StatEntry } from "@/types";

const StatGrid = ({ stats }: { stats: StatEntry[] }) => (
  <div className="mt-14 grid grid-cols-1 gap-y-10 xs:grid-cols-2 lg:mt-22 lg:grid-cols-4 lg:gap-y-0">
    {stats.map((stat) => (
      <div
        className="pr-10 transition-colors duration-2200 ease-exp-release [.lit_&]:border-(--s-rule-lit) xs:even:border-l xs:even:border-(--s-rule) xs:even:pl-10 lg:not-first:border-l lg:not-first:border-(--s-rule) lg:not-first:pl-10"
        key={stat.label}
      >
        <span className="block font-display text-4xl font-normal leading-none tabular-nums text-(--s-heading) transition-colors duration-2200 ease-exp-release [.lit_&]:text-(--s-heading-lit) md:text-5xl">
          <CountUp
            value={stat.value}
            suffix={stat.suffix}
          />
        </span>
        <span className="mt-2.5 block text-sm font-light leading-normal text-(--s-eyebrow) transition-colors duration-2200 ease-exp-release [.lit_&]:text-(--s-eyebrow-lit)">
          {stat.label}
        </span>
      </div>
    ))}
  </div>
);

export default StatGrid;
