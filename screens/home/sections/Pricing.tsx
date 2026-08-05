import HomeSection from "@/components/home-section";
import PricingList from "@/components/experience/PricingList";

type PricingProps = {
  sectionRef: (el: HTMLElement | null) => void;
};

const Pricing = ({ sectionRef }: PricingProps) => (
  <HomeSection
    id="pricing"
    eyebrow="Pricing"
    heading="Pricing plans for your wellness journey."
    position={6}
    sectionRef={sectionRef}
  >
    <p>
      Simple, session-based pricing. No two bodies compensate the same, so no two sessions should be the same — but
      every session starts from the same clear starting point.
    </p>

    <PricingList
      note="Sample pricing shown below — reach out for current rates."
      services={[
        { icon: "hand", title: "Therapeutic Massage (60 min)", price: "from $110" },
        { icon: "activity", title: "Deep Tissue Massage (60 min)", price: "from $130" },
        { icon: "flame", title: "Hot Stone Add-On", price: "from $35" },
        { icon: "waves", title: "Extended Session (90 min)", price: "from $160" },
      ]}
      ctaText="Ask About Pricing"
      ctaHref="/contact-us"
    />
  </HomeSection>
);

export default Pricing;
