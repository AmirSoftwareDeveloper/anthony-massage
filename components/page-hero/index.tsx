import Image from "next/image";
import Link from "next/link";

import { cn } from "@/utils";

import { Routes } from "@/constants/routes";

type PageHeroProps = {
  title?: string;
  className?: string;

  pageName?: string;

  secondLink?: string;
  secondTitle?: string;

  hasBreadcrumb?: boolean;
};

const Chevron = () => <span className="mx-2 text-white/70">›</span>;

const PageHero = ({ title, pageName, secondLink, secondTitle, hasBreadcrumb = true, className }: PageHeroProps) => {
  return (
    <section className="relative">
      <div className="relative isolate flex min-h-48 flex-col justify-center overflow-hidden sm:min-h-80">
        <Image
          src="/images/hero/image-13.jpg"
          alt={title || "Page hero background"}
          fill
          priority
          className="object-cover -z-10"
        />

        <div className={cn("relative z-10 py-10 text-white", className)}>
          <div className="container flex flex-col items-center text-center">
            {title && <h1 className="mb-3 max-w-2xl text-2xl font-bold sm:mb-5 sm:text-4xl lg:text-5xl">{title}</h1>}

            {hasBreadcrumb && (
              <nav
                aria-label="Breadcrumb"
                className="flex items-center text-sm lg:text-lg"
              >
                <Link
                  href={Routes.HOME}
                  className="hover:text-secondary transition-colors"
                >
                  Home
                </Link>

                {secondTitle && (
                  <>
                    <Chevron />

                    {secondLink ? (
                      <Link
                        href={secondLink}
                        className="hover:text-secondary transition-colors"
                      >
                        {secondTitle}
                      </Link>
                    ) : (
                      <span>{secondTitle}</span>
                    )}
                  </>
                )}

                {pageName && (
                  <>
                    <Chevron />
                    <span className="text-white">{pageName}</span>
                  </>
                )}
              </nav>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
