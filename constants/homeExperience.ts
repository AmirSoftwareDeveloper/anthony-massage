import type { ContentBlock } from "@/types";

export interface HomeExperienceSection {
  id: string;
  position: number;
  eyebrow: string;
  heading: string;
  blocks: ContentBlock[];
  /** "split" places the eyebrow/heading beside the section's content instead of above it. */
  layout?: "default" | "split";
}

export const PHASE_DOT_LABELS = [
  "Phase 1 — Compressed",
  "Phase 2 — Light enters",
  "Phase 3 — Rising",
  "Phase 4 — Open and renewed",
] as const;

export const HOME_EXPERIENCE_SECTIONS: HomeExperienceSection[] = [
  {
    id: "welcome",
    position: 1,
    eyebrow: "Welcome",
    heading: "Welcome to Anthony Massage Works.",
    blocks: [
      {
        type: "p",
        text: "A quiet space built around one idea: your body already knows how to heal. My work is to help it remember how.",
      },
      {
        type: "features",
        features: [
          {
            icon: "heart",
            title: "Individualized Care",
            text: "No two bodies compensate the same, so no two sessions look the same — the work follows what your body shows me.",
            ctaText: "Meet Anthony",
            ctaHref: "/about-us",
          },
          {
            icon: "hand",
            title: "Real, Hands-On Experience",
            text: "Therapeutic massage, mobility work, and fascia-focused bodywork, brought in only when your body is asking for it.",
            ctaText: "Explore Services",
            ctaHref: "/services",
          },
          {
            icon: "waves",
            title: "A Conversation, Not a Routine",
            text: "Every session starts by listening — to what your body is doing today, not what a routine says it should need.",
            ctaText: "Book a Session",
            ctaHref: "/contact-us",
          },
        ],
      },
    ],
  },
  {
    id: "philosophy",
    position: 2,
    eyebrow: "Our Philosophy",
    heading: "Change, not just relief.",
    blocks: [
      {
        type: "p",
        text: "I don't believe in one-size-fits-all bodywork. Pain rarely announces where it actually begins, so every session starts by listening — to what your body is doing today, not what a routine says it should need.",
      },
      {
        type: "p",
        text: "A shoulder can become restricted because of the chest. A headache may begin in the neck or jaw. Persistent low back pain often has roots in the hips, legs, or years of compensation. Finding where the pattern begins is often the first step toward changing it.",
      },
      {
        type: "image",
        src: "/images/hero/frame5.jpg",
        alt: "Anthony Massage Works billboard, lit at dusk",
        ratio: "4 / 5",
      },
    ],
  },
  {
    id: "adapting",
    position: 3,
    eyebrow: "Understanding",
    heading: "Your body is always adapting.",
    blocks: [
      {
        type: "p",
        text: "The body is remarkably intelligent. When movement becomes restricted, it doesn't simply stop moving. It adapts.",
      },
      { type: "p", text: "Other muscles begin working harder. Posture changes. Movement patterns shift." },
      { type: "p", text: "Over time, those compensations become so familiar they begin to feel normal." },
      { type: "p", text: "Until they don't." },
    ],
  },
  {
    id: "what-i-help-with",
    position: 4,
    eyebrow: "What I Help With",
    heading: "Here's where most people begin.",
    blocks: [
      { type: "p", text: "People come to the table for all kinds of reasons. Most of them fall into a few familiar shapes." },
      {
        type: "categories",
        entries: [
          {
            title: "Pain Relief",
            text: "Tension that's settled in and stayed — in the neck, the low back, the jaw. Work aimed at the pattern underneath it, not just the spot that's loudest.",
          },
          {
            title: "Injury Recovery",
            text: "Old injuries the body worked around instead of resolving, and new ones still finding their way back to full movement.",
          },
          {
            title: "Mobility Improvement",
            text: "Range that narrowed gradually, without one moment to point to — restored the same way it was lost, a little at a time.",
          },
          {
            title: "Stress & Tension Relief",
            text: "A nervous system that hasn't fully downshifted in a while. Sessions built to help it find that gear again.",
          },
        ],
      },
      {
        type: "quiet",
        text: "If what brought you here isn't listed above, that's alright. The body doesn't organize itself into categories. People don't either.",
      },
    ],
  },
  {
    id: "services",
    position: 5,
    eyebrow: "Our Services",
    heading: "Bodywork built around your body, not a menu.",
    blocks: [
      {
        type: "p",
        text: "The foundation is sustained, specific contact — the kind that lets fascia and tissue soften and reorganize on its own terms, at whatever depth your nervous system can actually receive without bracing. When a session calls for it, that work is joined by:",
      },
      {
        type: "service-grid",
        services: [
          { icon: "hand", title: "Therapeutic Massage" },
          { icon: "activity", title: "Stretching & Mobility Work" },
          { icon: "wind", title: "Intraoral (Jaw) Release" },
          { icon: "flame", title: "Hot Stones" },
          { icon: "droplet", title: "CBD-Infused Oil" },
        ],
        ctaText: "Explore Services",
        ctaHref: "/services",
      },
      {
        type: "p",
        text: "These aren't chosen from a menu in advance. They're brought in when your body is asking for them.",
      },
    ],
  },
  {
    id: "pricing",
    position: 6,
    eyebrow: "Pricing",
    heading: "Pricing plans for your wellness journey.",
    blocks: [
      {
        type: "p",
        text: "Simple, session-based pricing. No two bodies compensate the same, so no two sessions should be the same — but every session starts from the same clear starting point.",
      },
      {
        type: "pricing-list",
        note: "Sample pricing shown below — reach out for current rates.",
        services: [
          { icon: "hand", title: "Therapeutic Massage (60 min)", price: "from $110" },
          { icon: "activity", title: "Deep Tissue Massage (60 min)", price: "from $130" },
          { icon: "flame", title: "Hot Stone Add-On", price: "from $35" },
          { icon: "waves", title: "Extended Session (90 min)", price: "from $160" },
        ],
        ctaText: "Ask About Pricing",
        ctaHref: "/contact-us",
      },
    ],
  },
  {
    id: "how-sessions-work",
    position: 7,
    eyebrow: "How Sessions Work",
    heading: "What happens when we begin.",
    blocks: [
      { type: "p", text: "Every session follows the same rhythm, even though no two sessions look the same." },
      {
        type: "steps",
        entries: [
          {
            title: "Listening First",
            text: "We start by talking — what's been going on, what you're feeling, what you'd like out of today. Then I get a sense of how your body is actually moving, not just what it's reporting.",
          },
          {
            title: "Personalized, Responsive Treatment",
            text: "The work follows what your body shows me, session to session. What helped the first time may not be what's needed the fourth — so the plan changes as you do.",
          },
          {
            title: "Continued Progress",
            text: "Change doesn't end when you leave the table. Each session becomes the starting point for the next, and most people notice the shifts add up over a short series.",
          },
        ],
      },
      { type: "quiet", text: "This isn't rushed work. Sometimes gentle. Sometimes deep. Always intentional." },
    ],
  },
  {
    id: "showcase",
    position: 8,
    eyebrow: "Client Care",
    heading: "Providing thoughtful care, session after session.",
    blocks: [
      {
        type: "image",
        src: "/images/hero/frame6.jpg",
        alt: "Anthony Massage Works billboard, lit at sunrise",
        ratio: "21 / 9",
      },
      {
        type: "p",
        text: "From the moment we start talking, the goal is to understand your experience, not just your symptoms. Every session is personalized, responsive, and unhurried — sometimes gentle, sometimes deep, always intentional.",
      },
      { type: "p", text: "The goal isn't to chase symptoms. It's to restore movement where it has gradually become restricted." },
      { type: "quiet", text: "The body often knows what to do once it has room to do it." },
    ],
  },
  {
    id: "why-anthony",
    position: 9,
    eyebrow: "Why Anthony",
    heading: "Why people keep coming back.",
    blocks: [
      {
        type: "p",
        text: "I don't walk in with a plan already decided. Every session starts by finding where a pattern actually begins — not just where it hurts right now.",
      },
      {
        type: "list",
        items: [
          "Root-cause focus, not just symptom relief",
          "Fully individualized sessions — no fixed routine",
          "Trained in fascia-focused, nervous-system-aware bodywork",
          "[Add years of experience / certifications]",
          "Lived experience with chronic pain — I know the other side of the table",
        ],
      },
      {
        type: "quiet",
        text: "Every person teaches me something. Helping someone understand what's happening in their own body remains one of the things I love most about this work.",
      },
      { type: "cta", text: "Meet Anthony", href: "/about-us" },
    ],
  },
  {
    id: "faq",
    position: 10,
    eyebrow: "Got a Question?",
    heading: "Frequently Asked Questions",
    layout: "split",
    blocks: [
      {
        type: "faq",
        faqs: [
          {
            question: "What happens in a first session?",
            answer:
              "We'll spend the first few minutes just talking — what's been going on, what you're feeling, what you'd like out of today. From there, the session begins by listening to how your body is actually moving, not just what it's reporting.",
          },
          {
            question: "Do I need to know exactly what's causing my pain before booking?",
            answer:
              "Not at all. You don't have to know exactly what's causing the pain, or even be able to describe it perfectly. That's part of what we'll explore together.",
          },
          {
            question: "Is every session the same?",
            answer:
              "No two bodies compensate the same, so no two sessions look the same. The work follows what your body shows me, session to session — what helped the first time may not be what's needed the fourth.",
          },
          {
            question: "What techniques might be included in a session?",
            answer:
              "Stretching and mobility work, intraoral (jaw) release, hot stones, and CBD-infused oil where appropriate. These aren't chosen from a menu in advance — they're brought in when your body is asking for them.",
          },
          {
            question: "How do I book a session?",
            answer:
              "Reach out through the contact form below with a bit about what's going on, and I'll follow up to find a time that works.",
          },
        ],
      },
    ],
  },
];

export const HOME_EXPERIENCE_FOOTER = {
  position: 11,
  eyebrow: "Anthony Massage Works",
  title: "Ready to imagine feeling different?",
  sub: "Reach out below, and I'll follow up to find a time that works.",
  cta: "Book your first session",
  fine: "Anthony Massage Works — Release. Realign. Renew.",
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
