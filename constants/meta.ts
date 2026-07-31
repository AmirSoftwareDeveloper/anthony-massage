import type { Metadata } from "next";

import formatPhone from "@/utils/formatPhone";

import { INFO } from ".";

const META_TITLE = "";
const META_DESCRIPTION = "";

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
    site: "@",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: INFO.WEBSITE_URL,
  },
  keywords: [],
} as Metadata;

export const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  mainEntity: {
    "@type": "Organization",
    "@id": `${INFO.WEBSITE_URL}/#organization`,
    name: INFO.BUSINESS_NAME,
    url: INFO.WEBSITE_URL,
    logo: `${INFO.WEBSITE_URL}/logo.png`,
    email: INFO.EMAIL_ADDRESS,
    telephone: `${formatPhone(INFO.PHONE_NUMBER)}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: INFO.PHYSICAL_ADDRESS || "",
      addressLocality: "",
      addressRegion: "",
      postalCode: "",
      addressCountry: "US",
    },
    description: META_DESCRIPTION,
  },
  publisher: {
    "@type": "Organization",
    name: INFO.BUSINESS_NAME,
  },
};
