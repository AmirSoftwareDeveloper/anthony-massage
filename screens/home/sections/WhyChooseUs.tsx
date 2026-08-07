import NextImage from "next/image";

import ReasonGrid from "@/components/experience/ReasonGrid";
import HomeSection from "@/components/home-section";

type WhyChooseUsProps = {
  sectionRef: (el: HTMLElement | null) => void;
};

const WhyChooseUs = ({ sectionRef }: WhyChooseUsProps) => (
  <HomeSection
    id="why-choose-us"
    heading="Why Choose Anthony Massage Works."
    layout="aside-media"
    position={1}
    sectionRef={sectionRef}
    media={
      <div className="relative aspect-4/5 min-h-0 flex-1 overflow-hidden rounded-3xl shadow-xl lg:aspect-auto">
        <NextImage
          src="/images/about/room-towels.jpeg"
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
          icon: "lotus",
          title: "A Conversation First",
          text: "We start by talking through what hurts, what changed, and what you want out of today.",
        },
        {
          icon: "vesica",
          title: "Assessment Before Pressure",
          text: "I look at how your body is actually moving before any deep work begins.",
        },
        {
          icon: "petal",
          title: "Therapeutic & Fascia Work",
          text: "Slow, specific contact held long enough for tissue to soften, at a depth you can receive.",
        },
        {
          icon: "drop",
          title: "Techniques Matched to You",
          text: "Hot stones, stretching, intraoral jaw release, or CBD oil, only when your body asks.",
        },
        {
          icon: "foliage",
          title: "Unhurried Time, Quiet Studio",
          text: "60 or 90 focused minutes in a private Issaquah room, with parking at the door.",
        },
        {
          icon: "uplift",
          title: "Aftercare You Can Use",
          text: "Simple stretches and self-care to help the work hold between sessions.",
        },
      ]}
    />
  </HomeSection>
);

export default WhyChooseUs;
