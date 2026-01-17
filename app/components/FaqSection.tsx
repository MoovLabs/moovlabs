"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

/* FAQ Data */
const faqs = [
  {
    question: "Quel est votre délai typique pour un projet ?",
    answer:
      "Les délais varient selon la complexité du projet. Un branding standard prend généralement 2 à 4 semaines, tandis qu’un site web sur mesure nécessite entre 4 et 8 semaines. Un planning précis est fourni dès la phase de consultation."
  },
  {
    question: "Comment gérez-vous la facturation ?",
    answer:
      "Nous appliquons un modèle de tarification clair avec un paiement en deux phases : 50 % au démarrage et 50 % à la livraison. Pour les collaborations longues, nous proposons des forfaits mensuels."
  },
  {
    question: "Proposez-vous un support après lancement ?",
    answer:
      "Oui. Nous offrons 30 jours de support inclus après la mise en ligne. Des plans de maintenance flexibles sont disponibles pour assurer la sécurité et l’évolution de votre produit."
  },
  {
    question: "Qu’est-ce qui différencie Moovlabs Studio ?",
    answer:
      "Nous combinons stratégie digitale et design haut de gamme. Notre objectif est de créer des solutions performantes qui renforcent votre positionnement et génèrent une réelle valeur business."
  }
];

const FaqItem = ({
  question,
  answer
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          w-full flex items-center justify-between 
          py-6 md:py-8 text-left group
          cursor-pointer
        "
      >
        <span className="
          text-lg sm:text-xl md:text-2xl lg:text-3xl 
          font-display font-semibold uppercase tracking-wide 
          text-foreground 
          group-hover:text-primary transition-colors duration-200
        ">
          {question}
        </span>

        <div
          className={`
            relative flex items-center justify-center 
            w-10 h-10 md:w-12 md:h-12 
            border border-border rounded-full 
            transition-all duration-200
            cursor-pointer
            ${isOpen
              ? "border-primary bg-primary text-primary-foreground rotate-45"
              : "group-hover:border-primary group-hover:text-primary"}
          `}
        >
          <Plus className="w-5 h-5 md:w-6 md:h-6" />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="
              pb-8 max-w-3xl 
              text-sm sm:text-base md:text-lg 
              text-muted-foreground leading-relaxed
            ">
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
    <section className="section-padding px-5 sm:px-8 md:px-12 lg:px-20 bg-background relative z-10">
      <div className="max-w-[1400px] mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[3px] bg-primary" />
              <p className="text-3xl font-bold uppercase tracking-[0.35em] text-primary">
                FAQ
              </p>
            </div>

            <h2 className="
              text-4xl
              mt-10
              font-display font-black 
              text-foreground
            ">
              QUESTIONS{" "}
              <span className="text-stroke-gold">FRÉQUENTES</span>
            </h2>
          </div>
        </div>

        {/* LIST */}
        <div className="border-t border-border">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;