import type { TeamMember } from "@/types";

/** Portraits live in /images/other/. Roles for Cole and Song are placeholders —
 *  only Anthony's is taken from the site copy. Fill the rest in before launch. */
export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Anthony",
    role: "Massage Therapist",
    image: "/images/other/portrait-anthony.jpg",
    imageAlt: "Anthony, massage therapist at Anthony Massage Works",
  },
  {
    name: "Cole Francis",
    role: "[Role]",
    image: "/images/other/portrait-cole-francis.jpg",
    imageAlt: "Cole Francis",
  },
  {
    name: "Song Ying",
    role: "[Role]",
    image: "/images/other/portrait-song-ying.jpg",
    imageAlt: "Song Ying",
  },
];

export const TEAM_SECTION = {
  eyebrow: "Meet the Team",
  title: "The hands you'll be in.",
};
