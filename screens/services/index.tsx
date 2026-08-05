import PageHero from "@/components/page-hero";

import { SERVICES_SECTIONS } from "@/constants/servicesContent";

import ContentBlock from "@/components/content-block";
import InteriorSection from "@/components/interior-section";

const Services = () => {
  return (
    <>
      <PageHero
        srTitle="Services | Anthony Massage Works"
        eyebrow="Services"
        caption="Where relief begins to take shape."
        variant="rising"
      />

      {SERVICES_SECTIONS.map((section) => (
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

export default Services;
