import {
  Activity,
  Award,
  Droplet,
  Flame,
  Hand,
  Heart,
  Leaf,
  MessageCircle,
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
  award: Award,
  leaf: Leaf,
  message: MessageCircle,
};

export const getExperienceIcon = (name: string): LucideIcon => EXPERIENCE_ICONS[name] ?? Sparkles;
