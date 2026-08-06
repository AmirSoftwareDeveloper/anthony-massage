import type { TestimonialItem } from "@/types";

/* ============================================================================
   PLACEHOLDER CONTENT — NOT REAL REVIEWS. DO NOT SHIP AS-IS.

   Every quote and name below is invented, and the "More than 250 five-star
   reviews on Google" line in TESTIMONIALS_SECTION is an invented figure. They
   exist only so the section can be built and reviewed with realistic-looking
   copy.

   Published as-is these would be fabricated reviews of a real business, which
   is both an FTC deceptive-practices problem (16 CFR Part 465) and a Google
   Business Profile policy violation. Replace each entry with a real review —
   ideally pulled from the actual Google Business Profile — and correct the
   review count before this page goes live.

   Same convention as the NOT CONFIRMED note on the stats in
   screens/home/sections/Philosophy.tsx.
   ========================================================================= */

export const TESTIMONIALS_SECTION = {
  heading: "What our clients say about us",
  /* PLACEHOLDER: invented figure — replace with the real Google review count,
     or delete this line if the number isn't worth quoting yet. */
  lead: "More than 250 five-star reviews on Google",
};

export const TESTIMONIALS: TestimonialItem[] = [
  {
    kind: "quote",
    name: "Alina M.",
    testimonial:
      "It's not just a massage, it's a full-body reset. The energy, the warmth, the atmosphere: everything is designed to make you feel safe and at ease. Every visit feels like a mini retreat from the world. I always leave with a calm mind and a body that feels brand new.",
    date: "",
    imgSrc: "",
    rating: 5,
  },
  {
    kind: "quote",
    name: "James T.",
    testimonial:
      "I came in carrying weeks of stress, tension, and sleepless nights. One session here changed everything. The therapist worked through the tightness in my back and shoulders with such skill and care. I left feeling grounded, peaceful, and for the first time in a long while, pain-free.",
    date: "",
    imgSrc: "",
    rating: 5,
  },
  {
    kind: "media",
    imgSrc: "/images/about/technique.jpeg",
    alt: "[Alt text]",
  },
  {
    kind: "quote",
    name: "Samantha L.",
    testimonial:
      "From the moment I walked in, I felt held and supported. The therapist took the time to understand what my body needed, and the massage was both deeply relaxing and therapeutic. I walked out feeling lighter: physically, mentally, and emotionally.",
    date: "",
    imgSrc: "",
    rating: 5,
  },
  {
    kind: "quote",
    name: "Daniel K.",
    testimonial:
      "Incredible experience from start to finish. The therapist had an intuitive touch and created a space that felt calm and restorative. My chronic neck and shoulder pain has improved so much, and the effects last long after the session.",
    date: "",
    imgSrc: "",
    rating: 5,
  },
  {
    kind: "media",
    imgSrc: "/images/about/restriction.jpeg",
    alt: "[Alt text]",
  },
];
