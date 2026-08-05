import type { ContentBlockEntry } from "@/types";

const CategoryGrid = ({ entries }: { entries: ContentBlockEntry[] }) => (
  <div className="exp-category-grid">
    {entries.map((entry) => (
      <div
        className="exp-category-card"
        key={entry.title}
      >
        <h3>{entry.title}</h3>
        <p>{entry.text}</p>
      </div>
    ))}
  </div>
);

export default CategoryGrid;
