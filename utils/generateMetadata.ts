import type { Metadata } from "next";

import { INFO } from "@/constants";
import { META_DATA } from "@/constants/meta";
import { Routes } from "@/constants/routes";

interface GenerateMetadataProps {
  title: string;
  description: string;
  path: Routes;
  image?: string;
  noIndex?: boolean;
}

export function generateMetadata({
  title,
  description,
  path,
  image = "/opengraph-image.jpg",
  noIndex = false,
}: GenerateMetadataProps): Metadata {
  const fullTitle = `${title} | ${INFO.BUSINESS_NAME}`;
  const url = new URL(path, INFO.WEBSITE_URL).toString();

  return {
    ...META_DATA,

    title: fullTitle,
    description,

    robots: {
      index: !noIndex,
      follow: !noIndex,
    },

    alternates: {
      canonical: url,
    },

    openGraph: {
      ...META_DATA.openGraph,
      title: fullTitle,
      description,
      url,
      images: [image],
    },

    twitter: {
      ...META_DATA.twitter,
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
