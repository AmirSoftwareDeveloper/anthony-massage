import { ABOUT_US_SECTIONS } from "@/constants/aboutUs";
import { TEAM_MEMBERS, TEAM_SECTION } from "@/constants/team";

import ContentBlock from "@/components/content-block";
import TeamGrid from "@/components/experience/TeamGrid";
import InteriorCollage from "@/components/interior-collage";
import PageHero from "@/components/page-hero";
import Title from "@/components/title";

const AboutUs = () => {
  return (
    <>
      <PageHero
        srTitle="About Us | Anthony Massage Works"
        eyebrow="About Us"
        caption="The work, and the person behind it."
        variant="present"
      />

      {ABOUT_US_SECTIONS.map((section, i) => (
        <InteriorCollage
          key={section.id}
          id={section.id}
          eyebrow={section.eyebrow}
          title={section.title}
          media={section.media}
          flip={i % 2 === 1}
        >
          {section.blocks.map((block, bi) => (
            <ContentBlock
              key={bi}
              block={block}
            />
          ))}
        </InteriorCollage>
      ))}

      <section
        id="team"
        className="exp-team-section"
      >
        <div className="mx-auto w-full max-w-340 px-6 py-24 md:px-9 md:py-36">
          <div className="mb-0">
            <Title
              variant="exp"
              subTitle={TEAM_SECTION.eyebrow}
              title={TEAM_SECTION.title}
              titleClassName="mb-8 max-w-[15em] font-display text-3xl leading-tight font-normal text-exp-glow italic md:text-4xl"
            />
          </div>

          <TeamGrid members={TEAM_MEMBERS} />
        </div>
      </section>
    </>
  );
};

export default AboutUs;
