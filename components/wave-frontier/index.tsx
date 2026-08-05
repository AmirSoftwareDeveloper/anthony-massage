import type { RefObject } from "react";

import { WISP_COUNT } from "@/lib/experience/engine";

interface WaveFrontierEngine {
  waveFrontierRef: RefObject<HTMLDivElement | null>;
  registerWisp: (index: number) => (el: SVGPathElement | null) => void;
}

const WaveFrontier = ({ engine }: { engine: WaveFrontierEngine }) => {
  return (
    <div
      ref={engine.waveFrontierRef}
      className="exp-wave-frontier"
      aria-hidden="true"
    >
      <svg
        className="exp-ground-light"
        preserveAspectRatio="none"
        viewBox="0 0 1200 200"
      >
        <defs>
          <linearGradient
            id="expGroundGrad"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop
              offset="0%"
              stopColor="#fff8d6"
              stopOpacity="0"
            />
            <stop
              offset="42%"
              stopColor="#ffefb8"
              stopOpacity="0.28"
            />
            <stop
              offset="50%"
              stopColor="#fffdf2"
              stopOpacity="0.52"
            />
            <stop
              offset="58%"
              stopColor="#ffefb8"
              stopOpacity="0.28"
            />
            <stop
              offset="100%"
              stopColor="#fff8d6"
              stopOpacity="0"
            />
          </linearGradient>
          <filter
            id="expGroundGlow"
            x="-80%"
            y="-80%"
            width="260%"
            height="260%"
          >
            <feGaussianBlur
              stdDeviation="9"
              result="b"
            />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#expGroundGlow)">
          {Array.from({ length: WISP_COUNT }).map((_, i) => (
            <path
              key={i}
              ref={engine.registerWisp(i)}
              className="exp-ground-wisp"
              fill="url(#expGroundGrad)"
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default WaveFrontier;
