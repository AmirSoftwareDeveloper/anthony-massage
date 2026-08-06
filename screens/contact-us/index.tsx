import PageHero from "@/components/page-hero";

import ContactFormSection from "./ContactFormSection";
import ContactInfoSection from "./ContactInfoSection";

const ContactUs = () => (
  <>
    <PageHero
      srTitle="Contact Us | Anthony Massage Works"
      eyebrow="Contact Us"
      caption="The unfolding has arrived. Let's begin."
      variant="arrived"
    />

    <ContactFormSection />

    <ContactInfoSection />
  </>
);

export default ContactUs;
