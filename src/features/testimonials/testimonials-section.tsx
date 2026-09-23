"use client";

import { Section } from "@/src/components/ui/section";
import { Container } from "@/src/components/ui/container";
import { SectionHeader } from "@/src/components/ui/section-header";
import type { Locale } from "@/src/types";

interface TestimonialsSectionProps {
  dict: any;
  locale: Locale;
}

export function TestimonialsSection({ dict, locale }: TestimonialsSectionProps) {
  return (
    <Section id="testimonials" variant="default">
      <Container>
        <SectionHeader
          label={dict.testimonials.label}
          title={dict.testimonials.title}
          titleAccent={dict.testimonials.titleAccent}
          subtitle={dict.testimonials.subtitle}
        />

        <div className="mt-20 py-16 text-center border-y border-border/50 bg-card/20 rounded-lg">
          <p className="text-xl font-display text-muted-foreground uppercase tracking-widest">
            {dict.testimonials.comingSoon}
          </p>
        </div>
      </Container>
    </Section>
  );
}
