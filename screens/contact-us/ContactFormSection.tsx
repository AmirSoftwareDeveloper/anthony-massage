"use client";

import { useReveal } from "@/lib/experience/useReveal";

import Title from "@/components/title";

import ContactForm from "./ContactForm";

/* The page's opener. It's built here rather than through InteriorCollage
   because the form card takes the slot a photograph would — it needs the
   width, and it can't be cropped to fill a row. Everything else about the
   band matches a chapter: same section shell, same container, same rhythm,
   so the form sits on the page's edges like every heading below it. */
const ContactFormSection = () => {
  const reveal = useReveal<HTMLElement>();

  return (
    <section
      id="intro"
      ref={reveal}
      className="exp-reveal exp-collage-section"
    >
      <div className="container section-y grid grid-cols-1 items-start gap-9 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-x-18 lg:gap-y-10">
        <div className="flex min-w-0 flex-col lg:sticky lg:top-32">
          <Title
            variant="exp"
            subTitle="Contact Us"
            title="Let's find a time."
            titleClassName="mb-8 max-w-[15em] font-display text-3xl leading-tight font-normal text-exp-glow italic md:text-4xl"
          />
          <div className="exp-collage-copy">
            <p>Your session, on your schedule.</p>
            <p>
              The fastest way to reach me is the form below. I read every message myself and will follow up to find a
              time that works.
            </p>
          </div>
        </div>

        <div className="exp-light-card min-w-0 overflow-hidden rounded-xl border border-exp-ink-soft/15 p-6 shadow-lg md:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
