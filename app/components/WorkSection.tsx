"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "FLUX STUDIO",
    category: "Web Design",
    year: "2024",
    description: "A creative studio website with immersive animations and bold typography",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    tags: ["UI/UX", "Development", "Branding"],
  },
  {
    title: "NOVA FINANCE",
    category: "Branding",
    year: "2024",
    description: "Complete brand identity for a forward-thinking fintech startup",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Identity", "Strategy", "Digital"],
  },
  {
    title: "ECHO APP",
    category: "Mobile App",
    year: "2023",
    description: "Social audio platform with sleek, intuitive UI design",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    tags: ["iOS", "Android", "UX Research"],
  },
  {
    title: "VERTEX AGENCY",
    category: "Development",
    year: "2023",
    description: "High-performance agency website with custom animations",
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
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden cursor-pointer border-2 border-foreground/10 hover:border-primary transition-colors duration-500 ${
        isLarge ? "md:col-span-2" : ""
      }`}
    >
      {/* Image */}
      <div className={`overflow-hidden ${isLarge ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.7 }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

      {/* Top Label */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start">
        <div className="flex gap-2 flex-wrap">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-cream/80 border border-cream/30 bg-navy-dark/50 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="text-sm font-mono text-cream/60">{project.year}</span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-primary text-sm font-bold uppercase tracking-widest">
            {project.category}
          </span>
          <div className="flex-1 h-px bg-cream/20" />
        </div>
        
        <h3 className={`font-display text-cream mb-3 ${isLarge ? "text-5xl md:text-7xl" : "text-4xl md:text-5xl"}`}>
          {project.title}
        </h3>
        
        <p className="text-cream/70 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
          {project.description}
        </p>
      </div>

      {/* Arrow */}
      <motion.div
        className="absolute top-6 right-6 w-14 h-14 border-2 border-primary bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
      >
        <ArrowUpRight className="w-6 h-6 text-primary-foreground" />
      </motion.div>
    </motion.div>
  );
};

const WorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="section-padding px-6 md:px-12 lg:px-20 bg-card/50 noise-bg">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-[3px] bg-primary" />
            <p className="text-sm font-bold uppercase tracking-[0.4em] text-primary">
              Selected Work
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-display-lg text-foreground">
              OUR <span className="text-gradient-gold">PROJECTS</span>
            </h2>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-foreground font-bold uppercase tracking-widest text-sm group"
            >
              <span className="link-underline">View All Projects</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
