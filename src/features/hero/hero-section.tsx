"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/src/components/ui/container";
import { AnimatedText, RevealText } from "@/src/components/ui/animated-text";
import { Button } from "@/src/components/ui/button";
import type { Locale } from "@/src/types";

interface HeroSectionProps {
  dict: any;
  locale: Locale;
}

export function HeroSection({ dict, locale }: HeroSectionProps) {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center pt-28 pb-16 overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 retro-grid opacity-30 pointer-events-none" />

      {/* Decorative Floating Elements (hidden on reduce motion) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden sm:block hidden">
        <motion.div
          className="absolute -top-20 -right-40 w-[600px] h-[600px] rounded-full border border-primary/20"
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 border border-primary bg-primary/5"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-10 h-10 bg-primary/80"
          animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </div>

      <Container className="relative z-10">
        {/* Tagline */}
        <AnimatedText delay={0.1} direction="right" className="flex items-center gap-4 mb-8">
          <div className="w-12 h-[2px] bg-primary" />
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">
            {dict.hero.tagline}
          </p>
        </AnimatedText>

        {/* Headlines */}
        <div className="flex flex-col gap-2">
          <RevealText delay={0.2}>
            <h1 className="text-display-xl text-foreground">
              {dict.hero.headline1}
            </h1>
          </RevealText>
          <RevealText delay={0.3}>
            <h1 className="text-display-xl text-stroke">
              {dict.hero.headline2}
            </h1>
          </RevealText>
          <RevealText delay={0.4}>
            <h1 className="text-display-xl text-gradient-gold pb-4">
              {dict.hero.headline3}
            </h1>
          </RevealText>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <AnimatedText delay={0.6}>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              {dict.hero.subtitle}
            </p>
          </AnimatedText>

          <AnimatedText delay={0.8} className="flex flex-wrap gap-4 lg:justify-end">
            <Button asChild>
              <Link href="#work">
                {dict.hero.cta1}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={`/${locale}/contact`}>
                {dict.hero.cta2}
              </Link>
            </Button>
          </AnimatedText>
        </div>

        {/* Stats */}
        <AnimatedText delay={1} className="mt-24 pt-10 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "50+", label: dict.stats.projects },
            { value: "8+", label: dict.stats.years },
            { value: "30+", label: dict.stats.clients },
            { value: "100%", label: dict.stats.passion },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.1 }}
              className="flex flex-col gap-2"
            >
              <span className="text-4xl md:text-5xl font-display text-primary">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </AnimatedText>
      </Container>

      {/* Scroll Indicator */}
      <AnimatedText delay={1.5} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden md:flex">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{dict.hero.scroll}</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown className="w-4 h-4 text-primary" />
        </motion.div>
      </AnimatedText>
    </section>
  );
}
