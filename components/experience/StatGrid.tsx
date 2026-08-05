import type { StatEntry } from "@/types";

import CountUp from "@/components/experience/CountUp";

const StatGrid = ({ stats }: { stats: StatEntry[] }) => (
  <div className="exp-stat-grid">
    {stats.map((stat) => (
      <div
        className="exp-stat"
        key={stat.label}
      >
        <span className="exp-stat-value">
          <CountUp
            value={stat.value}
            suffix={stat.suffix}
          />
        </span>
        <span className="exp-stat-label">{stat.label}</span>
      </div>
    ))}
  </div>
);

export default StatGrid;
