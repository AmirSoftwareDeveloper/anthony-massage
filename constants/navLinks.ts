import { Routes } from "@/constants/routes";

import services from "./services";

export default [
  {
    id: "home",
    title: "Home",
    href: Routes.HOME,
  },

  {
    id: "about",
    title: "About Us",
    href: Routes.ABOUT,
  },
  {
    id: "services",
    title: "Our Services",
    href: Routes.SERVICES,
    children: [...services.map((item) => ({ ...item, href: `${Routes.SERVICES}/${item.slug}` }))],
  },

  {
    id: "contact",
    title: "Contact Us",
    href: Routes.CONTACT,
  },
];

export const footerNavigationItems = [
  {
    id: "home",
    title: "Home",
    href: Routes.HOME,
  },

  {
    id: "about",
    title: "About Us",
    href: Routes.ABOUT,
  },
  {
    id: "services",
    title: "Our Services",
    href: Routes.SERVICES,
  },

  {
    id: "contact",
    title: "Contact Us",
    href: Routes.CONTACT,
  },
];
