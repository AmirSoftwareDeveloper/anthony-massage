import type { MetadataRoute } from "next";

import { INFO } from "@/constants";

export default function robots(): MetadataRoute.Robots {
  const isVercelPreview = process.env.VERCEL_ENV === "preview";

  return {
    rules: {
      userAgent: "*",
      disallow: isVercelPreview ? ["/"] : [],
    },
    sitemap: `${INFO.WEBSITE_URL}/sitemap.xml`,
  };
}
