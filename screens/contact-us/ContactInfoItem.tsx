import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface Props {
  icon: IconProp;
  label: string;
  value: string;
  href?: string;
}

const ContactInfoItem = ({ icon, label, value, href }: Props) => {
  const Content = <span className="text-primary-dark text-base font-bold">{value}</span>;

  return (
    <li className="flex flex-col sm:flex-row sm:items-center gap-3 border-b border-[#d9e3e0] pb-2.5 mb-2.5 max-w-lg">
      <div className="flex gap-3 items-start sm:items-center">
        <FontAwesomeIcon
          icon={icon}
          className="text-secondary w-4 h-4 mt-1"
        />
        <p className="text-secondary font-bold">{label}:</p>
      </div>

      {href ? (
        <Link
          href={href}
          target="_blank"
          aria-label={label}
          className="text-primary-dark text-base font-bold transition-colors duration-300 hover:text-primary"
        >
          {value}
        </Link>
      ) : (
        Content
      )}
    </li>
  );
};

export default ContactInfoItem;
