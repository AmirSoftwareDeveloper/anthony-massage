import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import socialLinks from "@/constants/socialLinks";

const SidebarSocials = () => {
  return (
    <div className="flex gap-3">
      {socialLinks.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit our ${item.name} page`}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary text-white"
        >
          <FontAwesomeIcon
            icon={item.icon}
            className="w-4 h-4"
            aria-hidden="true"
          />
        </Link>
      ))}
    </div>
  );
};

export default SidebarSocials;
