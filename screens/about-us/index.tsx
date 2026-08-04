import ComingSoon from "@/components/coming-soon";
import PageHero from "@/components/page-hero";

const AboutUs = () => {
  return (
    <>
      <PageHero
        srTitle="About Us | Anthony Massage Works"
        eyebrow="About Us"
        caption="The work, and the person behind it."
        variant="present"
      />
      <ComingSoon />
    </>
  );
};

export default AboutUs;
