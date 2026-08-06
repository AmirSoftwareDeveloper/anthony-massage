export const PHASE_DOT_LABELS = [
  "Phase 1: Compressed",
  "Phase 2: Light enters",
  "Phase 3: Rising",
  "Phase 4: Open and renewed",
] as const;

export const HOME_EXPERIENCE_FOOTER = {
  position: 14,
  eyebrow: "Anthony Massage Works",
  title: "Ready to imagine feeling different?",
  sub: "Reach out below, and I'll follow up to find a time that works.",
  cta: "Book your first session",
  fine: "Anthony Massage Works. Release. Realign. Renew.",
};

export const HOME_EXPERIENCE_HERO_FRAMES = [
  "/images/hero/frame1.jpg",
  "/images/hero/frame2.jpg",
  "/images/hero/frame3.jpg",
  "/images/hero/frame4.jpg",
];

// board-color layer: same frames with the billboard face isolated in color
// and everything else pre-baked to grayscale, so revealing color can never
// tint the scene outside the board
export const HOME_EXPERIENCE_HERO_FRAMES_ISO = [
  "/images/hero/frame1-iso.jpg",
  "/images/hero/frame2-iso.jpg",
  "/images/hero/frame3-iso.jpg",
  "/images/hero/frame4-iso.jpg",
];

// street-bloom layer: full-color scene revealed where the light spills off
// the board's lower-left corner onto the street
export const HOME_EXPERIENCE_HERO_FRAMES_SPILL = [
  "/images/hero/frame1-spill.jpg",
  "/images/hero/frame2-spill.jpg",
  "/images/hero/frame3-spill.jpg",
  "/images/hero/frame4-spill.jpg",
];
