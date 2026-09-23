"use client";

import { Section } from "@/src/components/ui/section";
import { Container } from "@/src/components/ui/container";
import { SectionHeader } from "@/src/components/ui/section-header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/src/components/ui/accordion";
import { faqItems } from "@/src/data/faq";
import type { Locale } from "@/src/types";

interface FaqSectionProps {
  dict: any;
  locale: Locale;
}

export function FaqSection({ dict, locale }: FaqSectionProps) {
  return (
    <Section id="faq" variant="default" className="pt-24 pb-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
          <div>
            <SectionHeader
              label={dict.faq.label}
              title={dict.faq.title}
              titleAccent={dict.faq.titleAccent}
            />
          </div>

          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-xl md:text-2xl font-display uppercase tracking-wide">
                    {item.question[locale]}
                  </AccordionTrigger>
                  <AccordionContent className="text-base md:text-lg text-muted-foreground leading-relaxed pr-12">
                    {item.answer[locale]}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </Section>
  );
}
