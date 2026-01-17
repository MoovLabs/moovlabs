"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-20 pt-20 sm:pt-28 overflow-hidden noise-bg retro-grid">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large decorative circle */}
        <motion.div
          className="absolute -top-20 -right-40 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full border-2 border-primary/20"
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <motion.div
          className="absolute -top-10 -right-30 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full border border-primary/10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, delay: 0.2 }}
        />
        
        {/* Floating squares */}
        <motion.div
          className="absolute top-40 right-20 w-12 sm:w-16 h-12 sm:h-16 border-2 border-primary bg-primary/10"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 left-10 sm:left-20 w-8 sm:w-10 h-8 sm:h-10 bg-primary"
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
          className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="w-12 sm:w-16 h-[3px] bg-primary" />
          <p className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-primary">
            Agence Créative Digitale
          </p>
        </motion.div>

        {/* Main Headline - Responsive sizes */}
        <div className="overflow-hidden">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black text-foreground flex items-baseline gap-4"
            initial={{ y: 150 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            CRÉONS
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black"
            initial={{ y: 150 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-stroke">L'IMPACT</span>
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black"
            initial={{ y: 150 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-gradient-gold">DIGITAL</span>
            <span className="text-primary">.</span>
          </motion.h1>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-end">
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Nous sommes un <span className="text-foreground font-semibold">studio créatif</span> spécialisé dans 
              l'identité de marque, le web design et les produits digitaux qui marquent les 
              <span className="text-serif text-primary"> esprits</span>.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row flex-wrap gap-4 md:justify-end"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.a 
              href="#work" 
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-primary text-background font-bold uppercase tracking-wider text-sm rounded-lg inline-flex items-center justify-center gap-3 overflow-hidden transition-all duration-300 hover:shadow-xl"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Voir nos projets</span>
              <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a 
              href="#contact" 
              className="group relative px-6 sm:px-8 py-3 sm:py-4 border-2 border-foreground text-foreground font-bold uppercase tracking-wider text-sm rounded-lg inline-flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Discutons</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          className="mt-16 sm:mt-20 pt-6 sm:pt-8 border-t-2 border-foreground/10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
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
              <span className="block text-3xl sm:text-4xl md:text-5xl font-display text-primary">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#work"
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground">Défiler</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="transition-colors group-hover:text-primary"
        >
          <ArrowDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;