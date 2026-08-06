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

const MassageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...base}
    {...props}
  >
    <circle
      cx="9"
      cy="31"
      r="4"
    />
    <path d="M13.5 34c4.2-3 9.6-4.6 15.5-4.6 5.6 0 10.5 1.5 13.9 4.3" />
    <path d="M10 41h28" />
    <path d="M20 23.5v-8a1.9 1.9 0 0 1 3.8 0v6.6" />
    <path d="M23.8 22.2v-9.4a1.9 1.9 0 0 1 3.8 0v8.7" />
    <path d="M27.6 21.5v-8.5a1.9 1.9 0 0 1 3.8 0v8.2" />
    <path d="M20 21.5v3.2c0 3.2 2.6 5.8 5.8 5.8h.4c3 0 5.4-2.4 5.4-5.4v-6.6" />
  </svg>
);

const StretchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...base}
    {...props}
  >
    <circle
      cx="24"
      cy="10.5"
      r="3.6"
    />
    <path d="M24 15.5c-5 0-9 3.2-10.6 8" />
    <path d="M24 15.5c5 0 9 3.2 10.6 8" />
    <path d="M9 32.5c3.4-2.8 9-4.4 15-4.4s11.6 1.6 15 4.4" />
    <path d="M9 32.5c2.4 2.8 8 4.6 15 4.6s12.6-1.8 15-4.6" />
  </svg>
);

const JawIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...base}
    {...props}
  >
    <path d="M28 5.5c-8.3 0-15 6.7-15 15 0 3.1-2.3 4.8-2.3 6.6 0 1.8 2.3 2.3 2.3 2.3v3.7c0 1.8 1.4 3.2 3.2 3.2h2.9v6.2" />
    <path d="M28 5.5c7.2 0 13.1 5.9 13.1 13.1 0 4.8-1.9 7.9-4.8 10.4" />
    <circle
      cx="22"
      cy="24.5"
      r="2.9"
    />
    <path d="M24.5 30.2c3.6-.5 6.6-2.4 8.6-5.2" />
  </svg>
);

const StonesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...base}
    {...props}
  >
    <ellipse
      cx="24"
      cy="38"
      rx="15.5"
      ry="5"
    />
    <ellipse
      cx="24"
      cy="28.5"
      rx="12.5"
      ry="4.4"
    />
    <ellipse
      cx="24"
      cy="19.8"
      rx="9.5"
      ry="3.8"
    />
    <ellipse
      cx="24"
      cy="11.8"
      rx="6.5"
      ry="3.1"
    />
  </svg>
);

const OilIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...base}
    {...props}
  >
    <path d="M13 22h11.5v14.5a4.5 4.5 0 0 1-4.5 4.5h-2.5a4.5 4.5 0 0 1-4.5-4.5z" />
    <path d="M16 22v-4h5.5v4" />
    <rect
      x="14.5"
      y="9.5"
      width="8.5"
      height="4.6"
      rx="2.3"
    />
    <path d="M18.75 14.1v3.9" />
    <path d="M29 37c6.1 0 11-4.9 11-11-6.1 0-11 4.9-11 11z" />
    <path d="M29 37c1.4-4.2 4.2-7.5 7.7-9.1" />
  </svg>
);

const LotusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...base}
    {...props}
  >
    <path d="M24 39c-6.2-3.8-10-10.5-10-18 0-4.7 3.7-9.6 10-12.6 6.3 3 10 7.9 10 12.6 0 7.5-3.8 14.2-10 18z" />
    <path d="M24 39c-8.2-1.6-14.9-8.2-16.4-16.4 5.7-.6 10.9 1.4 14.4 5.3" />
    <path d="M24 39c8.2-1.6 14.9-8.2 16.4-16.4-5.7-.6-10.9 1.4-14.4 5.3" />
  </svg>
);

export const SERVICE_ICONS = {
  massage: MassageIcon,
  stretch: StretchIcon,
  jaw: JawIcon,
  stones: StonesIcon,
  oil: OilIcon,
  lotus: LotusIcon,
} as const;

export type ServiceIconName = keyof typeof SERVICE_ICONS;

export const getServiceIcon = (name: ServiceIconName) => SERVICE_ICONS[name];
