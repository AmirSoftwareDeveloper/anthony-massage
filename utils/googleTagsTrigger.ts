export const googleTagsTrigger = ({ slug }: { slug: string }) => {
  const base = process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_SITE_URL ?? window.location.origin : window.location.origin;
  const url = new URL(`/${slug}`, base);
  url.searchParams.set("submissionSuccess", "1");
  location.href = url.href;
};

