import { INFO } from "@/constants";

const formattedDate = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
}).format(new Date());

const PrivacyPolicy = () => {
  return (
    <section
      className="padding-y"
      style={{ marginTop: "var(--exp-nav-h, 5rem)" }}
    >
      <div className="container">
        <article className="prose prose-neutral max-w-none">
          <header className="not-prose mb-10">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Privacy Policy</h1>

            <p className="mt-3 text-gray-600">Last updated: {formattedDate}</p>
          </header>

          <section>
            <p>
              This Privacy Policy describes how {INFO.BUSINESS_NAME} collects, uses, and protects your information when
              you use this website. By using our website, you agree to the practices described in this policy.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold">Information We Collect</h2>

            <p>
              We may collect limited personal and non-personal information to improve our services and provide a better
              user experience.
            </p>

            <ul className="mt-5 flex flex-col">
              <li>Contact information such as name, email, and phone number</li>
              <li>Basic usage data such as pages visited and time spent on site</li>
              <li>Information submitted through forms or inquiries</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold">How We Use Information</h2>

            <p>We use the collected information to operate, maintain, and improve our website and services.</p>

            <ul className="mt-5 flex flex-col">
              <li>To respond to inquiries and customer requests</li>
              <li>To improve website performance and user experience</li>
              <li>To communicate updates or important notices</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold">Cookies</h2>

            <p>
              This website may use cookies or similar technologies to enhance user experience and analyze website
              traffic. You can disable cookies through your browser settings if you prefer.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold">Data Sharing</h2>

            <p>
              We do not sell, trade, or rent your personal information. We may share limited data only when required by
              law or to protect our rights.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold">Data Security</h2>

            <p>
              We take reasonable measures to protect your information, but no method of transmission over the internet
              is 100% secure.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold">Third-Party Services</h2>

            <p>
              Our website may use third-party services for analytics, hosting, or functionality. These providers may
              collect limited information under their own privacy policies.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold">Your Rights</h2>

            <p>You may request access, correction, or deletion of your personal data by contacting us directly.</p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold">Changes to This Policy</h2>

            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
              updated revision date.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold">Contact Us</h2>

            <p>If you have any questions about this Privacy Policy, you can contact us below.</p>

            <div className="mt-5 space-y-2">
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

export default PrivacyPolicy;
