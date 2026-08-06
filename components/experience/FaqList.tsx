import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import type { FAQEntry } from "@/types";

const FaqList = ({ faqs }: { faqs: FAQEntry[] }) => (
  <Accordion
    type="single"
    className="-mt-6 flex flex-col gap-3"
  >
    {faqs.map((item, i) => (
      <AccordionItem
        key={item.question}
        value={`faq-${i}`}
        className="border-(--s-rule) py-0.5 transition-colors duration-2200 ease-exp-release [.lit_&]:border-(--s-rule-lit)"
      >
        <AccordionTrigger className="font-display text-2xl font-normal italic text-white transition-colors duration-300 hover:no-underline data-[state=open]:text-(--s-heading)">
          {item.question}
        </AccordionTrigger>
        <AccordionContent className="mb-0 max-w-3xl text-xl font-light leading-relaxed text-white/85 opacity-88">
          {item.answer}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

export default FaqList;
