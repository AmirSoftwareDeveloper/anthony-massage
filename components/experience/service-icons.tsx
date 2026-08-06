import type { SVGProps } from "react";

/** Hand-drawn line icons for the service cards. Lucide has nothing for
 *  bodywork — no hands-on-a-back, no stacked stones, no jaw release — so these
 *  are drawn here in one consistent hairline style: a 48-unit box, 1.2 stroke,
 *  round caps and joins, no fills. Keep any new one on that grid so the set
 *  stays even at card size. */
const base = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
} as const;

/** A pair of hands working a reclining back. */
const MassageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...base}
    {...props}
  >
    <circle cx="9.5" cy="30" r="3.2" />
    <path d="M13 32.5c3.6-2.6 8.3-4 13.5-4 5 0 9.4 1.4 12.5 3.9" />
    <path d="M12 39.5h24" />
    <path d="M19.5 24v-6.8a1.6 1.6 0 0 1 3.2 0v5.6" />
    <path d="M22.7 22.8v-8a1.6 1.6 0 0 1 3.2 0v7.4" />
    <path d="M25.9 22.2v-7.2a1.6 1.6 0 0 1 3.2 0v7" />
    <path d="M19.5 22.4v2.4c0 2.7 2.2 4.9 4.9 4.9h.3c2.6 0 4.6-2.1 4.6-4.6v-5.6" />
  </svg>
);

/** A figure opening into a stretch. */
const StretchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...base}
    {...props}
  >
    <circle cx="24" cy="10.5" r="3.6" />
    <path d="M24 14.6v11.2" />
    <path d="m24 18.8-9.6-6.4" />
    <path d="m24 18.8 9.6-6.4" />
    <path d="M24 25.8 16.8 38.6" />
    <path d="m24 25.8 7.2 12.8" />
  </svg>
);

/** Face held at the jaw — the intraoral / jaw release work. */
const JawIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...base}
    {...props}
  >
    <circle cx="24" cy="21.5" r="10" />
    <path d="M19.5 19.5h.01" />
    <path d="M28.5 19.5h.01" />
    <path d="M20.8 26.4c1.9 1.7 4.5 1.7 6.4 0" />
    <path d="M11 25.5c.6 3.9 2.7 7.2 5.7 9.2" />
    <path d="M37 25.5c-.6 3.9-2.7 7.2-5.7 9.2" />
  </svg>
);

/** Stacked basalt stones. */
const StonesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...base}
    {...props}
  >
    <ellipse cx="24" cy="35.4" rx="12.8" ry="4.3" />
    <ellipse cx="24" cy="27.2" rx="10.3" ry="3.8" />
    <ellipse cx="24" cy="19.6" rx="7.9" ry="3.3" />
    <ellipse cx="24" cy="12.8" rx="5.4" ry="2.7" />
  </svg>
);

/** Dropper bottle beside a leaf — the infused oil. */
const OilIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...base}
    {...props}
  >
    <path d="M16 22h10v12.5a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4z" />
    <path d="M18.6 22v-3.4h4.8V22" />
    <rect
      x="17"
      y="11.4"
      width="8"
      height="4.2"
      rx="2.1"
    />
    <path d="M21 15.6v3" />
    <path d="M31 33.5c5.2 0 9.4-4.2 9.4-9.4-5.2 0-9.4 4.2-9.4 9.4z" />
    <path d="M31 33.5c1.2-3.6 3.6-6.4 6.6-7.8" />
  </svg>
);

export const SERVICE_ICONS = {
  massage: MassageIcon,
  stretch: StretchIcon,
  jaw: JawIcon,
  stones: StonesIcon,
  oil: OilIcon,
} as const;

export type ServiceIconName = keyof typeof SERVICE_ICONS;

export const getServiceIcon = (name: ServiceIconName) => SERVICE_ICONS[name];
