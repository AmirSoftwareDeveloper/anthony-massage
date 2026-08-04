export const FRAME_COUNT = 4;

export const PHASE_CAPTIONS = [
  "Held. Compressed. Gravity pulls.",
  "Light enters. Tension softens. Unraveling begins.",
  "Alignment returns. Breath deepens. Life begins to flow.",
  "Open. Aligned. At ease.",
] as const;

export const TIMELINE = {
  sweepA: 1.2,
  sweepB: 4.6,
  lifeA: 1.2,
  lifeB: 4.6,
  unfA: 1.6,
  unfB: 4.6,
  bloomA: 4.3,
  bloomB: 6.1,
  frA: 5.4,
  frB: 8.8,
} as const;

// where the light band's own position (0-1 crossing the board) gates the
// color reveal — color arrives in the band's wake, not on an independent clock
export const LIGHT_IN = 0.23;
export const LIGHT_OUT = 0.77;

// the billboard's true pixel rectangle within the natural (unscaled) hero
// image, used to glue the light path and color reveal to the board itself
// regardless of how object-fit crops the image per viewport
export const HERO_NATURAL_WIDTH = 1672;
export const HERO_NATURAL_HEIGHT = 941;
export const HERO_BOARD = { L: 321, R: 1286, T: 315, B: 638 } as const;

export function clamp01(x: number): number {
  return x < 0 ? 0 : x > 1 ? 1 : x;
}

export function easeInOut(x: number): number {
  const c = clamp01(x);
  return c * c * (3 - 2 * c);
}

export interface FrameState {
  opacity: number;
  zIndex: number;
}

export function computeFrameStates(progress: number, count = FRAME_COUNT): FrameState[] {
  const seg = clamp01(progress) * (count - 1);
  const lo = Math.floor(seg);
  const hi = Math.min(count - 1, lo + 1);
  const f = seg - lo;
  const fe = f * f * (3 - 2 * f);

  const states: FrameState[] = [];
  for (let i = 0; i < count; i++) {
    let opacity: number;
    if (i < lo) opacity = 1;
    else if (i === lo) opacity = 1;
    else if (i === hi && hi !== lo) opacity = fe;
    else opacity = 0;

    const zIndex = i === hi ? 3 : i === lo ? 2 : i < lo ? 1 : 0;
    states.push({ opacity, zIndex });
  }
  if (seg >= count - 1.001) states[count - 1].opacity = 1;
  return states;
}

export function ribbonPath(
  centerX: number,
  halfW: number,
  phase: number,
  amp1: number,
  amp2: number,
  skew: number
): string {
  const pts = 26;
  const H = 300;
  const left: [number, number][] = [];
  const right: [number, number][] = [];

  for (let i = 0; i <= pts; i++) {
    const y = (i / pts) * H;
    const wob = Math.sin(y * 0.032 + phase) * amp1 + Math.sin(y * 0.085 - phase * 1.3) * amp2;
    const lean = (y / H - 0.5) * skew;
    left.push([centerX - halfW + wob + lean, y]);
    right.push([centerX + halfW + wob * 0.7 + lean, y]);
  }

  let d = `M ${left[0][0].toFixed(1)} ${left[0][1]}`;
  for (let a = 1; a < left.length; a++) d += ` L ${left[a][0].toFixed(1)} ${left[a][1]}`;
  for (let b = right.length - 1; b >= 0; b--) d += ` L ${right[b][0].toFixed(1)} ${right[b][1]}`;
  return `${d} Z`;
}

export interface SweepPaths {
  opacity: number;
  glow: string;
  core: string;
  rib1: string;
  rib2: string;
}

export function computeSweep(s: number, phase = 0): SweepPaths {
  const opacity = s <= 0 || s >= 1 ? 0 : 1;
  const cx = 570 - s * 740;
  return {
    opacity,
    glow: ribbonPath(cx, 95, phase * 0.8, 16, 8, 40),
    core: ribbonPath(cx, 54, phase, 14, 7, 34),
    rib1: ribbonPath(cx - 26, 10, phase * 1.2 + 1.0, 20, 10, 30),
    rib2: ribbonPath(cx + 30, 7, phase * 0.9 + 2.4, 24, 12, 46),
  };
}

export interface BoardRect {
  x: number;
  y: number;
  w: number;
  h: number;
  sw: number;
  sh: number;
}

export function measureBoardRect(stageRect: { width: number; height: number }, objectFit: string): BoardRect | null {
  if (!stageRect.width || !stageRect.height) return null;
  const scale =
    objectFit === "contain"
      ? Math.min(stageRect.width / HERO_NATURAL_WIDTH, stageRect.height / HERO_NATURAL_HEIGHT)
      : Math.max(stageRect.width / HERO_NATURAL_WIDTH, stageRect.height / HERO_NATURAL_HEIGHT);
  const ox = (stageRect.width - HERO_NATURAL_WIDTH * scale) / 2;
  const oy = (stageRect.height - HERO_NATURAL_HEIGHT * scale) / 2;
  return {
    x: ox + HERO_BOARD.L * scale,
    y: oy + HERO_BOARD.T * scale,
    w: (HERO_BOARD.R - HERO_BOARD.L) * scale,
    h: (HERO_BOARD.B - HERO_BOARD.T) * scale,
    sw: stageRect.width,
    sh: stageRect.height,
  };
}

export function computeLifeMask(v: number, br: BoardRect | null): string {
  if (v >= 0.999 || !br) return "none";
  const dR = ((br.sw - (br.x + br.w)) / br.sw) * 100;
  const dL = ((br.sw - br.x) / br.sw) * 100;
  const a = dR - 9 + v * (dL - dR + 17);
  const b = a + 9;
  return `linear-gradient(to left, #000 ${a}%, transparent ${b}%)`;
}

export interface BloomState {
  maskImage: string;
  spillOpacity: number;
}

/** Color dumps off the board's lower-left corner and pools outward onto the
 *  street, anchored to the measured board rect so the pool cannot drift. */
export function computeBloom(b: number, br: BoardRect | null): BloomState {
  const e = clamp01(b);
  const spillOpacity = Math.sin(Math.PI * e) * 0.92;
  if (!br) return { maskImage: `radial-gradient(ellipse 0% 0% at 18% 100%, #000 62%, transparent 94%)`, spillOpacity };
  if (e >= 0.999) return { maskImage: "none", spillOpacity };
  const ox = br.x + br.w * 0.05;
  const oy = br.y + br.h;
  const rx = Math.max(e * br.w * 1.85, 1);
  const ry = Math.max(e * br.h * 2.8, 1);
  return {
    maskImage: `radial-gradient(ellipse ${rx}px ${ry}px at ${ox}px ${oy}px, #000 54%, rgba(0,0,0,0.40) 78%, transparent 96%)`,
    spillOpacity,
  };
}

export function captionIndexFor(unfoldProgress: number): number {
  if (unfoldProgress < 0.16) return 0;
  if (unfoldProgress < 0.5) return 1;
  if (unfoldProgress < 0.85) return 2;
  return 3;
}

export function seed(i: number, k: number): number {
  return Math.abs((Math.sin(i * 12.9898 + k * 78.233) * 43758.5453) % 1);
}

export function groundRibbonPath(cx: number, cy: number, halfLen: number, thickness: number, phase: number): string {
  const pts = 16;
  const top: [number, number][] = [];
  const bot: [number, number][] = [];

  for (let k = 0; k <= pts; k++) {
    const x = cx - halfLen + (k / pts) * halfLen * 2;
    const wob = Math.sin(x * 0.02 + phase) * (thickness * 1.2) + Math.sin(x * 0.05 - phase * 1.4) * (thickness * 0.5);
    const y = cy + wob;
    const widthVary =
      0.55 +
      0.45 * (0.5 + 0.5 * Math.sin(x * 0.013 + phase * 0.7 + cx * 0.01)) +
      0.18 * Math.sin(x * 0.085 - phase * 2.1);
    const th = thickness * Math.max(0.3, widthVary);
    top.push([x, y - th / 2]);
    bot.push([x, y + th / 2]);
  }

  let d = `M ${top[0][0].toFixed(1)} ${top[0][1].toFixed(1)}`;
  for (let a = 1; a < top.length; a++) d += ` L ${top[a][0].toFixed(1)} ${top[a][1].toFixed(1)}`;
  for (let b = bot.length - 1; b >= 0; b--) d += ` L ${bot[b][0].toFixed(1)} ${bot[b][1].toFixed(1)}`;
  return `${d} Z`;
}

export const WISP_COUNT = 7;

export const WISP_SIZES = [
  { halfLen: 100, thickness: 14 },
  { halfLen: 145, thickness: 18 },
  { halfLen: 195, thickness: 22 },
  { halfLen: 90, thickness: 12 },
  { halfLen: 168, thickness: 20 },
  { halfLen: 120, thickness: 15 },
  { halfLen: 138, thickness: 17 },
] as const;

export interface WispState {
  d: string;
  opacity: number;
}

export function computeWisp(i: number, t: number, flare: number, wispCount = WISP_COUNT): WispState {
  const period = 5.2 + seed(i, 1) * 2.6;
  const offset = seed(i, 2) * period;
  const local = ((t + offset) % period) / period;
  const cycleIndex = Math.floor((t + offset) / period);

  let presence = Math.sin(Math.PI * local);
  presence = Math.max(0, presence);
  presence = presence * presence * (3 - 2 * presence);

  const zoneW = 1200 / wispCount;
  const homeX = zoneW * i + zoneW * 0.5;
  let side = cycleIndex % 2 === 0 ? 1 : -1;
  if (i % 2 === 1) side *= -1;
  const baseX = homeX + side * (seed(i, 3) * zoneW * 0.55);
  const driftX = Math.sin(local * Math.PI * 1.4 + i * 2.0) * 40;
  const cy = 120 + seed(i, 4) * 60;

  const shimmer = flare > 0.04 ? (0.82 + 0.18 * Math.sin(t * 10.5 + i * 6.3)) * flare + (1 - flare) : 1;
  const growth = (0.8 + presence * 0.35) * (1 + flare * 0.7) * shimmer;

  const sz = WISP_SIZES[i % WISP_SIZES.length];
  const d = groundRibbonPath(baseX + driftX, cy, sz.halfLen * growth, sz.thickness * growth, t * 1.6 + i * 2.4);
  const opacity = Math.min(0.72, (presence * (1 + flare * 1.3) + flare * 0.35) * shimmer);
  return { d, opacity };
}
