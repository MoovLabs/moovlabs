"use client"

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./themeToggle";
import Logo from "./logo";


const navItems = [
  { label: "Services", href: "#services" },
  { label: "Projets", href: "#work" },
  { label: "À propos", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 lg:px-20 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-foreground/10" : ""
      }`}
    >
      <nav className="flex items-center justify-between max-w-[1600px] mx-auto">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <Logo size="md" />
          <span className="font-display text-2xl tracking-wide hidden sm:block group-hover:text-primary transition-colors">
            MOOBLABS
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="relative text-sm font-bold uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          <div className="w-px h-6 bg-foreground/20" />
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground border-2 border-foreground/20 hover:border-primary transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-background"
      >
        <div className="flex flex-col gap-2 pt-6 pb-4">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-4xl font-display uppercase tracking-wide text-foreground/80 hover:text-primary transition-colors py-2 border-b border-foreground/10"
              initial={{ x: -20, opacity: 0 }}
              animate={isOpen ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navigation;
