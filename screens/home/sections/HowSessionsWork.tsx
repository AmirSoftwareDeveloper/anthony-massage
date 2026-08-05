import HomeSection from "@/components/home-section";
import StepList from "@/components/experience/StepList";

type HowSessionsWorkProps = {
  sectionRef: (el: HTMLElement | null) => void;
};

const HowSessionsWork = ({ sectionRef }: HowSessionsWorkProps) => (
  <HomeSection
    id="how-sessions-work"
    eyebrow="How Sessions Work"
    heading="What happens when we begin."
    position={8}
    sectionRef={sectionRef}
  >
    <p>Every session follows the same rhythm, even though no two sessions look the same.</p>

    <StepList
      entries={[
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
      ]}
    />

    <p className="exp-quiet">This isn&apos;t rushed work. Sometimes gentle. Sometimes deep. Always intentional.</p>
  </HomeSection>
);

export default HowSessionsWork;
