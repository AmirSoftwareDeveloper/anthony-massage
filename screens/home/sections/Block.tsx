import type { HomeExperienceBlock } from "@/constants/homeExperience";

const Block = ({ block }: { block: HomeExperienceBlock }) => {
  if (block.type === "list") {
    return (
      <ul className="exp-condition-list">
        {block.items?.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.type === "quiet") {
    return <p className="exp-quiet">{block.text}</p>;
  }

  return <p>{block.text}</p>;
};

export default Block;
