"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

// FAQ Data
const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Our project timelines vary depending on the scope and complexity. A standard branding project takes 2-4 weeks, while a custom website typically requires 4-8 weeks. We provide a detailed timeline during our initial consultation to set clear expectations."
  },
  {
    question: "How do you handle pricing and payments?",
    answer: "We operate on a transparent fixed-pricing model for most projects, split into milestones (typically 50% deposit, 50% upon completion). For ongoing partnerships or complex product development, we offer retainer or time-and-materials arrangements."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Absolutely. We offer 30 days of complimentary support after launch to ensure everything runs smoothly. Beyond that, we provide flexible maintenance packages to keep your digital products secure, updated, and performing at their best."
  },
  {
    question: "What makes Moovlabs Studio different?",
    answer: "We blend strategic business thinking with high-end aesthetic design. We don't just make things look good; we build digital assets that drive growth, improve conversion, and position your brand as a market leader."
  }
];

const FaqItem = ({ question, answer, index }: { question: string, answer: string, index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-8 md:py-10 text-left group"
      >
        <span className="text-2xl md:text-4xl lg:text-5xl font-display uppercase tracking-wide text-foreground group-hover:text-primary transition-colors duration-300">
          {question}
        </span>
        <div className={`relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 border-2 border-border rounded-full transition-all duration-300 ${isOpen ? 'border-primary bg-primary text-primary-foreground rotate-45' : 'group-hover:border-primary group-hover:text-primary'}`}>
          <Plus className="w-6 h-6 md:w-8 md:h-8" />
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-10 max-w-3xl text-lg text-muted-foreground leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FaqSection = () => {
  return (
    <section className="section-padding px-6 md:px-12 lg:px-20 bg-background relative z-10">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[3px] bg-primary" />
              <p className="text-sm font-bold uppercase tracking-[0.4em] text-primary">
                Q&A
              </p>
            </div>
            <h2 className="text-display-lg text-foreground">
              COMMON <span className="text-stroke-gold">QUESTIONS</span>
            </h2>
          </div>
        </div>

        <div className="border-t border-border">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
