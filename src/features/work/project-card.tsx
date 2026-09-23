"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "framer-motion";
import { useRef } from "react";

import type { Project, Locale } from "@/src/types";

interface ProjectCardProps {
  project: Project;
  locale: Locale;
  index: number;
}

export function ProjectCard({ project, locale, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Make the first and fourth items span two columns on large screens
  const isLarge = index === 0 || index === 3;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 * index, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden bg-card border border-border hover:border-primary transition-all duration-500 ${
        isLarge ? "md:col-span-2" : ""
      }`}
    >
      <Link href={`/${locale}/work/${project.slug}`} className="block w-full h-full">
        {/* Image Container */}
        <div className={`relative overflow-hidden ${isLarge ? "aspect-[16/9]" : "aspect-[4/3] md:aspect-[3/4]"}`}>
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-all duration-700"
              sizes={isLarge ? "(max-width: 768px) 100vw, 100vw" : "(max-width: 768px) 100vw, 50vw"}
              priority={index <= 1}
            />
          </motion.div>
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />

        {/* Top Meta Label */}
        <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start">
          <div className="flex gap-2 flex-wrap">
            {project.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary border border-primary/30 bg-background/50 backdrop-blur-md"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-xs font-bold font-sans text-muted-foreground bg-background/80 px-3 py-1 backdrop-blur-md border border-border">
            {project.year}
          </span>
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-primary text-xs font-bold uppercase tracking-widest">
              {project.category[locale]}
            </span>
            <div className="flex-1 h-px bg-border/50" />
          </div>
          
          <h3 className={`font-display text-foreground mb-4 ${isLarge ? "text-5xl md:text-7xl" : "text-4xl md:text-5xl"}`}>
            {project.title}
          </h3>
          
          <p className="text-muted-foreground max-w-md opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 line-clamp-2">
            {project.description[locale]}
          </p>
        </div>

        {/* Hover Arrow Icon */}
        <div className="absolute top-6 right-6 w-12 h-12 border border-primary bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
          <ArrowUpRight className="w-6 h-6 text-primary-foreground" />
        </div>
      </Link>
    </motion.div>
  );
}
