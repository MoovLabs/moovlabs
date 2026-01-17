"use client";


import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Megaphone, Smartphone, Globe, Zap } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Identité de Marque",
    description: "Logos, systèmes visuels et chartes graphiques qui capturent votre essence et résonnent avec votre audience.",
    number: "01",
  },
  {
    icon: Code,
    title: "Développement Web",
    description: "Sites web sur mesure construits avec des technologies modernes pour une performance ultra-rapide et une expérience utilisateur exceptionnelle.",
    number: "02",
  },
  {
    icon: Megaphone,
    title: "Marketing Digital",
    description: "Campagnes stratégiques qui amplifient votre message et vous connectent avec vos clients idéaux.",
    number: "03",
  },
  {
    icon: Smartphone,
    title: "Applications Mobiles",
    description: "Applications natives et multiplateformes conçues pour des expériences mobiles fluides.",
    number: "04",
  },
  {
    icon: Globe,
    title: "Design UI/UX",
    description: "Interfaces centrées sur l'utilisateur qui privilégient l'ergonomie tout en ravissant vos clients.",
    number: "05",
  },
  {
    icon: Zap,
    title: "Stratégie",
    description: "Stratégies basées sur les données qui alignent votre présence digitale avec vos objectifs commerciaux.",
    number: "06",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative card-retro p-8 md:p-10"
    >
      {/* Number - Large background */}
      <span className="absolute top-4 right-4 text-[8rem] font-display text-foreground/[0.03] leading-none group-hover:text-primary/10 transition-colors duration-500">
        {service.number}
      </span>

      {/* Icon with retro styling */}
      <div className="relative mb-8">
        <div className="w-16 h-16 border-2 border-foreground/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
          <service.icon className="w-7 h-7 text-foreground group-hover:text-primary transition-colors" />
        </div>
        <div className="absolute -bottom-2 -right-2 w-16 h-16 border-2 border-primary/30 -z-10" />
      </div>

      {/* Number Label */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">
          {service.number}
        </span>
        <div className="flex-1 h-px bg-foreground/10" />
      </div>

      {/* Content */}
      <h3 className="text-3xl md:text-4xl font-display uppercase tracking-wide mb-4 text-foreground group-hover:text-primary transition-colors">
        {service.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {service.description}
      </p>

      {/* Hover Arrow */}
      <motion.div
        className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <span className="text-primary font-bold text-sm uppercase tracking-widest">
          En savoir plus
        </span>
        <span className="text-primary">→</span>
      </motion.div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding px-6 md:px-12 lg:px-20 noise-bg">
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
              Ce que nous faisons
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-display-lg text-foreground">
              NOS <span className="text-gradient-gold">SERVICES</span>
            </h2>
            <p className="max-w-md text-muted-foreground text-lg">
              Du concept au lancement, nous fournissons des solutions complètes qui transforment les idées en expériences digitales
              <span className="text-serif text-primary"> remarquables</span>.
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
