"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "FLUX STUDIO",
    category: "Web Design",
    year: "2024",
    description: "Site web studio créatif avec animations immersives et typographie audacieuse",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    tags: ["UI/UX", "Développement", "Branding"],
  },
  {
    title: "NOVA FINANCE",
    category: "Branding",
    year: "2024",
    description: "Identité de marque complète pour une startup fintech visionnaire",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Identité", "Stratégie", "Digital"],
  },
  {
    title: "ECHO APP",
    category: "Application Mobile",
    year: "2023",
    description: "Plateforme audio sociale avec une interface UI élégante et intuitive",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    tags: ["iOS", "Android", "Recherche UX"],
  },
  {
    title: "VERTEX AGENCY",
    category: "Développement",
    year: "2023",
    description: "Site web d'agence haute performance avec animations personnalisées",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["React", "Animation", "Performance"],
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isLarge = index === 0 || index === 3;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden cursor-pointer border border-foreground/20 hover:border-primary transition-colors duration-500 rounded-xl shadow-lg ${
        isLarge ? "md:col-span-2" : ""
      }`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden rounded-xl ${isLarge ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            sizes={isLarge ? "(max-width: 768px) 100vw, 100vw" : "(max-width: 768px) 100vw, 50vw"}
            priority={index <= 1}
          />
        </motion.div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500 rounded-xl" />

      {/* Top Label */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
        <div className="flex gap-2 flex-wrap">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-cream/80 border border-cream/30 bg-navy-dark/50 backdrop-blur-sm rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="text-xs font-mono text-cream/60">{project.year}</span>
      </div>

      {/* Content */}
      <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-primary text-xs font-bold uppercase tracking-wider">
            {project.category}
          </span>
          <div className="flex-1 h-px bg-cream/20" />
        </div>
        
        <h3 className={`font-display text-3xl md:text-4xl lg:text-5xl text-cream mb-2`}>
          {project.title}
        </h3>
        
        <p className="text-cream/70 text-sm max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
          {project.description}
        </p>
      </div>

      {/* Arrow */}
      <motion.div
        className="absolute top-4 right-4 w-12 h-12 border-2 border-primary bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full"
        whileHover={{ scale: 1.1 }}
      >
        <ArrowUpRight className="w-5 h-5 text-primary" />
      </motion.div>
    </motion.div>
  );
};

const WorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="section-padding px-6 md:px-12 lg:px-20 bg-card/50 noise-bg">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-[2px] bg-primary" />
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Projets Sélectionnés
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              NOS <span className="text-gradient-gold">RÉALISATIONS</span>
            </h2>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-foreground font-semibold uppercase tracking-widest text-sm group"
            >
              <span className="link-underline">Voir tous les projets</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;