import { SERVICES_SECTIONS } from "@/constants/servicesContent";

import ContentBlock from "@/components/content-block";
import InteriorCollage from "@/components/interior-collage";
import PageHero from "@/components/page-hero";

const Services = () => {
  let illustrated = 0;

  return (
    <>
      <PageHero
        srTitle="Services | Anthony Massage Works"
        eyebrow="Services"
        caption="Where relief begins to take shape."
        variant="rising"
      />

      {SERVICES_SECTIONS.map((section) => {
        const flip = Boolean(section.media?.main) && illustrated++ % 2 === 1;

        return (
          <InteriorCollage
            key={section.id}
            id={section.id}
            eyebrow={section.eyebrow}
            title={section.title}
            media={section.media}
            flip={flip}
          >
            {section.blocks.map((block, bi) => (
              <ContentBlock
                key={bi}
                block={block}
              />
            ))}
          </InteriorCollage>
        );
      })}
    </>
  );
};

export default Services;
