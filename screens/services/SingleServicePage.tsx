import { Routes } from "@/constants/routes";

import ComingSoon from "@/components/coming-soon";
import PageHero from "@/components/page-hero";

import { Service } from "@/types";

const SingleServicePage = ({ service }: { service: Service }) => {
  return (
    <>
      <PageHero
        title={service.title}
        pageName={service.title}
        secondTitle="Services"
        secondLink={Routes.SERVICES}
      />

      <ComingSoon />

      {/* <ServiceDetails {...{ service }} /> */}
    </>
  );
};

export default SingleServicePage;
