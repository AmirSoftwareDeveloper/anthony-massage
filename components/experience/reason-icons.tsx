import type { SVGProps } from "react";

const base = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
} as const;

const PetalIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...base}
    {...props}
  >
    <g transform="rotate(45 24 24)">
      <path d="M24 24c-9-4-9-12 0-19 9 7 9 15 0 19Z" />
      <path d="M24 24c9 4 9 12 0 19-9-7-9-15 0-19Z" />
      <path d="M24 24c-4 9-12 9-19 0 7-9 15-9 19 0Z" />
      <path d="M24 24c4-9 12-9 19 0-7 9-15 9-19 0Z" />
    </g>
  </svg>
);

const DropIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...base}
    {...props}
  >
    <path d="M24 4s13 14.5 13 24a13 13 0 0 1-26 0C11 18.5 24 4 24 4Z" />
    <path d="M24 35c-5.5-3-8-8.5-6-14 5.5 3 8 8.5 6 14Z" />
    <path d="M24 35c-1.5-4-3.5-7.5-6-10.5" />
  </svg>
);

const VesicaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...base}
    {...props}
  >
    <circle
      cx="17"
      cy="24"
      r="13"
    />
    <circle
      cx="31"
      cy="24"
      r="13"
    />
    <path d="M24 10c8 6 8 22 0 28-8-6-8-22 0-28Z" />
    <path d="M24 13.5v21" />
  </svg>
);

const FoliageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...base}
    {...props}
  >
    <circle
      cx="24"
      cy="24"
      r="17"
    />
    <path d="M24 36c-9-3-13-10-11.5-19 9 3 13 10 11.5 19Z" />
    <path d="M24 36c9-3 13-10 11.5-19-9 3-13 10-11.5 19Z" />
    <path d="M24 36V22" />
  </svg>
);

const LotusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...base}
    {...props}
  >
    <path d="M24 32.5c-4-5.5-4-13.5 0-19.5 4 6 4 14 0 19.5Z" />
    <path d="M24 32.5c-6.5-2.5-10.5-9-11-16 5.5 2 9.5 8 11 16Z" />
    <path d="M24 32.5c6.5-2.5 10.5-9 11-16-5.5 2-9.5 8-11 16Z" />
    <path d="M24 32.5c-7 .5-13.5-3-17-9 6.5-1.5 13 2 17 9Z" />
    <path d="M24 32.5c7 .5 13.5-3 17-9-6.5-1.5-13 2-17 9Z" />
    <path d="M11 36.5c4 1.5 8.4 2.2 13 2.2s9-.7 13-2.2" />
  </svg>
);

const UpliftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...base}
    {...props}
  >
    <circle
      cx="24"
      cy="9.5"
      r="3.5"
    />
    <path d="M24 14.5v13.5" />
    <path d="M24 19c-3-4-8.5-7-15.5-8.5" />
    <path d="M24 19c3-4 8.5-7 15.5-8.5" />
    <path d="M24 28c-1 5-4 9.5-8.5 13" />
    <path d="M24 28c1 5 4 9.5 8.5 13" />
  </svg>
);

export const REASON_ICONS = {
  petal: PetalIcon,
  drop: DropIcon,
  vesica: VesicaIcon,
  foliage: FoliageIcon,
  lotus: LotusIcon,
  uplift: UpliftIcon,
} as const;

export type ReasonIconName = keyof typeof REASON_ICONS;

export const getReasonIcon = (name: string) => REASON_ICONS[name as ReasonIconName] ?? PetalIcon;
