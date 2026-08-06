"use client";

import type { ReactNode } from "react";

import Link from "next/link";

import formatPhone from "@/utils/formatPhone";

import { useReveal } from "@/lib/experience/useReveal";

import { INFO } from "@/constants";

import Title from "@/components/title";

const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(INFO.PHYSICAL_ADDRESS)}&z=15&output=embed`;

const linkClassName = "text-exp-glow underline decoration-exp-glow/40 underline-offset-4 hover:decoration-exp-glow";

const Detail = ({ label, children }: { label: string; children: ReactNode }) => (
  <div>
    <p className="mb-2.5 text-2xs font-medium tracking-[0.32em] text-exp-gold uppercase">{label}</p>
    <p className="text-base font-light leading-relaxed text-exp-body">{children}</p>
  </div>
);

const ContactInfoSection = () => {
  const reveal = useReveal<HTMLElement>();

  return (
    <section
      id="find-me"
      ref={reveal}
      className="exp-reveal exp-collage-section"
    >
      <div className="container section-y grid grid-cols-1 items-center gap-9 lg:grid-cols-2 lg:gap-x-18 lg:gap-y-10">
        <div className="flex min-w-0 flex-col">
          <Title
            variant="exp"
            subTitle="Where to Find Me"
            title="Contact Information."
            titleClassName="mb-8 max-w-[15em] font-display text-3xl leading-tight font-normal text-exp-glow italic md:text-4xl"
          />

          <div className="exp-collage-copy">
            <p>
              The studio is in Issaquah, with parking at the door. Reach out however suits you. The form above is
              fastest, but the phone and inbox below come straight to me.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-9">
            <Detail label="Address">
              <Link
                href={INFO.MAP_LOCATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                {INFO.PHYSICAL_ADDRESS}
              </Link>
            </Detail>

            <Detail label="Open">{INFO.OPERATING_HOURS}</Detail>

            <Detail label="Phone">
              <Link
                href={`tel:${formatPhone(INFO.PHONE_NUMBER)}`}
                className={linkClassName}
              >
                {INFO.PHONE_NUMBER}
              </Link>
            </Detail>

            <Detail label="Email">
              <Link
                href={`mailto:${INFO.EMAIL_ADDRESS}`}
                className={linkClassName}
              >
                {INFO.EMAIL_ADDRESS}
              </Link>
            </Detail>
          </div>
        </div>

        <div className="relative aspect-4/3 min-w-0 overflow-hidden rounded-xl bg-exp-tan/5 shadow-lg lg:aspect-16/13">
          <iframe
            title={`Map to ${INFO.BUSINESS_NAME}`}
            src={MAP_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 size-full border-0 grayscale contrast-105 brightness-95"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
