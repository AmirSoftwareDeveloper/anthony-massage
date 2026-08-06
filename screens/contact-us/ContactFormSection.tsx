import InteriorSection from "@/components/interior-section";

import ContactForm from "./ContactForm";

const ContactFormSection = () => {
  return (
    <InteriorSection
      id="intro"
      eyebrow="Contact Us"
      title="Let's find a time."
      lead
    >
      <p className="mb-5 max-w-lg text-lg leading-loose font-light text-exp-body last-of-type:mb-0">
        Your session, on your schedule.
      </p>
      <p className="mb-5 max-w-lg text-lg leading-loose font-light text-exp-body last-of-type:mb-0">
        The fastest way to reach me is the form below. I read every message myself and will follow up to find a time
        that works.
      </p>

      <div className="mt-10 max-w-none overflow-hidden rounded-xl border border-exp-ink-soft/15 bg-[#e9dcb8] p-6 shadow-lg md:p-10">
        <ContactForm />
      </div>
    </InteriorSection>
  );
};

export default ContactFormSection;
