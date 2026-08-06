import NextImage from "next/image";

import HomeSection from "@/components/home-section";

type OurApproachProps = {
  sectionRef: (el: HTMLElement | null) => void;
};

const OurApproach = ({ sectionRef }: OurApproachProps) => (
  <HomeSection
    id="our-approach"
    heading="Where the pain is rarely where it begins"
    layout="header-media"
    position={3}
    sectionRef={sectionRef}
    lead={
      <p className="mb-5 max-w-3xl text-base font-light leading-loose text-white/85 last:mb-0">
        A shoulder can become restricted because of the chest. A headache may begin in the neck or jaw. Persistent low
        back pain often has roots in the hips, legs, or years of compensation, and finding that beginning is where
        change starts.
      </p>
    }
  >
    <div
      className="relative overflow-hidden rounded-3xl shadow-xl"
      style={{ aspectRatio: "16 / 9" }}
    >
      <NextImage
        src="/images/hero/frame8.jpg"
        alt="Anthony Massage Works billboard at sunset, reading 'Imagine feeling different.'"
        fill
        sizes="(min-width: 1360px) 1360px, 100vw"
        className="object-cover"
      />
    </div>
  </HomeSection>
);

export default OurApproach;
