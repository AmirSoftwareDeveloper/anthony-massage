import FeatureGrid from "@/components/experience/FeatureGrid";
import HomeSection from "@/components/home-section";

import SpillCascade from "./SpillCascade";

type WelcomeProps = {
  sectionRef: (el: HTMLElement | null) => void;
};

const Welcome = ({ sectionRef }: WelcomeProps) => (
  <HomeSection
    id="welcome"
    eyebrow="Welcome to Anthony Massage Works"
    heading="Massage Therapy in Issaquah, WA for Pain Relief & Mobility."
    layout="centered"
    position={1}
    sectionRef={sectionRef}
    decoration={<SpillCascade />}
  >
    <p className="mb-5 max-w-3xl text-base font-light leading-loose text-white/85 last:mb-0">
      Anthony Massage Works offers personalized massage therapy in Issaquah, WA, helping you relieve pain, improve
      mobility, and support lasting wellness through customized bodywork.
    </p>

    <FeatureGrid
      features={[
        {
          icon: "heart",
          title: "Individualized Care",
          text: "No two bodies compensate the same, so no two sessions ever look alike.",
          ctaText: "Meet Anthony",
          ctaHref: "/about-us",
        },
        {
          icon: "hand",
          title: "Real, Hands-On Experience",
          text: "Therapeutic massage and fascia work, brought in when your body needs it.",
          ctaText: "Explore Services",
          ctaHref: "/services",
        },
        {
          icon: "waves",
          title: "A Conversation, Not a Routine",
          text: "Every session starts by listening closely to what your body needs today.",
          ctaText: "Book a Session",
          ctaHref: "/contact-us",
        },
      ]}
    />
  </HomeSection>
);

export default Welcome;
