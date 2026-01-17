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
    content: "Moovlabs Studio transformed our digital presence. The team didn't just build a website; they crafted a digital experience that perfectly captures our brand essence. The attention to detail is unmatched.",
    author: "Sarah Jenkins",
    role: "CMO, TechFlow",
    rating: 5,
    image: "/images/testimonials/avatar1.jpg" // Placeholder path
  },
  {
    id: 2,
    content: "Working with them was a game-changer. Their strategic approach to UI/UX significantly improved our conversion rates. They are not just designers; they are growth partners.",
    author: "David Chen",
    role: "Founder, Zenith",
    rating: 5,
    image: "/images/testimonials/avatar2.jpg"
  },
  {
    id: 3,
    content: "The level of creativity and technical expertise is rare to find. They delivered a complex platform ahead of schedule and beyond our expectations. Truly world-class service.",
    author: "Elena Rodriguez",
    role: "Product Director, Nova",
    rating: 5,
    image: "/images/testimonials/avatar3.jpg"
  }
];

// Leadership Data
const leaders = [
  {
    name: "Kevin Randrianado",
    role: "CEO and Co-Founder",
    bio: "Visionary designer with 15+ years crafting award-winning brand identities.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
  },
  {
    name: "Herizo RAKOTOMAMPIONONA",
    role: "CTO and Co-Founder",
    bio: "Full-stack architect obsessed with performance and scalable systems.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80"
  },
  {
    name: "Onjaniana Rolland",
    role: "COO and Co-Founder",
    bio: "Data-driven strategist ensuring every pixel serves a business purpose.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80"
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
      <div className="relative overflow-hidden aspect-[3/4] border-2 border-foreground/10 mb-6 group-hover:border-primary transition-colors duration-300">
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
        <img 
          src={leader.image} 
          alt={leader.name}
          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
        />
        
        {/* Social Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/40">
           <button className="bg-primary text-primary-foreground p-3 rounded-full hover:scale-110 transition-transform">
             <ArrowUpRight className="w-6 h-6" />
           </button>
        </div>
      </div>

      <h3 className="text-3xl font-display uppercase tracking-wide text-foreground mb-1 group-hover:text-primary transition-colors">
        {leader.name}
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
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 border border-primary/30 rounded-full bg-primary/5">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Testimonials</span>
          </div>
          
          <h2 className="text-display-lg text-foreground mb-6">
            CLIENT <span className="text-stroke-gold">STORIES</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Don't just take our word for it. Hear from the visionaries we've had the privilege to collaborate with.
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
                Leadership
              </p>
            </div>
            <h2 className="text-display-lg text-foreground">
              MEET THE <span className="text-gradient-gold">MINDS</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground text-lg pb-4">
            A collective of creative strategists and technical experts dedicated to pushing digital boundaries.
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
