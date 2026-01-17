"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

// FAQ Data
const faqs = [
  {
    question: "Quel est votre délai typique pour un projet ?",
    answer: "Nos délais varient selon l'envergure et la complexité. Un projet de branding standard prend 2-4 semaines, tandis qu'un site web sur mesure nécessite généralement 4-8 semaines. Nous fournissons un calendrier détaillé lors de notre consultation initiale."
  },
  {
    question: "Comment gérez-vous la facturation ?",
    answer: "Nous fonctionnons sur un modèle de prix fixe transparent pour la plupart des projets, divisé en étapes (typiquement 50% d'acompte, 50% à la livraison). Pour les partenariats continus, nous proposons des forfaits de maintenance."
  },
  {
    question: "Fournissez-vous un support après lancement ?",
    answer: "Absolument. Nous offrons 30 jours de support gratuit après le lancement pour assurer que tout fonctionne parfaitement. Au-delà, nous proposons des forfaits de maintenance flexibles pour garder vos produits digitaux sécurisés et à jour."
  },
  {
    question: "Qu'est-ce qui rend Moovlabs Studio différent ?",
    answer: "Nous allions réflexion stratégique et design esthétique haut de gamme. Nous ne faisons pas que de belles choses ; nous construisons des actifs digitaux qui stimulent la croissance et positionnent votre marque comme leader."
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
              QUESTIONS <span className="text-stroke-gold">FRÉQUENTES</span>
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
