import ComingSoon from "@/components/coming-soon";

// TEMPORARILY DISABLED: the full Services page is built but held back until the
// service copy and pricing are signed off. Restore the block below and delete
// <ComingSoon /> to bring it back.
//
// import { SERVICES_SECTIONS } from "@/constants/servicesContent";
//
// import ContentBlock from "@/components/content-block";
// import InteriorCollage from "@/components/interior-collage";
// import PageHero from "@/components/page-hero";

const Services = () => {
  // let illustrated = 0;

  return (
    <ComingSoon
      srTitle="Services | Anthony Massage Works"
      eyebrow="Services"
      caption="Where relief begins to take shape."
      variant="rising"
      title="The Full Service Menu Is on Its Way."
      // intro="Therapeutic massage, stretching and mobility work, intraoral jaw release, hot stones, and CBD-infused oil. The detailed pages for each are being finished now."
      // note="These aren't chosen from a menu in advance anyway. They're brought in when your body is asking for them."
    />
  );

  // return (
  //   <>
  //     <PageHero
  //       srTitle="Services | Anthony Massage Works"
  //       eyebrow="Services"
  //       caption="Where relief begins to take shape."
  //       variant="rising"
  //     />
  //
  //     {SERVICES_SECTIONS.map((section) => {
  //       const flip = Boolean(section.media?.main) && illustrated++ % 2 === 1;
  //
  //       return (
  //         <InteriorCollage
  //           key={section.id}
  //           id={section.id}
  //           eyebrow={section.eyebrow}
  //           title={section.title}
  //           media={section.media}
  //           flip={flip}
  //         >
  //           {section.blocks.map((block, bi) => (
  //             <ContentBlock
  //               key={bi}
  //               block={block}
  //             />
  //           ))}
  //         </InteriorCollage>
  //       );
  //     })}
  //   </>
  // );
};

export default Services;
