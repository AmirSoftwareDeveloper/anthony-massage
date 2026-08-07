import ComingSoon from "@/components/coming-soon";

// TEMPORARILY DISABLED: the full About page is built but held back until the copy
// and photography are signed off. Restore the block below and delete <ComingSoon /> to bring it back.
//
// import { ABOUT_US_SECTIONS } from "@/constants/aboutUs";
// import { TEAM_MEMBERS, TEAM_SECTION } from "@/constants/team";
//
// import ContentBlock from "@/components/content-block";
// import TeamGrid from "@/components/experience/TeamGrid";
// import InteriorCollage from "@/components/interior-collage";
// import PageHero from "@/components/page-hero";
// import Title from "@/components/title";

const AboutUs = () => {
  // let illustrated = 0;

  return (
    <ComingSoon
      srTitle="About Us | Anthony Massage Works"
      eyebrow="About Us"
      caption="The work, and the person behind it."
      variant="present"
      title="The Story Behind the Work."
      intro="I'm putting this page together properly, with the training, the philosophy, and the people behind Anthony Massage Works. It will be here shortly."
      note="In the meantime, the fastest way to know how I work is to come in and feel it."
    />
  );

  // return (
  //   <>
  //     <PageHero
  //       srTitle="About Us | Anthony Massage Works"
  //       eyebrow="About Us"
  //       caption="The work, and the person behind it."
  //       variant="present"
  //     />
  //
  //     {ABOUT_US_SECTIONS.map((section) => (
  //       <InteriorCollage
  //         key={section.id}
  //         id={section.id}
  //         eyebrow={section.eyebrow}
  //         title={section.title}
  //         media={section.media}
  //         flip={Boolean(section.media?.main) && illustrated++ % 2 === 1}
  //       >
  //         {section.blocks.map((block, bi) => (
  //           <ContentBlock
  //             key={bi}
  //             block={block}
  //           />
  //         ))}
  //       </InteriorCollage>
  //     ))}
  //
  //     <section
  //       id="team"
  //       className="exp-team-section"
  //     >
  //       <div className="container section-y">
  //         <div className="mb-0">
  //           <Title
  //             variant="exp"
  //             subTitle={TEAM_SECTION.eyebrow}
  //             title={TEAM_SECTION.title}
  //             titleClassName="mb-8 max-w-[15em] font-display text-3xl leading-tight font-normal text-exp-glow italic md:text-4xl"
  //           />
  //         </div>
  //
  //         <TeamGrid members={TEAM_MEMBERS} />
  //       </div>
  //     </section>
  //   </>
  // );
};

export default AboutUs;
