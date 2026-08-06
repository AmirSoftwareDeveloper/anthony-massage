import Link from "next/link";

import formatPhone from "@/utils/formatPhone";

import { INFO } from "@/constants";
import { CONTACT_FAQS, CONTACT_SECTIONS } from "@/constants/contactContent";

import ContentBlock from "@/components/content-block";
import InteriorSection from "@/components/interior-section";
import PageHero from "@/components/page-hero";

import ContactFormSection from "./ContactFormSection";

const ContactUs = () => {
  return (
    <>
      <PageHero
        srTitle="Contact Us | Anthony Massage Works"
        eyebrow="Contact Us"
        caption="The unfolding has arrived. Let's begin."
        variant="arrived"
      />

      <ContactFormSection />

      {CONTACT_SECTIONS.slice(0, 2).map((section) => (
        <InteriorSection
          key={section.id}
          id={section.id}
          eyebrow={section.eyebrow}
          title={section.title}
        >
          {section.blocks.map((block, bi) => (
            <ContentBlock
              key={bi}
              block={block}
            />
          ))}
        </InteriorSection>
      ))}

      <InteriorSection
        id="faqs"
        eyebrow="A Few Common Questions"
        title="What to expect."
      >
        {CONTACT_FAQS.map((faq) => (
          <p
            key={faq.question}
            className="mb-5 max-w-lg text-lg leading-loose font-light text-exp-body last-of-type:mb-0"
          >
            <strong className="text-exp-cream">{faq.question}</strong> {faq.answer}
          </p>
        ))}
      </InteriorSection>

      {CONTACT_SECTIONS.slice(2).map((section) => (
        <InteriorSection
          key={section.id}
          id={section.id}
          eyebrow={section.eyebrow}
          title={section.title}
        >
          {section.blocks.map((block, bi) => (
            <ContentBlock
              key={bi}
              block={block}
            />
          ))}
        </InteriorSection>
      ))}

      <InteriorSection
        id="find-me"
        eyebrow="Where to Find Me"
        title="Easy to arrive."
      >
        <p className="mb-5 max-w-lg text-lg leading-loose font-light text-exp-body last-of-type:mb-0">
          <Link
            href={INFO.MAP_LOCATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-exp-glow underline decoration-exp-glow/40 underline-offset-4 hover:decoration-exp-glow"
          >
            {INFO.PHYSICAL_ADDRESS}
          </Link>
        </p>
        <p className="mb-5 max-w-lg text-lg leading-loose font-light text-exp-body last-of-type:mb-0">
          {INFO.OPERATING_HOURS}
        </p>
      </InteriorSection>

      <InteriorSection
        id="questions"
        eyebrow="Still Have a Question?"
        title="Just ask."
      >
        <p className="mb-5 max-w-lg text-lg leading-loose font-light text-exp-body last-of-type:mb-0">
          You don&rsquo;t need to know what you need before you reach out. If something here didn&rsquo;t answer your
          question, send it along. I read every message myself.
        </p>
        <p className="mb-5 max-w-lg text-lg leading-loose font-light text-exp-body last-of-type:mb-0">
          Email:{" "}
          <Link
            href={`mailto:${INFO.EMAIL_ADDRESS}`}
            className="text-exp-glow underline decoration-exp-glow/40 underline-offset-4 hover:decoration-exp-glow"
          >
            {INFO.EMAIL_ADDRESS}
          </Link>
        </p>
        <p className="mb-5 max-w-lg text-lg leading-loose font-light text-exp-body last-of-type:mb-0">
          Phone:{" "}
          <Link
            href={`tel:${formatPhone(INFO.PHONE_NUMBER)}`}
            className="text-exp-glow underline decoration-exp-glow/40 underline-offset-4 hover:decoration-exp-glow"
          >
            {INFO.PHONE_NUMBER}
          </Link>
        </p>
      </InteriorSection>
    </>
  );
};

export default ContactUs;
