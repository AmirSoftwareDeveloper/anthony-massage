import type { Blog, BlogPosting, FAQPage, HowTo, HowToStep, WebPage, WithContext } from "schema-dts";

import { INFO } from "@/constants";

import type { FAQ, Post } from "@/types";

const buildUrl = (path = "") => {
  return `${INFO.WEBSITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

const ORGANIZATION = {
  "@type": "Organization",
  "@id": `${INFO.WEBSITE_URL}/#organization`,
  name: INFO.BUSINESS_NAME,
  url: INFO.WEBSITE_URL,
};

interface GenerateJsonLdProps {
  type: WebPage["@type"];
  title: string;
  description: string;
  path?: string;
}

export function generateJsonLd({ type, title, description, path }: GenerateJsonLdProps): WithContext<WebPage> {
  const pageUrl = path ? buildUrl(path) : INFO.WEBSITE_URL;

  return {
    "@context": "https://schema.org",
    "@type": type,

    "@id": pageUrl,
    url: pageUrl,

    name: title,
    description,

    publisher: ORGANIZATION,
  };
}

interface GenerateFaqSchemaProps {
  faqs: FAQ[];
  pageUrl?: string;
  sectionId: string;
}

export function generateFaqSchema({ faqs, pageUrl, sectionId }: GenerateFaqSchemaProps): WithContext<FAQPage> {
  const url = buildUrl(pageUrl);

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    "@id": `${url}#faq-${sectionId}`,
    url,

    mainEntity: faqs.map((faq, index) => ({
      "@type": "Question",
      "@id": `${url}#faq-${sectionId}-${index + 1}`,
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

interface GenerateHowToSchemaProps {
  steps: HowToStep[];
  pageUrl?: string;
  sectionId: string;
}

export function generateHowToSchema({ steps, pageUrl, sectionId }: GenerateHowToSchemaProps): WithContext<HowTo> {
  const url = buildUrl(pageUrl);

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",

    "@id": `${url}#how-to-${sectionId}`,
    url,

    mainEntity: steps.map((step, index) => ({
      "@type": "HowToStep",
      "@id": `${url}#how-to-${sectionId}-${index + 1}`,
      name: step.name,
      text: step.text,
    })),
  };
}

interface GenerateBlogListSchemaProps {
  title: string;
  pageUrl?: string;
}

export function generateBlogListSchema({ title, pageUrl }: GenerateBlogListSchemaProps): WithContext<Blog> {
  const url = buildUrl(pageUrl);

  return {
    "@context": "https://schema.org",
    "@type": "Blog",

    "@id": url,
    url,

    name: title,
    publisher: ORGANIZATION,
  };
}

interface GenerateBlogPostSchemaProps {
  post: Post;
  pageUrl?: string;
}

export function generateBlogPostSchema({ post, pageUrl }: GenerateBlogPostSchemaProps): WithContext<BlogPosting> {
  const baseUrl = buildUrl(pageUrl);
  const postUrl = `${baseUrl}/${post.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",

    "@id": postUrl,
    url: postUrl,

    headline: post.title,
    description: post.excerpt,

    datePublished: post.date,
    dateModified: post.date,

    author: ORGANIZATION,
    publisher: ORGANIZATION,

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },

    image: post.featuredImgSourceUrl
      ? {
          "@type": "ImageObject",
          url: post.featuredImgSourceUrl,
        }
      : undefined,

    articleBody: post.content,
    inLanguage: "en-US",
  };
}
