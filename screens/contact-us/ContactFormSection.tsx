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
      <p>Your session, on your schedule.</p>
      <p>
        The fastest way to reach me is the form below — I read every message myself and will follow up to find a
        time that works.
      </p>

      <div className="exp-form-card mt-10 max-w-none">
        <ContactForm />
      </div>
    </InteriorSection>
  );
};

export default ContactFormSection;
