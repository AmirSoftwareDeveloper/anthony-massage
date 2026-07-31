import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
};

interface FAQProps {
  faqs: FAQItem[];
}

const FAQ = ({ faqs }: FAQProps) => {
  return (
    <Accordion
      type="single"
      defaultValue="item-0"
      className="space-y-3"
    >
      {faqs.map((item, index) => (
        <AccordionItem
          key={`${item.question}-${index}`}
          value={`item-${index}`}
          className="border-none"
        >
          <AccordionTrigger className="group flex w-full items-center justify-between rounded bg-[#f6f6f0] px-5 py-5 text-left text-base font-bold capitalize text-black hover:no-underline data-[state=open]:bg-secondary data-[state=open]:text-white lg:text-lg">
            {item.question}
          </AccordionTrigger>

          <AccordionContent className="bg-[#f6f6f0] px-6 py-4 text-sm lg:text-base">{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQ;
