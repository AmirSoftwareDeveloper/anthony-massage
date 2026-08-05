import PageHero from "@/components/page-hero";

import { ABOUT_US_SECTIONS } from "@/constants/aboutUs";
import { TEAM_MEMBERS, TEAM_SECTION } from "@/constants/team";

import ContentBlock from "@/components/content-block";
import InteriorCollage from "@/components/interior-collage";
import TeamGrid from "@/components/experience/TeamGrid";
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
        <div className="exp-team-inner">
          <div className="exp-team-head">
            <Title
              variant="exp"
              subTitle={TEAM_SECTION.eyebrow}
              title={TEAM_SECTION.title}
              titleClassName="exp-team-title"
            />
          </div>

          <TeamGrid members={TEAM_MEMBERS} />
        </div>
      </section>
    </>
  );
};

export default AboutUs;
