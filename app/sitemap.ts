import { MetadataRoute } from "next";

import { INFO } from "@/constants";
import { Routes } from "@/constants/routes";
import services from "@/constants/services";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const servicesSitemap: MetadataRoute.Sitemap = services.map((item) => ({
    url: `${INFO.WEBSITE_URL}${Routes.SERVICES}/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: INFO.WEBSITE_URL + Routes.HOME,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: INFO.WEBSITE_URL + Routes.SERVICES,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },

    ...servicesSitemap,

    {
      url: INFO.WEBSITE_URL + Routes.ABOUT,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: INFO.WEBSITE_URL + Routes.CONTACT,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: INFO.WEBSITE_URL + Routes.PRIVACY_POLICY,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },

    {
      url: INFO.WEBSITE_URL + Routes.TERMS_AND_CONDITIONS,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
