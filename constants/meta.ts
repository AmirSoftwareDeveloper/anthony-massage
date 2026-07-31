import type { Metadata } from "next";
import type { WebPage, WithContext } from "schema-dts";

import formatPhone from "@/utils/formatPhone";

import { INFO } from ".";

const META_TITLE = "Anthony Massage Works | Massage Therapy in Issaquah, WA";
const META_DESCRIPTION =
  "Therapeutic massage in Issaquah, WA focused on pain relief, injury recovery, and lasting mobility. Personalized sessions guided by how your body moves today.";

export const META_DATA: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  metadataBase: new URL(INFO.WEBSITE_URL),
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: INFO.WEBSITE_URL,
    siteName: INFO.BUSINESS_NAME,
    phoneNumbers: [INFO.PHONE_NUMBER],
    images: ["/opengraph-image.jpg"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    card: "summary_large_image",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: INFO.WEBSITE_URL,
  },
  keywords: [
    "massage therapy Issaquah WA",
    "therapeutic massage Issaquah",
    "pain relief massage",
    "injury recovery massage",
    "deep tissue massage Issaquah",
    "mobility and posture massage therapist",
    "sports massage Issaquah WA",
  ],
} as Metadata;

export const ORG_SCHEMA: WithContext<WebPage> = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  mainEntity: {
    "@type": "HealthAndBeautyBusiness",
    "@id": `${INFO.WEBSITE_URL}/#organization`,
    name: INFO.BUSINESS_NAME,
    url: INFO.WEBSITE_URL,
    email: INFO.EMAIL_ADDRESS,
    telephone: `${formatPhone(INFO.PHONE_NUMBER)}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "22525 SE 64th Pl Ste 200",
      addressLocality: "Issaquah",
      addressRegion: "WA",
      postalCode: "98027",
      addressCountry: "US",
    },
    description: META_DESCRIPTION,
  },
  publisher: {
    "@type": "Organization",
    name: INFO.BUSINESS_NAME,
  },
};
