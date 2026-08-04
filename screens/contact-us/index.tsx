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
    </>
  );
};

export default ContactUs;
