import { generateJsonLd } from "@/utils/generateSchema";

import { META_DATA, ORG_SCHEMA } from "@/constants/meta";

import JsonLd from "@/components/json-ld";

import Home from "@/screens/home";

const jsonLd = generateJsonLd({
  type: "WebPage",
  title: META_DATA.title as string,
  description: META_DATA.description as string,
});

export default async function HomePage() {
  return (
    <>
      <JsonLd schemas={[jsonLd, ORG_SCHEMA]} />
      <Home />
    </>
  );
}
