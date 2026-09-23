"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import * as Icons from "lucide-react";

import { Section } from "@/src/components/ui/section";
import { Container } from "@/src/components/ui/container";
import { SectionHeader } from "@/src/components/ui/section-header";
import { serviceCategories } from "@/src/data/services";
import type { Locale } from "@/src/types";

interface ServicesSectionProps {
  dict: any;
  locale: Locale;
}

export function ServicesSection({ dict, locale }: ServicesSectionProps) {
  return (
    <Section id="services" variant="default">
      <Container>
        <SectionHeader
          label={dict.services.label}
          title={dict.services.title}
          titleAccent={dict.services.titleAccent}
          subtitle={dict.services.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20">
          {serviceCategories.map((category, index) => (
            <ServiceCategoryCard
              key={category.id}
              category={category}
              locale={locale}
              index={index}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ServiceCategoryCard({ category, locale, index }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Dynamically resolve icon from Lucide
  const Icon = (Icons as any)[category.icon] || Icons.Circle;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="card-elevated p-8 md:p-10 flex flex-col h-full group"
    >
      <div className="mb-8">
        <div className="w-16 h-16 border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-colors duration-300">
          <Icon className="w-8 h-8 text-primary" />
        </div>
      </div>

      <h3 className="text-3xl font-display uppercase tracking-wide mb-4 text-foreground group-hover:text-primary transition-colors">
        {category.title[locale]}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed mb-8">
        {category.description[locale]}
      </p>

      <div className="mt-auto pt-8 border-t border-border">
        <ul className="space-y-4">
          {category.items.map((item: any, i: number) => (
            <li key={i} className="flex flex-col gap-1">
              <span className="font-semibold text-foreground text-sm uppercase tracking-wider">
                {item.title[locale]}
              </span>
              <span className="text-muted-foreground text-sm">
                {item.description[locale]}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
