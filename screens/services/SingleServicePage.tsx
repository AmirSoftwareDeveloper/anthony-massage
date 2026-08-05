import ComingSoon from "@/components/coming-soon";
import PageHero from "@/components/page-hero";

import { Service } from "@/types";

const SingleServicePage = ({ service }: { service: Service }) => {
  return (
    <>
      <PageHero
        srTitle={`${service.title} | Anthony Massage Works`}
        eyebrow={service.title}
        caption={service.description || "Focused care, one condition at a time."}
        variant="session"
      />

      <ComingSoon />

      {/* <ServiceDetails {...{ service }} /> */}
    </>
  );
};

export default SingleServicePage;
