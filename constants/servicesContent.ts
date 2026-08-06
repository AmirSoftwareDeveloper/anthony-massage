import type { InteriorSectionContent } from "@/types";

export const SERVICES_SECTIONS: InteriorSectionContent[] = [
  {
    id: "intro",
    eyebrow: "Services",
    title: "What It's Like to Be on My Table.",
    lead: true,
    blocks: [
      { type: "p", text: "I'm interested in how you got here." },
      {
        type: "p",
        text: "We'll spend the first few minutes just talking about what's been going on, what you're feeling, and what you'd like out of today's session. I'm not listening for the perfect explanation. I'm trying to understand your experience and get a sense of the lay of the land.",
      },
    ],
    media: {
      main: {
        src: "/images/about/room-towels.jpeg",
        alt: "Folded towels on a dressed treatment table, candles lit behind",
      },
    },
  },
  {
    id: "both-sides",
    eyebrow: "From Both Sides",
    title: "I've Been There Too.",
    blocks: [
      {
        type: "p",
        text: "If you've been living with pain for a while, you might know this feeling: lying on the table, hoping the therapist stops right there. Hoping they find the spot. Hoping they don't glide past it.",
      },
      {
        type: "p",
        text: "I've lived with pain too. I know that hope from the other side of the table. It's part of why I won't glide past it.",
      },
    ],
  },
  {
    id: "on-the-table",
    eyebrow: "On the Table",
    title: "Where the Work Goes.",
    blocks: [
      {
        type: "p",
        text: "Once you're on the table, my attention shifts to how your body is responding. Pain has a way of getting our attention, but it isn't always the place that needs the most attention. Sometimes we spend the whole session right where it hurts, and sometimes we need to relieve tension somewhere else in the body to help the places in pain.",
      },
      {
        type: "p",
        text: "Throughout the session, my goal is always to help move you in the direction of your goal. Sometimes that means staying right where it hurts. Sometimes it means following what your body is presenting somewhere completely different. If we end up working somewhere you weren't expecting, I'll usually tell you what I'm finding and why we're going there, so you understand what we're exploring together. Unless you're the type to sleep through this kind of work. That's okay too.",
      },
    ],
    media: {
      main: { src: "/images/about/lower-back.jpeg", alt: "Both hands working the lower back during a session" },
    },
  },
  {
    id: "depth",
    eyebrow: "Depth",
    title: "Without Bracing.",
    blocks: [
      {
        type: "p",
        text: "There's a particular depth I'm always working toward: as far in as I can go without your body bracing against it. Sometimes that depth is deep pressure. Sometimes it isn't. The real question isn't how much pressure you can tolerate. It's how much your nervous system can actually receive without guarding.",
      },
    ],
  },
  {
    id: "your-voice",
    eyebrow: "Your Voice",
    title: "Tell Me What You Feel.",
    blocks: [
      {
        type: "p",
        text: "Most of the time I can feel that under my hands. Every now and then, though, your experience tells me something mine can't.",
      },
      {
        type: "p",
        text: "If you're noticing something, tell me. Especially if it's connected to something you've been trying to work through. You feel everything from the inside. I don't.",
      },
      {
        type: "p",
        text: "Sometimes the worry of waiting to see if I'll find “the spot” can become part of what your body is holding onto. Sometimes just saying it out loud is enough to change things. It gives us another way in.",
      },
      {
        type: "p",
        text: "Not everyone needs this. Plenty of people would rather surrender and let me work. Both are good. It depends on what you're working through, and what feels right to you.",
      },
    ],
    media: {
      main: {
        src: "/images/about/head-massage.jpeg",
        alt: "Scalp and temple work by candlelight, client lying face up",
      },
    },
  },
  {
    id: "the-moment",
    eyebrow: "The Moment",
    title: "That's It.",
    blocks: [
      {
        type: "p",
        text: "Then there's the moment you'll say, “That's it… right there.” Not because I found a sore spot, but because we found something your body has been asking us to notice.",
      },
      {
        type: "p",
        text: "From there, it's all about your body leading. It has stories to tell. Some places soften quickly. Others take time. Little by little, your nervous system settles, and we move in the direction of your goal.",
      },
    ],
  },
  {
    id: "before-you-come",
    eyebrow: "Before You Come In",
    title: "Begin Where You Are.",
    blocks: [
      {
        type: "p",
        text: "One thing I'd like you to know before you come in is that you don't have to know exactly what's causing the pain, or even be able to describe it perfectly. That's part of what we'll explore together.",
      },
      {
        type: "p",
        text: "No two sessions are the same. Your body is always changing. Because of that, I don't expect every session to unfold the same way. We simply begin with what your body is presenting that day and go from there.",
      },
    ],
    media: {
      main: {
        src: "/images/about/candlelit-session.jpeg",
        alt: "Candles in the foreground, a session underway in soft focus behind",
      },
    },
  },
  {
    id: "areas",
    eyebrow: "Areas I Commonly Work With",
    title: "Where Relief Often Begins.",
    blocks: [
      {
        type: "p",
        text: "Many people come in because something simply isn't moving the way it used to. Common reasons include:",
      },
      {
        type: "list",
        items: [
          "Neck & Shoulders",
          "Low Back",
          "Hips",
          "Knees",
          "Headaches & Jaw",
          "Stress & Recovery",
          "Athletic Performance",
          "Mobility",
        ],
      },
      {
        type: "quiet",
        text: "If your experience isn't listed, that's okay. The body doesn't organize itself into categories. People don't either.",
      },
    ],
    media: {
      main: {
        src: "/images/about/abdominal-work.jpeg",
        alt: "Abdominal work against a dark background, lit from the side",
      },
    },
  },
];
