import Link from "next/link";

import { INFO } from "@/constants";
import { Routes } from "@/constants/routes";

import { Button } from "../ui/button";

const ComingSoon = () => {
  return (
    <section className="exp-section exp-pos-9 flex flex-col items-center px-[2.2rem] py-20 text-center sm:py-24">
      <span className="text-2xs mb-3 block font-medium tracking-[0.32em] text-(--s-eyebrow,var(--color-exp-gold)) uppercase">
        Coming Soon
      </span>

      <h1 className="mb-[0.7rem] font-display text-[clamp(2rem,5vw,3.2rem)] leading-[1.15] font-normal text-(--s-heading,var(--color-exp-olive-deep)) italic">
        Coming Soon
      </h1>

      <p className="text-base+ mb-[1.9rem] block max-w-md font-light">We are working on something great. Stay tuned!</p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link href={Routes.HOME}>
          <Button
            variant="experience"
            size="experience"
          >
            Back To Home
          </Button>
        </Link>

        <Link href={`mailto:${INFO.EMAIL_ADDRESS}`}>
          <Button
            variant="outline"
            size="experience"
            className="rounded-full border-(--s-heading,var(--color-exp-olive-deep)) font-medium text-(--s-heading,var(--color-exp-olive-deep)) hover:bg-(--s-heading,var(--color-exp-olive-deep)) hover:text-(--s-pre,var(--color-exp-paper))"
          >
            Contact Us
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ComingSoon;
