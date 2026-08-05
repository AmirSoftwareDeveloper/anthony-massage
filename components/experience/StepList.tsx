import type { ContentBlockEntry } from "@/types";

const StepList = ({ entries }: { entries: ContentBlockEntry[] }) => (
  <ol className="exp-step-list">
    {entries.map((entry, i) => (
      <li
        className="exp-step"
        key={entry.title}
      >
        <span
          className="exp-step-num"
          aria-hidden="true"
        >
          {String(i + 1).padStart(2, "0")}
        </span>
        <div className="exp-step-body">
          <h3>{entry.title}</h3>
          <p>{entry.text}</p>
        </div>
      </li>
    ))}
  </ol>
);

export default StepList;
