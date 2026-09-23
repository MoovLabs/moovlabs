"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import * as Icons from "lucide-react";

import { Section } from "@/src/components/ui/section";
import { Container } from "@/src/components/ui/container";
import { SectionHeader } from "@/src/components/ui/section-header";
import { processSteps } from "@/src/data/process";
import type { Locale } from "@/src/types";

interface ProcessSectionProps {
  dict: any;
  locale: Locale;
}

export function ProcessSection({ dict, locale }: ProcessSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section variant="muted">
      <Container>
        <SectionHeader
          label={dict.process.label}
          title={dict.process.title}
          titleAccent={dict.process.titleAccent}
          align="center"
        />

        <div className="relative mt-24">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[5.5rem] left-0 right-0 h-px bg-border -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-6">
            {processSteps.map((step, index) => {
              const Icon = (Icons as any)[step.icon] || Icons.Circle;

              return (
                <motion.div
                  key={step.number}
                  ref={ref}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  className="relative group text-center lg:text-left"
                >
                  <div className="relative z-10 inline-flex flex-col items-center lg:items-start">
                    {/* Number & Icon Circle */}
                    <div className="w-24 h-24 rounded-full border-2 border-background bg-card flex flex-col items-center justify-center mb-8 relative shadow-lg group-hover:border-primary group-hover:text-primary transition-all duration-300">
                      <Icon className="w-8 h-8 text-foreground group-hover:text-primary transition-colors" />
                      <span className="absolute -top-3 -right-3 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 uppercase tracking-widest">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-2xl font-display uppercase tracking-wider mb-4 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto lg:mx-0">
                      {step.description[locale]}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
