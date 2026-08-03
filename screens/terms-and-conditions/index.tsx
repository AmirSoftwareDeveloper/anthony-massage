import { Dot } from "lucide-react";

import { INFO } from "@/constants";

const formattedDate = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
}).format(new Date());

const TermsConditions = () => {
  return (
    <section
      className="padding-y"
      style={{ marginTop: "var(--exp-nav-h, 5rem)" }}
    >
      <div className="container">
        <article className="prose prose-neutral max-w-none">
          <header className="not-prose mb-10">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Terms and Conditions</h1>

            <p className="mt-3 text-gray-600">Last updated: {formattedDate}</p>
          </header>

          <section>
            <p>
              Welcome to {INFO.BUSINESS_NAME}. These Terms and Conditions govern your use of our website and services.
              By accessing this website, you agree to comply with these terms. If you do not agree with any part of
              these terms, please discontinue use of the website.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold">Website Usage</h2>

            <p>
              You agree to use this website only for lawful purposes and in a way that does not infringe on the rights
              of others or restrict their use of the website.
            </p>

            <ul className="not-prose mt-5 flex flex-col">
              <li className="flex items-start gap-2">
                <Dot className="mt-1 shrink-0" />
                Using the website for unlawful or fraudulent activity
              </li>

              <li className="flex items-start gap-2">
                <Dot className="mt-1 shrink-0" />
                Attempting unauthorized access to systems or data
              </li>

              <li className="flex items-start gap-2">
                <Dot className="mt-1 shrink-0" />
                Distributing harmful software or malicious content
              </li>

              <li className="flex items-start gap-2">
                <Dot className="mt-1 shrink-0" />
                Misusing website content, forms, or communication systems
              </li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold">Intellectual Property</h2>

            <p>
              All content on this website, including text, graphics, branding, logos, images, and other materials, is
              owned by {INFO.BUSINESS_NAME} unless otherwise stated. Unauthorized use, reproduction, or distribution is
              prohibited.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold">Disclaimer</h2>

            <p>
              The information provided on this website is for general informational purposes only. While we strive to
              keep information accurate and up to date, we make no guarantees regarding the completeness, reliability,
              or accuracy of the content.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold">Limitation of Liability</h2>

            <p>
              {INFO.BUSINESS_NAME} shall not be held liable for any direct, indirect, incidental, or consequential
              damages resulting from your use of this website or reliance on any information provided.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold">Third-Party Links</h2>

            <p>
              This website may contain links to third-party websites for convenience or informational purposes. We are
              not responsible for the content, policies, or practices of any third-party websites.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold">Privacy</h2>

            <p>
              Your use of this website is also subject to our Privacy Policy, which explains how we collect, use, and
              protect your information.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold">Changes to These Terms</h2>

            <p>
              We reserve the right to modify these Terms and Conditions at any time without prior notice. Continued use
              of the website following updates constitutes acceptance of the revised terms.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold">Contact Information</h2>

            <p>
              If you have any questions regarding these Terms and Conditions, please contact us using the information
              below.
            </p>

            <div className="not-prose mt-5 space-y-2">
              <p>
                <span className="font-semibold">Business:</span> {INFO.BUSINESS_NAME}
              </p>

              <p>
                <span className="font-semibold">Email:</span> {INFO.EMAIL_ADDRESS}
              </p>

              <p>
                <span className="font-semibold">Phone:</span> {INFO.PHONE_NUMBER}
              </p>

              <p>
                <span className="font-semibold">Address:</span> {INFO.PHYSICAL_ADDRESS}
              </p>
            </div>
          </section>
        </article>
      </div>
    </section>
  );
};

export default TermsConditions;
