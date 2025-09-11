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
    <div className="bg-sidebar p-4 rounded-lg">
      <Accordion type="single" collapsible className="space-y-2.5">
        {data.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="p-4 rounded-lg">
            <AccordionTrigger className="text-foreground text-base font-semibold">
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