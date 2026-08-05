import type { FAQEntry } from "@/types";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FaqList = ({ faqs }: { faqs: FAQEntry[] }) => (
  <Accordion
    type="single"
    className="exp-faq"
  >
    {faqs.map((item, i) => (
      <AccordionItem
        key={item.question}
        value={`faq-${i}`}
        className="exp-faq-item"
      >
        <AccordionTrigger className="hover:no-underline exp-faq-trigger">{item.question}</AccordionTrigger>
        <AccordionContent className="exp-faq-content">{item.answer}</AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

export default FaqList;
