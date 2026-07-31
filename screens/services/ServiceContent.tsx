import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ContentBlock = { type: "text"; value: string } | { type: "bullets"; value: string[] };

const ServiceContent = ({
  bulletPoints = [],
  descriptions = [],
}: {
  bulletPoints: string[];
  descriptions: string[];
}) => {
  const content: ContentBlock[] = [
    descriptions[0] && { type: "text", value: descriptions[0] },
    bulletPoints.length > 0 && { type: "bullets", value: bulletPoints },
    descriptions[1] && { type: "text", value: descriptions[1] },
    descriptions[2] && { type: "text", value: descriptions[2] },
  ].filter(Boolean) as ContentBlock[];

  return content.map((block, index) => {
    if (block.type === "text") {
      return <p key={index}>{block.value}</p>;
    }

    if (block.type === "bullets") {
      return (
        <ul
          key={index}
          className="space-y-4"
        >
          {block.value.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5"
            >
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="h-4 w-4 mt-1 text-secondary"
                aria-hidden="true"
              />
              <span className="text-primary-dark font-medium">{item}</span>
            </li>
          ))}
        </ul>
      );
    }

    return null;
  });
};

export default ServiceContent;
