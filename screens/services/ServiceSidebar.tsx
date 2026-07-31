"use client";

import { faClock, faEnvelope, faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

import formatPhone from "@/utils/formatPhone";

import { INFO } from "@/constants";
import { Routes } from "@/constants/routes";
import services from "@/constants/services";

import type { Service } from "@/types";

import SidebarCard from "./SidebarCard";
import SidebarContactList from "./SidebarContactList";
import SidebarNavItem from "./SidebarNavItem";

interface Props {
  service: Service;
}

const ServiceSidebar = ({ service }: Props) => {
  const contactItems = [
    {
      icon: faPhoneVolume,
      value: INFO.PHONE_NUMBER,
      href: `tel:${formatPhone(INFO.PHONE_NUMBER)}`,
    },
    {
      icon: faEnvelope,
      value: INFO.EMAIL_ADDRESS,
      href: `mailto:${INFO.EMAIL_ADDRESS}`,
    },
    {
      icon: faLocationDot,
      value: INFO.PHYSICAL_ADDRESS,
      href: INFO.MAP_LOCATION_URL,
    },
    {
      icon: faClock,
      value: INFO.OPERATING_HOURS,
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <SidebarCard title="Our Services">
        <div className="flex flex-col gap-4">
          {services.map((item) => (
            <SidebarNavItem
              key={item.slug}
              href={`${Routes.SERVICES}/${item.slug}#content`}
              title={item.title}
              active={item.slug === service.slug}
            />
          ))}
        </div>
      </SidebarCard>

      <SidebarContactList
        items={contactItems}
        buttonHref={Routes.HOME}
        buttonLabel="Get A Free Estimate"
      />
    </div>
  );
};

export default ServiceSidebar;
