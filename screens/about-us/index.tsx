import PageHero from "@/components/page-hero";

import { ABOUT_US_SECTIONS } from "@/constants/aboutUs";

import ContentBlock from "@/components/content-block";
import InteriorSection from "@/components/interior-section";

const AboutUs = () => {
  return (
    <>
      <PageHero
        srTitle="About Us | Anthony Massage Works"
        eyebrow="About Us"
        caption="The work, and the person behind it."
        variant="present"
      />

      {ABOUT_US_SECTIONS.map((section) => (
        <InteriorSection
          key={section.id}
          id={section.id}
          eyebrow={section.eyebrow}
          title={section.title}
          lead={section.lead}
        >
          {section.blocks.map((block, bi) => (
            <ContentBlock
              key={bi}
              block={block}
            />
          ))}
        </InteriorSection>
      ))}
    </>
  );
};

export default AboutUs;
