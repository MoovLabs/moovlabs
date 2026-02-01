"use client";


import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-28 overflow-hidden noise-bg retro-grid" id="home">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large decorative circle */}
        <motion.div
          className="absolute -top-20 -right-40 w-[600px] h-[600px] rounded-full border-2 border-primary/20"
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <motion.div
          className="absolute -top-10 -right-30 w-[500px] h-[500px] rounded-full border border-primary/10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, delay: 0.2 }}
        />
        
        {/* Floating squares */}
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 border-2 border-primary bg-primary/10"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-10 h-10 bg-primary"
          animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-6 h-6 border-2 border-foreground/20"
          animate={{ rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-[1600px] mx-auto w-full relative z-10">
        {/* Tagline */}
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="w-16 h-[3px] bg-primary" />
          <p className="text-sm md:text-base font-bold uppercase tracking-[0.4em] text-primary">
            Agence Créative Digitale
          </p>
        </motion.div>

        {/* Main Headline - Larger and more dramatic */}
        <div className="overflow-hidden">
          <motion.h1
            className="text-display-xl text-foreground flex items-baseline gap-4"
            initial={{ y: 150 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            CRÉONS
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            className="text-display-xl"
            initial={{ y: 150 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-stroke">L'IMPACT</span>
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            className="text-display-xl"
            initial={{ y: 150 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-gradient-gold">DIGITAL</span>
            <span className="text-primary">.</span>
          </motion.h1>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Nous sommes un <span className="text-foreground font-semibold">studio créatif</span> spécialisé dans 
              l'identité de marque, le web design et les produits digitaux qui marquent les 
              <span className="text-serif text-primary"> esprits</span>.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 md:justify-end"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <a href="#work" className="btn-brutalist inline-flex items-center gap-3">
              Voir nos projets
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#contact" className="btn-outline-brutalist">
              Discutons
            </a>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          className="mt-20 pt-8 border-t-2 border-foreground/10 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          {[
            { value: "50+", label: "Projets" },
            { value: "8", label: "Années" },
            { value: "30+", label: "Clients" },
            { value: "100%", label: "Passion" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center md:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 + index * 0.1 }}
            >
              <span className="block text-4xl md:text-5xl font-display text-primary">
                {stat.value}
              </span>
              <span className="text-sm uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground">Défiler</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
