import type { ContentBlockEntry } from "@/types";

const StepList = ({ entries }: { entries: ContentBlockEntry[] }) => (
  <ol className="mt-2.5 flex flex-col gap-9">
    {entries.map((entry, i) => (
      <li
        className="flex items-baseline gap-6"
        key={entry.title}
      >
        <span
          className="w-10 flex-none font-display text-2xl font-normal italic text-(--s-heading) opacity-55 transition-colors duration-2200 ease-exp-release [.lit_&]:text-(--s-heading-lit)"
          aria-hidden="true"
        >
          {String(i + 1).padStart(2, "0")}
        </span>
        <div>
          <h3 className="mb-1.5 font-display text-xl font-normal italic text-(--s-heading) transition-colors duration-2200 ease-exp-release [.lit_&]:text-(--s-heading-lit)">
            {entry.title}
          </h3>
          <p className="mb-0 max-w-3xl text-base font-light leading-relaxed text-white/85 opacity-88">{entry.text}</p>
        </div>
      </li>
    ))}
  </ol>
);

export default StepList;
