import NextImage from "next/image";
import Link from "next/link";

import type { ServiceCardEntry } from "@/types";

import { SERVICE_ICONS, getServiceIcon } from "./service-icons";

const LotusIcon = SERVICE_ICONS.lotus;

type ServiceCardGridProps = {
  services: ServiceCardEntry[];
  finale?: { title: string; text: string; ctaText: string; ctaHref: string };
};

const ServiceCardGrid = ({ services, finale }: ServiceCardGridProps) => (
  <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {services.map((service) => {
      const Icon = getServiceIcon(service.icon);
      return (
        <Link
          key={service.title}
          href={service.href}
          className="group relative flex aspect-3/4 overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-exp-glow"
        >
          <NextImage
            src={service.imgSrc}
            alt={service.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-2200 ease-exp-release group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />

          <div className="absolute inset-0 bg-linear-to-t from-exp-ink/90 via-exp-ink/20 to-exp-ink/40" />
          <div className="absolute inset-0 bg-linear-to-br from-exp-gold/95 via-exp-ink-soft/95 to-exp-ink/95 opacity-0 transition-opacity duration-700 ease-exp-release group-hover:opacity-100 group-focus-visible:opacity-100" />

          <div className="relative flex w-full flex-col p-6 md:p-7">
            <Icon className="size-14 shrink-0 text-exp-cream" />

            <div className="grow transition-[flex-grow] duration-700 ease-exp-release group-hover:grow-0 group-focus-visible:grow-0 motion-reduce:transition-none" />

            <h3 className="m-0 font-display text-2xl+ font-normal italic text-white lg:text-3xl+">{service.title}</h3>

            <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-700 ease-exp-release group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr] motion-reduce:transition-none">
              <div className="overflow-hidden">
                <p className="mt-2 mb-0 text-sm+ font-light text-exp-glow opacity-0 transition-opacity duration-500 ease-exp-release group-hover:opacity-100 group-focus-visible:opacity-100">
                  {service.tagline}
                </p>
              </div>
            </div>

            <div className="grow-0 transition-[flex-grow] duration-700 ease-exp-release group-hover:grow group-focus-visible:grow motion-reduce:transition-none" />

            <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-700 ease-exp-release group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr] motion-reduce:transition-none">
              <div className="overflow-hidden *:opacity-0 *:transition-opacity *:duration-500 *:ease-exp-release group-hover:*:opacity-100 group-focus-visible:*:opacity-100">
                <p className="mt-6 mb-0 text-base font-light leading-relaxed text-white/90">{service.text}</p>

                <span className="mt-7 inline-flex rounded-full border border-white/50 px-8 py-3.5 text-sm+ font-medium text-white">
                  Read More
                </span>
              </div>
            </div>
          </div>
        </Link>
      );
    })}

    {finale && (
      <Link
        href={finale.ctaHref}
        className="group relative flex aspect-3/4 flex-col overflow-hidden rounded-2xl bg-linear-to-br from-exp-gold/95 via-exp-ink-soft/95 to-exp-ink/95 p-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-exp-glow md:p-7"
      >
        <LotusIcon className="size-14 shrink-0 text-exp-cream" />

        <div className="mt-auto">
          <h3 className="m-0 font-display text-2xl+ font-normal italic text-white lg:text-3xl+">{finale.title}</h3>

          <p className="mt-6 mb-0 text-base font-light leading-relaxed text-white/90">{finale.text}</p>

          <span className="mt-7 inline-flex rounded-full border border-white/50 px-8 py-3.5 text-sm+ font-medium text-white transition-colors duration-400 ease-exp-release group-hover:border-white group-hover:bg-white/10">
            {finale.ctaText}
          </span>
        </div>
      </Link>
    )}
  </div>
);

export default ServiceCardGrid;
