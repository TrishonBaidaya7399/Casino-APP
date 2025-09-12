import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ReactNode } from "react";

interface SliderData {
  title: string;
  content: string | ReactNode;
}

interface GlobalAccordionProps {
  data: SliderData[];
}

export function GlobalAccordion({ data }: GlobalAccordionProps) {
  return (
    <div className="">
      <Accordion type="single" collapsible className="space-y-2.5">
        {data.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="rounded-lg bg-sidebar">
            <AccordionTrigger className="text-foreground text-base font-semibold decoration-none p-4 cursor-pointer transition-all duration-300 hover:bg-background-2">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-foreground-muted text-sm font-normal gap-2.5 px-4 pb-4 pt-2">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}