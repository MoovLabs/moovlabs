"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./themeToggle";
import Logo from "./logo";

const navItems = [
  { label: "Accueil", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projets", href: "#work" },
  { label: "À propos", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // par défaut home

  // Détection scroll pour changer le style du header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Détection section active
  useEffect(() => {
    const handleSection = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "home"; // par défaut si aucune section visible
      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top <= window.innerHeight / 2) current = section.id;
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleSection);
    handleSection(); // update au chargement
    return () => window.removeEventListener("scroll", handleSection);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-12 lg:px-20 py-3 sm:py-4 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-foreground/10" : ""
      }`}
    >
      <nav className="flex items-center justify-between max-w-[1600px] mx-auto">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
          <Logo size="md" />
          <span className="font-display text-lg sm:text-xl tracking-wide hidden sm:block transition-colors group-hover:text-primary">
            MOOVLABS
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          {navItems.map((item, index) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;

            return (
              <motion.a
                key={item.label}
                href={item.href}
                className={`relative text-[13px] font-semibold uppercase tracking-[0.15em] transition-colors group py-2 ${
                  isActive ? "text-primary" : "text-foreground hover:text-primary"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </motion.a>
            );
          })}
          <div className="w-px h-5 bg-foreground/10" />
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-2 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100" />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 sm:gap-4 lg:hidden">
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-2 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100" />
            <ThemeToggle />
          </div>
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground border-2 border-foreground/20 hover:border-primary transition-colors rounded"
            whileTap={{ scale: 0.95 }}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="lg:hidden overflow-hidden bg-background"
      >
        <div className="flex flex-col gap-1 pt-4 sm:pt-6 pb-3 sm:pb-4">
          {navItems.map((item, index) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;

            return (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`relative group text-xl sm:text-2xl md:text-3xl font-display uppercase tracking-wide transition-colors py-3 sm:py-4 border-b border-foreground/10 ${
                  isActive ? "text-primary" : "text-foreground hover:text-primary"
                }`}
                initial={{ x: -20, opacity: 0 }}
                animate={isOpen ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <span className="relative">
                  {item.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-[3px] bg-primary transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </span>
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navigation;