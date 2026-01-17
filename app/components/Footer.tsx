"use client"

import { motion } from "framer-motion";
import Logo from "./logo";
import { ArrowUpRight, MapPin, Phone, Mail, Send, Twitter, Linkedin, Instagram, Github } from "lucide-react";
import { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.trim()) {
      console.log("Subscribe:", email);
      setEmail("");
    }
  };

  const socialLinks = [
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/.../", color: "text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]" },
  { icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/261375014626", color: "text-[#17DB55] hover:bg-[#17DB55]/10 hover:border-[#0AC25A]" },
  { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/...", color: "text-[#DD2A7B] hover:bg-gradient-to-tr hover:from-[#F58529]/10 hover:via-[#DD2A7B]/10 hover:to-[#8134AF]/10 hover:border-[#DD2A7B]" },
  { icon: FaFacebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61586093841906", color: "text-[#1877F2] hover:bg-[#1877F2]/10 hover:border-[#1877F2]" },
  { icon: FaGithub, label: "Github", href: "https://github.com/MoovLabs", color: "text-foreground hover:bg-foreground/10 hover:border-foreground" },
];


  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-20 border-t-2 border-foreground/10 bg-card/30 noise-bg">
      <div className="max-w-[1600px] mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4 sm:mb-6 group cursor-pointer">
              <Logo size="md" animated={false} />
              <span className="font-display text-xl sm:text-2xl tracking-wide group-hover:text-primary transition-colors">MOOVLABS</span>
            </div>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
              Créez l'avenir avec nous. Innovation, créativité et excellence au service de vos projets digitaux.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-primary text-background font-bold uppercase tracking-wider text-xs sm:text-sm rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Démarrer un Projet
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-base sm:text-lg uppercase tracking-widest mb-4 sm:mb-6 text-primary">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2 sm:gap-3">
              {[
                { name: "Accueil", href: "#" },
                { name: "Services", href: "#services" },
                { name: "Projets", href: "#work" },
                { name: "À propos", href: "#about" },
                { name: "Contact", href: "#contact" }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm sm:text-base"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-base sm:text-lg uppercase tracking-widest mb-4 sm:mb-6 text-primary">
              Contact
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-1 shrink-0 text-primary" />
                <span className="text-sm sm:text-base">Antananarivo, Madagascar</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-primary" />
                <span className="text-sm sm:text-base">+261 37 50 146 26</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-primary" />
                <span className="text-sm sm:text-base">contact@moovlabs.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-base sm:text-lg uppercase tracking-widest mb-4 sm:mb-6 text-primary">
              Newsletter
            </h4>
            <p className="text-muted-foreground text-sm sm:text-base mb-4">
              Restez informé de nos dernières actualités et projets.
            </p>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 pr-10 sm:pr-12 rounded-lg bg-background/50 border-2 border-foreground/10 text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all text-sm sm:text-base"
              />
              <button 
                onClick={handleSubscribe}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 p-1.5 sm:p-2 rounded-md transition-all duration-300 hover:scale-110"
              >
                <Send className="w-3 h-3 sm:w-4 sm:h-4 text-background" />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-foreground/10 mb-6 sm:mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Social Links */}
          <div className="flex items-center gap-3 sm:gap-4 order-2 md:order-1">
              <span className="text-muted-foreground text-xs sm:text-sm mr-1 sm:mr-2">Suivez-nous:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    p-2 rounded-lg border-2 border-foreground/10 
                    flex items-center justify-center 
                    transition-all duration-300 
                    hover:scale-110 hover:shadow-md
                    ${social.color}
                  `}
                  aria-label={social.label}
                >
                  <social.icon 
                    className={`
                      w-4 h-4 sm:w-5 sm:h-5 transition-colors
                      text-current
                    `} 
                  />
                </a>
              ))}
            </div>
          {/* Copyright & Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 order-1 md:order-2">
            <p className="text-xs sm:text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} <span className="text-primary font-semibold">MoovLabs Studio</span>. Tous droits réservés.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                Confidentialité
              </a>
              <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                Mentions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;