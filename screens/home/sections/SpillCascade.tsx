const DRIPS: [number, number, number][] = [
  [90, 9, 24],
  [215, 12, 30],
  [330, 7, 19],
  [470, 10, 26],
  [590, 6, 16],
  [710, 11, 28],
  [820, 8, 21],
  [940, 10, 25],
  [1060, 7, 18],
  [1150, 9, 23],
];

const SpillCascade = () => (
  <div
    className="exp-spill-cascade"
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 1200 170"
      preserveAspectRatio="none"
    >
      <defs>
        <filter
          id="expSpillGlow"
          x="-60%"
          y="-60%"
          width="220%"
          height="220%"
        >
          <feGaussianBlur
            stdDeviation="6"
            result="b"
          />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g
        filter="url(#expSpillGlow)"
        fill="#fff3d2"
      >
        {DRIPS.map(([cx, rx, ry]) => (
          <ellipse
            key={cx}
            className="exp-drip"
            cx={cx}
            cy={0}
            rx={rx}
            ry={ry}
          />
        ))}
      </g>
    </svg>
  </div>
);

export default SpillCascade;
