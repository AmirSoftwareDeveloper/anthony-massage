import {
  Activity,
  Droplet,
  Flame,
  Hand,
  Heart,
  type LucideIcon,
  Moon,
  Sparkles,
  Target,
  Waves,
  Wind,
} from "lucide-react";
import NextImage from "next/image";
import Link from "next/link";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import type { ContentBlock } from "@/types";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  hand: Hand,
  activity: Activity,
  wind: Wind,
  flame: Flame,
  droplet: Droplet,
  waves: Waves,
  sparkles: Sparkles,
  target: Target,
  heart: Heart,
  moon: Moon,
};

const ContentBlockView = ({ block }: { block: ContentBlock }) => {
  if (block.type === "list") {
    return (
      <ul className="exp-condition-list text-exp-body">
        {block.items?.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.type === "categories") {
    return (
      <div className="mt-2.5 grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-x-9 sm:gap-y-10">
        {block.entries?.map((entry) => (
          <div key={entry.title}>
            <h3 className="mb-2 font-display text-xl font-normal italic text-(--s-heading) transition-colors duration-2200 ease-exp-release [.lit_&]:text-(--s-heading-lit)">
              {entry.title}
            </h3>
            <p className="mb-0 max-w-3xl text-base font-light leading-relaxed text-exp-body opacity-88">{entry.text}</p>
          </div>
        ))}
      </div>
    );
  }

  if (block.type === "steps") {
    return (
      <ol className="mt-2.5 flex flex-col gap-9">
        {block.entries?.map((entry, i) => (
          <li
            className="flex items-baseline gap-6"
            key={entry.title}
          >
            <span
              className="w-10 flex-none font-display text-2xl font-normal italic text-(--s-heading) opacity-55 transition-colors duration-2200 ease-exp-release [.lit_&]:text-(--s-heading-lit)"
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="mb-1.5 font-display text-xl font-normal italic text-(--s-heading) transition-colors duration-2200 ease-exp-release [.lit_&]:text-(--s-heading-lit)">
                {entry.title}
              </h3>
              <p className="mb-0 max-w-3xl text-base font-light leading-relaxed text-exp-body opacity-88">
                {entry.text}
              </p>
            </div>
          </li>
        ))}
      </ol>
    );
  }

  if (block.type === "image" && block.src) {
    return (
      <div
        className="relative mt-3.5 aspect-[4/3] overflow-hidden rounded-xl shadow-lg"
        style={block.ratio ? { aspectRatio: block.ratio } : undefined}
      >
        <NextImage
          src={block.src}
          alt={block.alt ?? ""}
          fill
          sizes="(min-width: 768px) 720px, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  if (block.type === "service-grid") {
    return (
      <div className="mt-2.5">
        {block.note && (
          <p className="mt-2.5 mb-0 max-w-3xl font-sans text-base font-light not-italic leading-loose text-exp-body opacity-62">
            {block.note}
          </p>
        )}
        <div className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          {block.services?.map((service) => {
            const Icon = SERVICE_ICONS[service.icon] ?? Sparkles;
            return (
              <div
                className="flex items-center gap-3.5 rounded-xl border border-(--s-rule) px-5 py-4 text-base font-medium transition-colors duration-2200 ease-exp-release [.lit_&]:border-(--s-rule-lit)"
                key={service.title}
              >
                <Icon
                  className="size-4 flex-none text-(--s-heading) transition-colors duration-2200 ease-exp-release [.lit_&]:text-(--s-heading-lit)"
                  aria-hidden="true"
                />
                <span>{service.title}</span>
              </div>
            );
          })}
        </div>
        {block.ctaText && block.ctaHref && (
          <div className="mt-7">
            <Link href={block.ctaHref}>
              <Button
                variant="experience"
                size="experience"
              >
                {block.ctaText}
              </Button>
            </Link>
          </div>
        )}
      </div>
    );
  }

  if (block.type === "pricing-list") {
    return (
      <div className="mt-2.5">
        {block.note && (
          <p className="mt-2.5 mb-0 max-w-3xl font-sans text-base font-light not-italic leading-loose text-exp-body opacity-62">
            {block.note}
          </p>
        )}
        <ul className="mt-4 flex list-none flex-col">
          {block.services?.map((service) => {
            const Icon = SERVICE_ICONS[service.icon] ?? Sparkles;
            return (
              <li
                className="flex items-center justify-between gap-4 border-b border-(--s-rule) py-4 transition-colors duration-2200 ease-exp-release [.lit_&]:border-(--s-rule-lit)"
                key={service.title}
              >
                <span className="flex items-center gap-3.5 text-base font-medium">
                  <Icon
                    className="size-4 flex-none text-(--s-heading) transition-colors duration-2200 ease-exp-release [.lit_&]:text-(--s-heading-lit)"
                    aria-hidden="true"
                  />
                  {service.title}
                </span>
                {service.price && (
                  <span className="flex-none font-display text-base italic text-(--s-heading) transition-colors duration-2200 ease-exp-release [.lit_&]:text-(--s-heading-lit)">
                    {service.price}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
        {block.ctaText && block.ctaHref && (
          <div className="mt-7">
            <Link href={block.ctaHref}>
              <Button
                variant="experience"
                size="experience"
              >
                {block.ctaText}
              </Button>
            </Link>
          </div>
        )}
      </div>
    );
  }

  if (block.type === "features") {
    return (
      <div className="mt-12 grid grid-cols-1 gap-9 md:grid-cols-3 md:gap-0">
        {block.features?.map((feature) => {
          const Icon = SERVICE_ICONS[feature.icon] ?? Sparkles;
          return (
            <div
              className="flex flex-col items-center gap-3.5 text-center transition-colors duration-2200 ease-exp-release [.lit_&]:border-(--s-rule-lit) md:border-l md:border-(--s-rule) md:px-10 md:first:border-l-0 md:first:pl-0 md:last:pr-0"
              key={feature.title}
            >
              <Icon
                className="size-9 text-(--s-heading) transition-colors duration-2200 ease-exp-release [.lit_&]:text-(--s-heading-lit)"
                aria-hidden="true"
              />
              <h3 className="m-0 font-display text-3xl font-normal italic transition-colors duration-2200 ease-exp-release [.lit_&]:text-white">
                {feature.title}
              </h3>
              <p className="m-0 max-w-[26ch] text-sm font-light leading-relaxed text-exp-body opacity-88">
                {feature.text}
              </p>
              {feature.ctaText && feature.ctaHref && (
                <Link
                  href={feature.ctaHref}
                  className="mt-1.5"
                >
                  <Button
                    variant="experience-outline"
                    size="experience"
                  >
                    {feature.ctaText}
                  </Button>
                </Link>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  if (block.type === "faq") {
    return (
      <Accordion
        type="single"
        className="-mt-6 flex flex-col gap-3"
      >
        {block.faqs?.map((item, i) => (
          <AccordionItem
            key={item.question}
            value={`faq-${i}`}
            className="border-(--s-rule) py-0.5 transition-colors duration-2200 ease-exp-release [.lit_&]:border-(--s-rule-lit)"
          >
            <AccordionTrigger className="font-display text-2xl font-normal italic text-white transition-colors duration-300 hover:no-underline data-[state=open]:text-(--s-heading)">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="mb-0 max-w-3xl text-xl font-light leading-relaxed text-exp-body opacity-88">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }

  if (block.type === "cta" && block.text && block.href) {
    return (
      <div className="mt-7">
        <Link href={block.href}>
          <Button
            variant="experience"
            size="experience"
          >
            {block.text}
          </Button>
        </Link>
      </div>
    );
  }

  if (block.type === "quiet") {
    // `exp-quiet` is kept: its font-size / color / line-height are `!important` in
    // globals.css, so those three still win over any utility written here.
    return <p className="exp-quiet mb-5 font-light last-of-type:mb-0">{block.text}</p>;
  }

  return <p className="mb-5 text-lg leading-loose font-light text-exp-body last-of-type:mb-0">{block.text}</p>;
};

export default ContentBlockView;
