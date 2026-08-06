import type { InteriorSectionContent } from "@/types";

export const CONTACT_FAQS = [
  {
    question: "What should I wear?",
    answer:
      "Comfortable clothing you can move in. We'll discuss what's appropriate to remove, if anything, based on the work.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "Most people feel a difference after the first. Lasting change usually comes from a short series, spaced out to let your body integrate each one.",
  },
  {
    question: "Do you work with athletes, old injuries, or chronic pain?",
    answer: "Yes. See the Services page for the patterns I work with most often, or just reach out and ask.",
  },
];

export const CONTACT_SECTIONS: InteriorSectionContent[] = [
  {
    id: "pricing",
    eyebrow: "Pricing",
    title: "Straightforward, by session length.",
    blocks: [
      {
        type: "p",
        text: "Sessions are priced by length, with specialty work included as part of the session rather than billed separately. Reach out below and I'll share current rates.",
      },
    ],
  },
  {
    id: "specialty",
    eyebrow: "Specialty Work",
    title: "Tailored as needed.",
    blocks: [
      {
        type: "list",
        items: [
          "Stretching and mobility work",
          "Intraoral (jaw) release",
          "Hot stones",
          "CBD-infused oil, where appropriate",
        ],
      },
      {
        type: "p",
        text: "These aren't a menu to choose from in advance. They're tools I bring in when your body is asking for them. You don't need to know which ones you'll need before you arrive.",
      },
    ],
  },
  {
    id: "cancellation",
    eyebrow: "Cancellation Policy",
    title: "Life happens.",
    blocks: [
      {
        type: "p",
        text: "I ask for advance notice if you need to reschedule or cancel. Sessions cancelled with insufficient notice may be subject to a fee, at my discretion.",
      },
    ],
  },
];
