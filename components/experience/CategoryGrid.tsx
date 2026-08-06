import type { ContentBlockEntry } from "@/types";

const CategoryGrid = ({ entries }: { entries: ContentBlockEntry[] }) => (
  <div className="mt-2.5 grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-x-9 sm:gap-y-10">
    {entries.map((entry) => (
      <div key={entry.title}>
        <h3 className="mb-2 font-display text-xl font-normal italic text-(--s-heading) transition-colors duration-2200 ease-exp-release [.lit_&]:text-(--s-heading-lit)">
          {entry.title}
        </h3>
        <p className="mb-0 max-w-3xl text-base font-light leading-relaxed text-white/85 opacity-88">{entry.text}</p>
      </div>
    ))}
  </div>
);

export default CategoryGrid;
