import {
  Activity,
  Droplet,
  Flame,
  Hand,
  Heart,
  Moon,
  Sparkles,
  Target,
  Waves,
  Wind,
  type LucideIcon,
} from "lucide-react";

export const EXPERIENCE_ICONS: Record<string, LucideIcon> = {
  hand: Hand,
  activity: Activity,
  wind: Wind,
  flame: Flame,
  droplet: Droplet,
  waves: Waves,
  sparkles: Sparkles,
  target: Target,
  heart: Heart,
  moon: Moon,
};

export const getExperienceIcon = (name: string): LucideIcon => EXPERIENCE_ICONS[name] ?? Sparkles;
