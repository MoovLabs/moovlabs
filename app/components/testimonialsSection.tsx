"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Quote, Star, ArrowUpRight } from "lucide-react";

// Testimonials Data
const testimonials = [
  {
    id: 1,
    content:
      "Moovlabs Studio a transformé notre présence digitale. L'équipe n'a pas seulement construit un site web ; ils ont créé une expérience digitale qui capture parfaitement l'essence de notre marque.",
    author: "Sarah Jenkins",
    role: "CMO, TechFlow",
    rating: 5,
    image: "/images/testimonials/avatar1.jpg",
  },
  {
    id: 2,
    content:
      "Travailler avec eux a changé la donne. Leur approche stratégique de l'UI/UX a considérablement amélioré nos taux de conversion.",
    author: "David Chen",
    role: "Fondateur, Zenith",
    rating: 5,
    image: "/images/testimonials/avatar2.jpg",
  },
  {
    id: 3,
    content:
      "Le niveau de créativité et d'expertise technique est rare. Ils ont livré une plateforme complexe en avance sur le planning et au-delà de nos attentes.",
    author: "Elena Rodriguez",
    role: "Directrice Produit, Nova",
    rating: 5,
    image: "/images/testimonials/avatar3.jpg",
  },
];

// Leadership Data
const leaders = [
  {
    name: "Kevin Randrianado",
    role: "CEO et Co-Fondateur",
    bio: "Visionnaire avec plus de 15 ans d'expérience dans la création d'identités de marque primées.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
  {
    name: "Herizo RAKOTOMAMPIONONA",
    role: "CTO et Co-Fondateur",
    bio: "Architecte full-stack obsédé par la performance et les systèmes évolutifs.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
  },
  {
    name: "Onjaniana Rolland",
    role: "COO et Co-Fondateur",
    bio: "Stratège axée sur les données s'assurant que chaque pixel sert un objectif commercial.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
  },
];

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: typeof testimonials[0];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.6 }}
    className="bg-card rounded-xl p-6 md:p-8 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <div>
      {/* <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div> */}
      <Quote className="w-8 h-8 text-primary/20 mb-3" />
      <p className="text-sm md:text-base text-foreground italic leading-relaxed">
        "{testimonial.content}"
      </p>
    </div>

    <div className="flex items-center gap-3 pt-4 border-t border-border mt-6">
      <div className="w-10 h-10 rounded-full overflow-hidden border border-border bg-muted flex items-center justify-center">
        {testimonial.image ? (
          <Image
            src={testimonial.image}
            alt={testimonial.author}
            width={40}
            height={40}
            className="object-cover"
          />
        ) : (
          <span className="text-sm font-bold text-muted-foreground">
            {testimonial.author.charAt(0)}
          </span>
        )}
      </div>
      <div>
        <h4 className="text-sm md:text-base font-semibold text-foreground leading-none">
          {testimonial.author}
        </h4>
        <p className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</p>
      </div>
    </div>
  </motion.div>
);

const LeaderCard = ({ leader, index }: { leader: typeof leaders[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.6 }}
    className="group"
  >
    <div className="relative overflow-hidden rounded-xl cursor-pointer border-2 border-foreground/10 mb-4  transition-colors duration-300 aspect-[3/4] bg-card shadow-md">
      {leader.image && (
        <>
          <Image
            src={leader.image}
            alt={leader.name}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-transform duration-500 scale-100 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
        </>
      )}
    </div>

    <h3 className="text-lg md:text-xl font-display uppercase tracking-wide text-foreground mb-1 group-hover:text-primary transition-colors mt-2">
      {leader.name}
    </h3>
    <p className="text-primary font-semibold uppercase tracking-wide text-xs md:text-sm mb-2">
      {leader.role}
    </p>
    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{leader.bio}</p>
  </motion.div>
);

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            HISTOIRES <span className="text-gradient-gold">CLIENTS</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-sm md:text-base">
            Ne nous croyez pas sur parole. Écoutez les visionnaires avec qui nous avons eu le privilège de collaborer.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Leadership Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-t border-border pt-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-primary" />
              <p className="text-3xl font-bold uppercase tracking-widest text-primary">Dirigeants</p>
            </div>
            <h2 className="text-2xl  font-bold text-foreground">
              RENCONTREZ LES <span className="text-gradient-gold">ESPRITS</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground text-sm md:text-base">
            Un collectif de stratèges créatifs et d'experts techniques dédiés à repousser les limites du digital.
          </p>
        </motion.div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {leaders.map((leader, index) => (
            <LeaderCard key={leader.name} leader={leader} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;