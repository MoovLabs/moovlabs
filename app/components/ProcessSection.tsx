"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Pencil, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Discovery",
    description: "We dive deep into your brand, audience, and goals to understand what makes you unique.",
  },
  {
    icon: Pencil,
    number: "02",
    title: "Design",
    description: "Our creative team crafts visually stunning concepts that align with your vision.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Develop",
    description: "We bring designs to life with clean, performant code and cutting-edge technology.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch",
    description: "We deploy your project and provide ongoing support to ensure continued success.",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding px-6 md:px-12 lg:px-20 noise-bg">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-[3px] bg-primary" />
            <p className="text-sm font-bold uppercase tracking-[0.4em] text-primary">
              How We Work
            </p>
            <div className="w-16 h-[3px] bg-primary" />
          </div>
          <h2 className="text-display-lg text-foreground">
            OUR <span className="text-gradient-gold">PROCESS</span>
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-foreground/10 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                className="relative group"
              >
                {/* Card */}
                <div className="relative bg-background border-2 border-foreground/10 p-8 hover:border-primary transition-all duration-500 group-hover:shadow-[8px_8px_0_hsl(var(--primary)/0.3)] group-hover:translate-x-[-4px] group-hover:translate-y-[-4px]">
                  {/* Number Badge */}
                  <div className="absolute -top-6 left-8 bg-primary text-primary-foreground px-4 py-2 font-display text-2xl">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mt-6 mb-8">
                    <step.icon className="w-12 h-12 text-foreground/30 group-hover:text-primary transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-3xl font-display uppercase text-foreground mb-4 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 bg-background border-2 border-foreground/10 rotate-45 -translate-y-1/2 z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
