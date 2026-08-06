import NextImage from "next/image";

import HomeSection from "@/components/home-section";

type ShowcaseProps = {
  sectionRef: (el: HTMLElement | null) => void;
};

const Showcase = ({ sectionRef }: ShowcaseProps) => (
  <HomeSection
    id="showcase"
    eyebrow="Client Care"
    heading="Providing thoughtful care, session after session."
    position={9}
    sectionRef={sectionRef}
  >
    <div
      className="relative mt-3.5 overflow-hidden rounded-xl shadow-lg"
      style={{ aspectRatio: "21 / 9" }}
    >
      <NextImage
        src="/images/hero/frame6.jpg"
        alt="Anthony Massage Works billboard, lit at sunrise"
        fill
        sizes="(min-width: 768px) 720px, 100vw"
        className="object-cover"
      />
    </div>

    <p className="mb-5 max-w-3xl text-base font-light leading-loose text-white/85 last:mb-0">
      From the moment we start talking, the goal is to understand your experience, not just your symptoms. Every session
      is personalized, responsive, and unhurried: sometimes gentle, sometimes deep, always intentional.
    </p>

    <p className="mb-5 max-w-3xl text-base font-light leading-loose text-white/85 last:mb-0">
      The goal isn&apos;t to chase symptoms. It&apos;s to restore movement where it has gradually become restricted.
    </p>

    <p className="exp-quiet mb-5 max-w-3xl text-base font-light leading-loose text-white/85 last:mb-0">
      The body often knows what to do once it has room to do it.
    </p>
  </HomeSection>
);

export default Showcase;
