import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export type NavItemChild = { slug: string; href: string; title: string };

export type NavItem = {
  id: string;
  title: string;
  href: string;
  children?: NavItemChild[];
};
export type Option = {
  label: string;
  value: string;
};

export type OptionGroup = {
  label: string;
  options: Option[];
};

export type ContentBlockEntry = {
  title: string;
  text: string;
};

export type ServiceEntry = {
  icon: string;
  title: string;
  price?: string;
};

export type FAQEntry = {
  question: string;
  answer: string;
};

export type FeatureEntry = {
  icon: string;
  title: string;
  text: string;
  ctaText?: string;
  ctaHref?: string;
};

export type StatEntry = {
  /** counted up from zero when the band scrolls into view */
  value: number;
  /** rendered immediately after the figure, e.g. "+" */
  suffix?: string;
  label: string;
};

export type ContentBlock = {
  type:
    | "p"
    | "quiet"
    | "list"
    | "categories"
    | "steps"
    | "cta"
    | "image"
    | "service-grid"
    | "pricing-list"
    | "faq"
    | "features";
  text?: string;
  items?: string[];
  entries?: ContentBlockEntry[];
  href?: string;
  src?: string;
  alt?: string;
  ratio?: string;
  note?: string;
  services?: ServiceEntry[];
  faqs?: FAQEntry[];
  features?: FeatureEntry[];
  ctaText?: string;
  ctaHref?: string;
};

export type InteriorImage = {
  src: string;
  alt: string;
};

export type InteriorMedia = {
  /** the tall feature image set beside the chapter's copy */
  main?: InteriorImage;
  /** an optional pair of smaller images stacked beneath the copy */
  pair?: InteriorImage[];
};

export type InteriorSectionContent = {
  id: string;
  eyebrow: string;
  title: string;
  lead?: boolean;
  blocks: ContentBlock[];
  media?: InteriorMedia;
};

export type Service = {
  title: string;
  slug: string;
  description: string;
  icon: string;
  imgSrc: string;
  bulletPoints: string[];
  descriptions: string[];
};

export type FAQ = {
  question: string;
  answer: string;
};

export type SocialLink = {
  name: string;
  href: string;
  icon: IconDefinition;
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  imageAlt?: string;
  /** falls back to the site-wide social links when a member has none of their own */
  socials?: SocialLink[];
};

export type Testimonial = {
  name: string;
  testimonial: string;
  date: string;
  imgSrc: string;
};

export type Post = {
  title: string;
  slug: string;
  excerpt: string;
  featuredImgSourceUrl: string;
  date: string;
  content: string;
  cursor: string;
};

export type PostsQuery = {
  posts: Post[];
};

export type PostQuery = {
  post: Post;
};
