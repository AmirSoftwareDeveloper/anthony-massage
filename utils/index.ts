import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function paramsToObject(entries: Iterable<[string, string]>): Record<string, string> {
  return Object.fromEntries(entries);
}
