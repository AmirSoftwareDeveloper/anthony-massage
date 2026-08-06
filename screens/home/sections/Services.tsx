import Link from "next/link";

import { Routes } from "@/constants/routes";

import ServiceCardGrid from "@/components/experience/ServiceCardGrid";
import HomeSection from "@/components/home-section";
import { Button } from "@/components/ui/button";

type ServicesProps = {
  sectionRef: (el: HTMLElement | null) => void;
};

const Services = ({ sectionRef }: ServicesProps) => (
  <HomeSection
    id="services"
    eyebrow="Our Services"
    heading="Therapeutic Massage Services in Issaquah, WA."
    layout="header-media"
    /* Same stop as "Massage Therapy That Looks Beyond Where It Hurts." — see
       the note in Testimonials.tsx. */
    position={3}
    sectionRef={sectionRef}
    lead={
      <>
        {/* Flush right on wide screens so the copy and the button below it
            share one edge — left-aligned text under a right-aligned button
            reads as a mistake. */}
        <p className="mb-5 max-w-3xl text-base font-light leading-loose text-white/85 last:mb-0 lg:ml-auto lg:text-right">
          Discover personalized massage therapy designed to reduce tension, restore movement, and help you feel your
          best through thoughtful, hands-on care.
        </p>

        <div className="mt-7 lg:text-right">
          <Link href={Routes.SERVICES}>
            <Button
              variant="experience-outline-neutral"
              size="experience"
            >
              View All Services
            </Button>
          </Link>
        </div>
      </>
    }
  >
    <ServiceCardGrid
      finale={{
        title: "Not sure where to start?",
        text: "These aren't chosen from a menu in advance. They're brought in when your body is asking for them.",
        ctaText: "Book a Session",
        ctaHref: Routes.CONTACT,
      }}
      services={[
        {
          icon: "massage",
          title: "Therapeutic Massage",
          tagline: "Sustained contact, specific intent",
          text: "Slow, specific contact held long enough for fascia and tissue to soften and reorganize, at a depth you can receive without bracing.",
          imgSrc: "/images/about/lower-back.jpeg",
          alt: "[Alt text]",
          href: Routes.SERVICES,
        },
        {
          icon: "stretch",
          title: "Stretching & Mobility Work",
          tagline: "Restoring range, a little at a time",
          text: "Assisted movement that meets a joint where it actually is, opening range that narrowed so gradually you never noticed it going.",
          imgSrc: "/images/about/candlelit-session.jpeg",
          alt: "[Alt text]",
          href: Routes.SERVICES,
        },
        {
          icon: "jaw",
          title: "Intraoral (Jaw) Release",
          tagline: "Where headaches often begin",
          text: "Careful work inside and around the jaw, where years of clenching gather, and where a stubborn headache often turns out to begin.",
          imgSrc: "/images/about/head-massage.jpeg",
          alt: "[Alt text]",
          href: Routes.SERVICES,
        },
        {
          icon: "stones",
          title: "Hot Stones",
          tagline: "Warmth that opens the way",
          text: "Steady, penetrating heat laid into the tissue ahead of the hands, so depth arrives on its own instead of being pushed for.",
          imgSrc: "/images/about/hot-stones.jpeg",
          alt: "[Alt text]",
          href: Routes.SERVICES,
        },
        {
          icon: "oil",
          title: "CBD-Infused Oil",
          tagline: "For areas that stay reactive",
          text: "Brought in when an area stays irritable under ordinary work, to settle it enough that the session can land where it needs to.",
          imgSrc: "/images/about/abdominal-work.jpeg",
          alt: "[Alt text]",
          href: Routes.SERVICES,
        },
      ]}
    />
  </HomeSection>
);

export default Services;
