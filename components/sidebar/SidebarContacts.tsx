import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import formatPhone from "@/utils/formatPhone";

import { INFO } from "@/constants";

const items = [
  { icon: Phone, label: INFO.PHONE_NUMBER, href: `tel:${formatPhone(INFO.PHONE_NUMBER)}` },
  { icon: Mail, label: INFO.EMAIL_ADDRESS, href: `mailto:${INFO.EMAIL_ADDRESS}` },
  { icon: MapPin, label: INFO.PHYSICAL_ADDRESS, href: INFO.MAP_LOCATION_URL },
];

const SidebarContacts = () => {
  return (
    <div className="py-5">
      <p className="text-xs uppercase tracking-widest font-semibold text-secondary mb-3">Contact</p>
      <div className="flex flex-col gap-3">
        {items.map(({ icon: Icon, label, href }) => (
          <Link
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 group"
          >
            <div className="w-7 h-7 bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
              <Icon className="w-3.5 h-3.5 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors leading-snug">
              {label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarContacts;
