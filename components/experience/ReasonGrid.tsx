import type { FeatureEntry } from "@/types";

import { getExperienceIcon } from "./icons";

/** Two-up cards, each an icon over a short title and a single line of support
 *  copy. Unlike FeatureGrid — which divides three items with hairline rules and
 *  centres them — these are self-contained panels lifted a shade off the
 *  section background, so a longer list still reads as a scannable block beside
 *  a column of its own. */
const ReasonGrid = ({ reasons }: { reasons: FeatureEntry[] }) => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
    {reasons.map((reason) => {
      const Icon = getExperienceIcon(reason.icon);
      return (
        <div
          key={reason.title}
          className="flex flex-col rounded-2xl border border-(--s-rule) bg-white/4 px-7 py-8 transition-colors duration-2200 ease-exp-release [.lit_&]:border-(--s-rule-lit)"
        >
          <Icon
            className="size-9 stroke-[1.15] text-(--s-heading) transition-colors duration-2200 ease-exp-release [.lit_&]:text-(--s-heading-lit)"
            aria-hidden="true"
          />

          <h3 className="mt-9 mb-2 font-display text-xl font-normal italic text-(--s-heading) transition-colors duration-2200 ease-exp-release [.lit_&]:text-(--s-heading-lit)">
            {reason.title}
          </h3>

          <p className="mb-0 text-sm+ font-light leading-relaxed text-white/85 opacity-88">{reason.text}</p>
        </div>
      );
    })}
  </div>
);

export default ReasonGrid;
