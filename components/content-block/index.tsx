import Link from "next/link";
import NextImage from "next/image";

import {
  Activity,
  Droplet,
  Flame,
  Hand,
  Heart,
  Moon,
  Sparkles,
  Target,
  Waves,
  Wind,
  type LucideIcon,
} from "lucide-react";

import type { ContentBlock } from "@/types";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

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
      <ul className="exp-condition-list">
        {block.items?.map((item) => <li key={item}>{item}</li>)}
      </ul>
    );
  }

  if (block.type === "categories") {
    return (
      <div className="exp-category-grid">
        {block.entries?.map((entry) => (
          <div
            className="exp-category-card"
            key={entry.title}
          >
            <h3>{entry.title}</h3>
            <p>{entry.text}</p>
          </div>
        ))}
      </div>
    );
  }

  if (block.type === "steps") {
    return (
      <ol className="exp-step-list">
        {block.entries?.map((entry, i) => (
          <li
            className="exp-step"
            key={entry.title}
          >
            <span
              className="exp-step-num"
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="exp-step-body">
              <h3>{entry.title}</h3>
              <p>{entry.text}</p>
            </div>
          </li>
        ))}
      </ol>
    );
  }

  if (block.type === "image" && block.src) {
    return (
      <div
        className="exp-media-frame"
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
      <div className="exp-service-block">
        {block.note && <p className="exp-note">{block.note}</p>}
        <div className="exp-service-grid">
          {block.services?.map((service) => {
            const Icon = SERVICE_ICONS[service.icon] ?? Sparkles;
            return (
              <div
                className="exp-service-card"
                key={service.title}
              >
                <Icon
                  className="exp-service-icon"
                  aria-hidden="true"
                />
                <span>{service.title}</span>
              </div>
            );
          })}
        </div>
        {block.ctaText && block.ctaHref && (
          <div className="exp-inline-cta">
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
      <div className="exp-pricing-block">
        {block.note && <p className="exp-note">{block.note}</p>}
        <ul className="exp-pricing-list">
          {block.services?.map((service) => {
            const Icon = SERVICE_ICONS[service.icon] ?? Sparkles;
            return (
              <li
                className="exp-pricing-row"
                key={service.title}
              >
                <span className="exp-pricing-label">
                  <Icon
                    className="exp-service-icon"
                    aria-hidden="true"
                  />
                  {service.title}
                </span>
                {service.price && <span className="exp-pricing-price">{service.price}</span>}
              </li>
            );
          })}
        </ul>
        {block.ctaText && block.ctaHref && (
          <div className="exp-inline-cta">
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
      <div className="exp-feature-grid">
        {block.features?.map((feature) => {
          const Icon = SERVICE_ICONS[feature.icon] ?? Sparkles;
          return (
            <div
              className="exp-feature-card"
              key={feature.title}
            >
              <Icon
                className="exp-feature-icon"
                aria-hidden="true"
              />
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
              {feature.ctaText && feature.ctaHref && (
                <Link href={feature.ctaHref}>
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
        className="exp-faq"
      >
        {block.faqs?.map((item, i) => (
          <AccordionItem
            key={item.question}
            value={`faq-${i}`}
            className="border-0 exp-faq-item"
          >
            <AccordionTrigger className="hover:no-underline exp-faq-trigger">{item.question}</AccordionTrigger>
            <AccordionContent className="exp-faq-content">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }

  if (block.type === "cta" && block.text && block.href) {
    return (
      <div className="exp-inline-cta">
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
    return <p className="exp-quiet">{block.text}</p>;
  }

  return <p>{block.text}</p>;
};

export default ContentBlockView;
