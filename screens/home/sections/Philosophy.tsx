import NextImage from "next/image";

import HomeSection from "@/components/home-section";

type PhilosophyProps = {
  sectionRef: (el: HTMLElement | null) => void;
};

const Philosophy = ({ sectionRef }: PhilosophyProps) => (
  <HomeSection
    id="philosophy"
    eyebrow="Our Philosophy"
    heading="Change, not just relief."
    position={2}
    sectionRef={sectionRef}
  >
    <p>
      I don&apos;t believe in one-size-fits-all bodywork. Pain rarely announces where it actually begins, so every
      session starts by listening — to what your body is doing today, not what a routine says it should need.
    </p>

    <p>
      A shoulder can become restricted because of the chest. A headache may begin in the neck or jaw. Persistent low
      back pain often has roots in the hips, legs, or years of compensation. Finding where the pattern begins is
      often the first step toward changing it.
    </p>

    <div
      className="exp-media-frame"
      style={{ aspectRatio: "4 / 5" }}
    >
      <NextImage
        src="/images/hero/frame5.jpg"
        alt="Anthony Massage Works billboard, lit at dusk"
        fill
        sizes="(min-width: 768px) 720px, 100vw"
        className="object-cover"
      />
    </div>
  </HomeSection>
);

export default Philosophy;
