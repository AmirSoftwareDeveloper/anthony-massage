import ServiceGrid from "@/components/experience/ServiceGrid";
import HomeSection from "@/components/home-section";

type ServicesProps = {
  sectionRef: (el: HTMLElement | null) => void;
};

const Services = ({ sectionRef }: ServicesProps) => (
  <HomeSection
    id="services"
    eyebrow="Our Services"
    heading="Bodywork built around your body, not a menu."
    position={6}
    sectionRef={sectionRef}
  >
    <p className="mb-5 max-w-3xl text-base font-light leading-loose text-white/85 last:mb-0">
      The foundation is sustained, specific contact, the kind that lets fascia and tissue soften and reorganize on its
      own terms, at whatever depth your nervous system can actually receive without bracing. When a session calls for
      it, that work is joined by:
    </p>

    <ServiceGrid
      services={[
        { icon: "hand", title: "Therapeutic Massage" },
        { icon: "activity", title: "Stretching & Mobility Work" },
        { icon: "wind", title: "Intraoral (Jaw) Release" },
        { icon: "flame", title: "Hot Stones" },
        { icon: "droplet", title: "CBD-Infused Oil" },
      ]}
      ctaText="Explore Services"
      ctaHref="/services"
    />

    <p className="mb-5 max-w-3xl text-base font-light leading-loose text-white/85 last:mb-0">
      These aren&apos;t chosen from a menu in advance. They&apos;re brought in when your body is asking for them.
    </p>
  </HomeSection>
);

export default Services;
