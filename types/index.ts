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
