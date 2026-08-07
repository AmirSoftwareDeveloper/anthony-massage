import type { FeatureEntry } from "@/types";

import { getReasonIcon } from "./reason-icons";

const ReasonGrid = ({ reasons }: { reasons: FeatureEntry[] }) => (
  <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
    {reasons.map((reason) => {
      const Icon = getReasonIcon(reason.icon);
      return (
        <div
          key={reason.title}
          className="flex min-h-54 flex-col justify-between rounded-3xl border border-(--s-rule) bg-white/4 p-7 transition-colors duration-2200 ease-exp-release [.lit_&]:border-(--s-rule-lit)"
        >
          <Icon className="size-12 text-(--s-heading) transition-colors duration-2200 ease-exp-release [.lit_&]:text-(--s-heading-lit)" />

          <div>
            <h3 className="mb-1.5 font-display text-2xl leading-[1.35] font-normal tracking-[-0.01em] text-(--s-heading) italic transition-colors duration-2200 ease-exp-release [.lit_&]:text-(--s-heading-lit)">
              {reason.title}
            </h3>

            <p className="mb-0 text-sm+ leading-[1.65] font-light text-white/85">{reason.text}</p>
          </div>
        </div>
      );
    })}
  </div>
);

export default ReasonGrid;
