import { TESTIMONIALS, TESTIMONIALS_SECTION } from "@/constants/testimonials";

import TestimonialGrid from "@/components/experience/TestimonialGrid";
import HomeSection from "@/components/home-section";

type TestimonialsProps = {
  sectionRef: (el: HTMLElement | null) => void;
};

const Testimonials = ({ sectionRef }: TestimonialsProps) => (
  <HomeSection
    id="testimonials"
    heading={TESTIMONIALS_SECTION.heading}
    layout="centered"
    /* Deliberately off the ramp: shares stop 3 with "Massage Therapy That Looks
       Beyond Where It Hurts." so both carry that section's background. */
    position={3}
    sectionRef={sectionRef}
  >
    <p className="mb-5 max-w-3xl text-base font-light leading-loose text-white/85 last:mb-0">
      {TESTIMONIALS_SECTION.lead}
    </p>

    <TestimonialGrid items={TESTIMONIALS} />
  </HomeSection>
);

export default Testimonials;
