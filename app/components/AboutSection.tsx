"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaAws, FaDocker, FaGitAlt, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiMongodb, SiPostgresql, SiPrisma, SiTailwindcss, SiGraphql, SiFirebase } from "react-icons/si";

const values = [
  { title: "Audacieux", description: "Nous repoussons les limites et défions les conventions" },
  { title: "Authentique", description: "Nous restons fidèles à la voix unique de chaque marque" },
  { title: "Précis", description: "Chaque pixel, chaque détail compte pour nous" },
  { title: "Humain", description: "Nous concevons pour de vraies personnes, pas des métriques" },
];
const technologies = [
  { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
  { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
  { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
  { name: "Prisma", icon: <SiPrisma className="text-[#2D3748] dark:text-white" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
  { name: "GraphQL", icon: <SiGraphql className="text-[#E10098]" /> },
  { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
  { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
  { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
];
const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding px-6 md:px-12 lg:px-20 overflow-hidden noise-bg">
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
              À Propos
            </p>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left - Big Statement */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-display-lg text-foreground mb-8">
              NOUS SOMMES <span className="text-gradient-gold">MOOBLABS</span>
            </h2>
            
            <div className="space-y-6 text-xl leading-relaxed text-muted-foreground">
              <p>
                Nous sommes une équipe de <span className="text-foreground font-semibold">designers</span>, 
                <span className="text-foreground font-semibold"> développeurs</span>, et 
                <span className="text-foreground font-semibold"> stratèges</span> qui croient 
                que le bon design a le pouvoir de transformer les entreprises.
              </p>
              <p>
                Fondés avec une passion pour la <span className="text-serif text-primary">créativité audacieuse</span>, 
                nous combinons art et technologie pour livrer des solutions qui ne sont pas seulement superbes—elles 
                génèrent des résultats réels et mesurables.
              </p>
            </div>

            {/* Large Statement */}
            <motion.div
              className="mt-16 relative"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary" />
              <blockquote className="pl-8 text-3xl md:text-4xl font-display text-foreground leading-tight">
                "NOUS NE CRÉONS PAS JUSTE DES SITES WEB.
                <br />
                <span className="text-gradient-gold">NOUS FAÇONNONS DES EXPÉRIENCES</span> QUI LAISSENT UNE IMPRESSION DURABLE."
              </blockquote>
            </motion.div>
          </motion.div>

          {/* Right - Values & Stats */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Values */}
            <div className="mb-12">
              <h3 className="text-xl font-bold uppercase tracking-widest text-foreground mb-8">
                Nos Valeurs
              </h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    className="border-2 border-foreground/10 p-6 hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-4xl font-display text-primary">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <div>
                        <h4 className="text-2xl font-display uppercase text-foreground group-hover:text-primary transition-colors">
                          {value.title}
                        </h4>
                        <p className="text-muted-foreground mt-1">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mini Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "50+", label: "Projets Livrés" },
                { value: "8+", label: "Années d'Expérience" },
                { value: "30+", label: "Clients Heureux" },
                { value: "15", label: "Membres de l'Équipe" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="p-6 border-2 border-foreground/10 text-center hover:border-primary transition-colors"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                >
                  <span className="block text-4xl font-display text-gradient-gold">
                    {stat.value}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-28 -mx-6 md:-mx-12 lg:-mx-20 overflow-hidden border-y border-foreground/10 py-8">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-14 px-14">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center gap-3">
                    <div className="text-5xl sm:text-6xl">
                      {tech.icon}
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-muted-foreground">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default AboutSection;
