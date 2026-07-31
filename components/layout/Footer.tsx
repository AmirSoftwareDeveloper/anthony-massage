import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import formatPhone from "@/utils/formatPhone";

import { INFO } from "@/constants";
import { footerNavigationItems } from "@/constants/navLinks";
import { Routes } from "@/constants/routes";
import services from "@/constants/services";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";

import FooterCredit from "./FooterCredit";

const linkClass =
  "text-sm+ text-gray-300 hover:text-secondary transition-colors duration-300 relative w-fit before:absolute before:left-0 before:-bottom-0.5 before:h-px before:w-0 before:bg-secondary hover:before:w-full before:transition-all before:duration-300";

const FooterSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="flex flex-col">
    <h4 className="mb-6 text-white text-lg lg:text-xl">{title}</h4>
    <div className="flex flex-col gap-4">{children}</div>
  </div>
);

const Footer = () => {

  return (
    <footer className="bg-black">
      <div className="bg-primary-darker">
        <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 pt-20 pb-10">
          <div>
            <Logo variant="light" />

            <p className="mt-4 text-sm text-gray-300 max-w-xs">{INFO.MOTTO}</p>

            <Link href={Routes.CONTACT}>
              <Button className="mt-6">Get In Touch</Button>
            </Link>
          </div>

          <FooterSection title="Quick Links">
            {footerNavigationItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={linkClass}
              >
                {item.title}
              </Link>
            ))}
          </FooterSection>

          <FooterSection title="Services">
            {services.map((item) => (
              <Link
                key={item.slug}
                href={`${Routes.SERVICES}/${item.slug}`}
                className={linkClass}
              >
                {item.title}
              </Link>
            ))}
          </FooterSection>

          <FooterSection title="Get In Touch">
            <p className="text-gray-300 mb-4">Feel free to connect with us for any questions or assistance.</p>

            <div className="flex flex-col gap-4 text-gray-300">
              <Link
                href={`tel:${formatPhone(INFO.PHONE_NUMBER)}`}
                className="flex gap-3 hover:text-primary transition-colors"
              >
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  className="w-4 mt-1"
                />
                {INFO.PHONE_NUMBER}
              </Link>

              <Link
                href={`mailto:${INFO.EMAIL_ADDRESS}`}
                className="flex gap-3 hover:text-primary transition-colors"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-4 mt-1"
                />
                {INFO.EMAIL_ADDRESS}
              </Link>

              <Link
                href={INFO.MAP_LOCATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                {INFO.PHYSICAL_ADDRESS}
              </Link>
            </div>
          </FooterSection>
        </div>
      </div>

      <div className="bg-primary-dark/60">
        <div className="container py-4 flex flex-col xl:flex-row items-center justify-between gap-4 text-gray-300 text-sm">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <span>
              © {INFO.BUSINESS_NAME} {new Date().getFullYear()}. All Rights Reserved
            </span>

            <FooterCredit />
          </div>

          <div className="flex gap-4">
            <Link
              href={Routes.PRIVACY_POLICY}
              className="hover:text-primary-light transition"
            >
              Privacy Policy
            </Link>

            <Link
              href={Routes.TERMS_AND_CONDITIONS}
              className="hover:text-primary-light transition"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
