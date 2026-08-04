import { HERO_BOARD, type BoardBox } from "@/lib/experience/engine";

export type PageHeroVariant = "present" | "rising" | "arrived" | "compressed";

export interface PageHeroVariantConfig {
  src: string;
  iso: string;
  spill: string;
  board: BoardBox;
}

export const PAGE_HERO_VARIANTS: Record<PageHeroVariant, PageHeroVariantConfig> = {
  present: {
    src: "/images/hero/page-hero-present.jpg",
    iso: "/images/hero/page-hero-present-iso.jpg",
    spill: "/images/hero/page-hero-present-spill.jpg",
    board: { L: 303, R: 1294, T: 300, B: 679 },
  },
  rising: {
    src: "/images/hero/page-hero-rising.jpg",
    iso: "/images/hero/page-hero-rising-iso.jpg",
    spill: "/images/hero/page-hero-rising-spill.jpg",
    board: { L: 284, R: 1331, T: 300, B: 697 },
  },
  arrived: {
    src: "/images/hero/page-hero-arrived.jpg",
    iso: "/images/hero/page-hero-arrived-iso.jpg",
    spill: "/images/hero/page-hero-arrived-spill.jpg",
    board: { L: 263, R: 1319, T: 280, B: 688 },
  },
  compressed: {
    src: "/images/hero/billboard-1-compressed.jpg",
    iso: "/images/hero/billboard-1-compressed-iso.jpg",
    spill: "/images/hero/billboard-1-compressed-spill.jpg",
    board: HERO_BOARD,
  },
};
