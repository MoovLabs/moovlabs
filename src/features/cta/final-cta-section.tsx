"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Section } from "@/src/components/ui/section";
import { Container } from "@/src/components/ui/container";
import { Button } from "@/src/components/ui/button";
import type { Locale } from "@/src/types";

interface FinalCtaSectionProps {
  dict: any;
  locale: Locale;
}

export function FinalCtaSection({ dict, locale }: FinalCtaSectionProps) {
  return (
    <Section variant="accent" className="py-32" noNoise={false}>
      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tight text-white mb-4">
            {dict.cta.headline1}
          </h2>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tight text-gradient-gold mb-12 mix-blend-plus-lighter opacity-90 stroke-text">
            {dict.cta.headline2}
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 mt-8">
            <Button size="lg" variant="default" asChild className="text-lg text-white hover:bg-black/80">
              <Link href="#contact" className="flex items-center gap-2 group">
                {dict.cta.cta1}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg border-white text-white hover:bg-black hover:text-white">
              <Link href="#contact">
                {dict.cta.cta2}
              </Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
