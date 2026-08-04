import Link from "next/link";

import formatPhone from "@/utils/formatPhone";

import { INFO } from "@/constants";
import { Routes } from "@/constants/routes";

import PageHero from "@/components/page-hero";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";

const ThankYouPage = () => {
  return (
    <>
      <PageHero
        srTitle="Thank You | Anthony Massage Works"
        eyebrow="Thank You"
        caption="Your message is on its way."
        variant="arrived"
      />
      <div className="padding-y container">
        <Title
          title="Your message has been sent!"
          subTitle="Thank You"
          description="We've received your inquiry and will get back to you as soon as possible."
          center
        />

        <div className="flex pt-0 justify-center gap-4">
          <Link href={Routes.HOME}>
            <Button>Back to Home</Button>
          </Link>
          <Link href={`tel:${formatPhone(INFO.PHONE_NUMBER)}`}>
            <Button variant="outline">Call Us</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ThankYouPage;
