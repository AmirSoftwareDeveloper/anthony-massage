import FaqList from "@/components/experience/FaqList";
import HomeSection from "@/components/home-section";

type FaqProps = {
  sectionRef: (el: HTMLElement | null) => void;
};

const Faq = ({ sectionRef }: FaqProps) => (
  <HomeSection
    id="faq"
    eyebrow="Got a Question?"
    heading="Frequently Asked Questions"
    position={11}
    layout="split"
    sectionRef={sectionRef}
  >
    <FaqList
      faqs={[
        {
          question: "What happens in a first session?",
          answer:
            "We'll spend the first few minutes just talking about what's been going on, what you're feeling, what you'd like out of today. From there, the session begins by listening to how your body is actually moving, not just what it's reporting.",
        },
        {
          question: "Do I need to know exactly what's causing my pain before booking?",
          answer:
            "Not at all. You don't have to know exactly what's causing the pain, or even be able to describe it perfectly. That's part of what we'll explore together.",
        },
        {
          question: "Is every session the same?",
          answer:
            "No two bodies compensate the same, so no two sessions look the same. The work follows what your body shows me, session to session. What helped the first time may not be what's needed the fourth.",
        },
        {
          question: "What techniques might be included in a session?",
          answer:
            "Stretching and mobility work, intraoral (jaw) release, hot stones, and CBD-infused oil where appropriate. These aren't chosen from a menu in advance. They're brought in when your body is asking for them.",
        },
        {
          question: "How do I book a session?",
          answer:
            "Reach out through the contact form below with a bit about what's going on, and I'll follow up to find a time that works.",
        },
      ]}
    />
  </HomeSection>
);

export default Faq;
