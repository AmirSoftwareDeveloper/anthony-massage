import { INFO } from "@/constants";

import PageHero from "@/components/page-hero";

import NotFound from "@/screens/not-found";

export const metadata = {
  title: `404 | ${INFO.BUSINESS_NAME}`,
  robots: { index: false, follow: false },
  openGraph: {
    title: `404 | ${INFO.BUSINESS_NAME}`,
  },
};

export default function NotFoundPage() {
  return (
    <>
      <PageHero
        title="404"
        pageName="404"
      />
      <NotFound />
    </>
  );
}
