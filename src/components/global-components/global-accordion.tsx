import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface SliderData {
  title: string;
  content: string;
}

interface GlobalAccordionProps {
  data: SliderData[];
}

export function GlobalAccordion({ data }: GlobalAccordionProps) {
  return (
    <div className="">
      <Accordion type="single" collapsible className="space-y-2.5">
        {data.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="p-4 rounded-lg bg-sidebar">
            <AccordionTrigger className="text-foreground text-base font-semibold decoration-none p-0">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-foreground-muted text-sm font-normal gap-2.5">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}