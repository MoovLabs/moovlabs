"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Quote, Star, ArrowUpRight } from "lucide-react";

// Testimonials Data
const testimonials = [
  {
    id: 1,
    content: "Moovlabs Studio a transformé notre présence digitale. L'équipe n'a pas seulement construit un site web ; ils ont créé une expérience digitale qui capture parfaitement l'essence de notre marque. Le souci du détail est inégalé.",
    author: "Sarah Jenkins",
    role: "CMO, TechFlow",
    rating: 5,
    image: "/images/testimonials/avatar1.jpg" // Placeholder path
  },
  {
    id: 2,
    content: "Travailler avec eux a changé la donne. Leur approche stratégique de l'UI/UX a considérablement amélioré nos taux de conversion. Ce ne sont pas juste des designers ; ce sont des partenaires de croissance.",
    author: "David Chen",
    role: "Fondateur, Zenith",
    rating: 5,
    image: "/images/testimonials/avatar2.jpg"
  },
  {
    id: 3,
    content: "Le niveau de créativité et d'expertise technique est rare. Ils ont livré une plateforme complexe en avance sur le planning et au-delà de nos attentes. Un service vraiment de classe mondiale.",
    author: "Elena Rodriguez",
    role: "Directrice Produit, Nova",
    rating: 5,
    image: "/images/testimonials/avatar3.jpg"
  }
];

// Leadership Data
const leaders = [
  {
    name: "Randrianado",
    subname: "Kevin",
    role: "CEO et Co-Fondateur",
    bio: "",
    image: undefined
  },
  {
    name: "RAKOTOMAMPIONONA",
    subname : "Herizo",
    role: "CTO et Co-Fondateur",
    bio: "",
    image: undefined
  },
  {
    name: "Rakotondrabe",
    subname: "Onjaniana Rolland",
    role: "COO et Co-Fondateur",
    bio: "",
    image: undefined
  }
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="card-retro p-8 flex flex-col justify-between h-full bg-card"
    >
      <div>
        <div className="flex gap-1 mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
        </div>
        
        <Quote className="w-10 h-10 text-primary/20 mb-4" />
        
        <p className="text-lg md:text-xl font-medium text-foreground italic mb-8 leading-relaxed">
          "{testimonial.content}"
        </p>
      </div>

      <div className="flex items-center gap-4 pt-6 border-t border-border">
        {/* Avatar Placeholder */}
        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center overflow-hidden border border-border">
           <span className="text-xl font-display text-muted-foreground">{testimonial.author.charAt(0)}</span>
        </div>
        
        <div>
          <h4 className="font-bold text-foreground text-lg leading-none">{testimonial.author}</h4>
          <p className="text-sm text-muted-foreground mt-1">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const LeaderCard = ({ leader, index }: { leader: typeof leaders[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="group relative"
    >
      <div className="relative overflow-hidden aspect-[3/4] border-2 border-foreground/10 mb-6 group-hover:border-primary transition-colors duration-300 bg-card">
        {leader.image ? (
          <>
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            <Image 
              src={leader.image} 
              alt={leader.name}
              fill
              className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            {/* Force Image component to behave like background but with performance benefits */}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted/30 group-hover:bg-primary/5 transition-colors duration-300">
             <div className="text-center">
               <span className="text-6xl font-display text-foreground/20 group-hover:text-primary/40 transition-colors duration-300">
                 {leader.subname.split(' ').map(n => n[0]).join('').substring(0, 1)}
                 {leader.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
               </span>
             </div>
          </div>
        )}
        
        {/* Social Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/10">
           <button className="bg-primary text-primary-foreground p-3 rounded-full hover:scale-110 transition-transform shadow-lg">
             <ArrowUpRight className="w-6 h-6" />
           </button>
        </div>
      </div>

      <h3 className="text-3xl font-display uppercase tracking-wide text-foreground mb-1 group-hover:text-primary transition-colors">
        <span className="text-3xl font-display capitalize tracking-wide text-foreground mb-1 group-hover:text-primary transition-colors">{leader.subname}</span> {leader.name}
      </h3>
      <p className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
        {leader.role}
      </p>
      <p className="text-muted-foreground leading-relaxed">
        {leader.bio}
      </p>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background relative overflow-hidden">
        {/* Background Decorative Grid */}
        <div className="absolute inset-0 retro-grid opacity-30 pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* TESTIMONIALS HEADER */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-display-lg text-foreground mb-6">
            HISTOIRES <span className="text-stroke-gold">CLIENTS</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Ne nous croyez pas sur parole. Écoutez les visionnaires avec qui nous avons eu le privilège de collaborer.
          </p>
        </motion.div>

        {/* TESTIMONIALS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* LEADERSHIP HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col md:flex-row items-end justify-between gap-8 border-t border-border pt-20"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[3px] bg-primary" />
              <p className="text-sm font-bold uppercase tracking-[0.4em] text-primary">
                Dirigeants
              </p>
            </div>
            <h2 className="text-display-lg text-foreground">
              RENCONTREZ LES <span className="text-gradient-gold">ESPRITS</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground text-lg pb-4">
            Un collectif de stratèges créatifs et d'experts techniques dédiés à repousser les limites du digital.
          </p>
        </motion.div>

        {/* LEADERSHIP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {leaders.map((leader, index) => (
            <LeaderCard key={leader.name} leader={leader} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
