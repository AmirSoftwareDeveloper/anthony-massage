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
    position={3}
    sectionRef={sectionRef}
  >
    <TestimonialGrid items={TESTIMONIALS} />
  </HomeSection>
);

export default Testimonials;
