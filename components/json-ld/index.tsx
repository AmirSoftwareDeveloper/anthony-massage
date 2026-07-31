import Script from "next/script";
import { type Thing, WithContext } from "schema-dts";

interface Props {
  schemas: WithContext<Thing>[];
}

const JsonLd = ({ schemas }: Props) => {
  return (
    <>
      {schemas.map((schema, index) => {
        const id = `json-ld-${(schema as any)["@type"] ?? index}-${index}`;
        return (
          <Script
            key={id}
            id={id}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        );
      })}
    </>
  );
};

export default JsonLd;
