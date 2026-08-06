import NextImage from "next/image";

import ReasonGrid from "@/components/experience/ReasonGrid";
import HomeSection from "@/components/home-section";

type WhyChooseUsProps = {
  sectionRef: (el: HTMLElement | null) => void;
};

const WhyChooseUs = ({ sectionRef }: WhyChooseUsProps) => (
  <HomeSection
    id="why-choose-us"
    eyebrow="Why Choose Us"
    heading="Every session here includes:"
    layout="aside-media"
    position={7}
    sectionRef={sectionRef}
    media={
      <div className="relative aspect-4/5 overflow-hidden rounded-3xl shadow-xl">
        <NextImage
          src="/images/about/technique.jpeg"
          alt="[Alt text]"
          fill
          sizes="(min-width: 1024px) 420px, 100vw"
          className="object-cover"
        />
      </div>
    }
  >
    <ReasonGrid
      reasons={[
        {
          icon: "hand",
          title: "Tailored Sessions",
          text: "Built Around Your Body, Not a Routine",
        },
        {
          icon: "target",
          title: "Root-Cause Work",
          text: "Relief That Holds Beyond the Table",
        },
        {
          icon: "award",
          title: "Advanced Training",
          text: "Trained in Fascia-Focused Bodywork",
        },
        {
          icon: "moon",
          title: "A Quiet Studio",
          text: "Calm, Private Space to Fully Settle",
        },
        {
          icon: "message",
          title: "Clear Guidance",
          text: "You'll Understand What We're Doing",
        },
        {
          icon: "leaf",
          title: "Ongoing Support",
          text: "Simple Practices for the Days After",
        },
      ]}
    />
  </HomeSection>
);

export default WhyChooseUs;
