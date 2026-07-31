import { faClock, faEnvelope, faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

import formatPhone from "@/utils/formatPhone";

import { INFO } from "@/constants";

import Motion from "@/components/motion";
import Title from "@/components/title";

import ContactForm from "./ContactForm";
import ContactInfoItem from "./ContactInfoItem";

const ContactFormSection = () => {
  const contactItems = [
    {
      icon: faPhoneVolume,
      label: "Call Us",
      value: INFO.PHONE_NUMBER,
      href: `tel:${formatPhone(INFO.PHONE_NUMBER)}`,
    },
    {
      icon: faEnvelope,
      label: "Email",
      value: INFO.EMAIL_ADDRESS,
      href: `mailto:${INFO.EMAIL_ADDRESS}`,
    },
    {
      icon: faLocationDot,
      label: "Address",
      value: INFO.PHYSICAL_ADDRESS,
      href: INFO.MAP_LOCATION_URL,
    },
    {
      icon: faClock,
      label: "Hours",
      value: INFO.OPERATING_HOURS,
    },
  ];

  return (
    <section className="padding-y relative overflow-hidden">
      <div className="container relative z-2">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 relative">
          <Motion className="flex flex-col lg:mt-10 sticky top-0">
            <Title
              title={`Contact ${INFO.BUSINESS_NAME}`}
              subTitle="Contact"
              description="Get in touch with us anytime for inquiries or support."
            />

            <ul className="flex flex-col">
              {contactItems.map((item) => (
                <ContactInfoItem
                  key={item.label}
                  {...item}
                />
              ))}
            </ul>
          </Motion>

          <Motion>
            <ContactForm />
          </Motion>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
