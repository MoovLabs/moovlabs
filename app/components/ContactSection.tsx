"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, ArrowRight, CheckCircle, Twitter, Linkedin, Instagram, Dribbble } from "lucide-react";
import { FaFacebook, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.project || !formData.message.trim()) {
      return;
    }
    
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", project: "", message: "" });
      setIsSubmitting(false);
      
      // Reset after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

 const socialLinks = [
   { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/.../", color: "text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]" },
   { icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/261375014626", color: "text-[#17DB55] hover:bg-[#17DB55]/10 hover:border-[#0AC25A]" },
   { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/...", color: "text-[#DD2A7B] hover:bg-gradient-to-tr hover:from-[#F58529]/10 hover:via-[#DD2A7B]/10 hover:to-[#8134AF]/10 hover:border-[#DD2A7B]" },
   { icon: FaFacebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61586093841906", color: "text-[#1877F2] hover:bg-[#1877F2]/10 hover:border-[#1877F2]" },
   { icon: FaGithub, label: "Github", href: "https://github.com/MoovLabs", color: "text-foreground hover:bg-foreground/10 hover:border-foreground" },
 ];

  return (
    <section id="contact" className="section-padding px-4 sm:px-6 md:px-12 lg:px-20 bg-card/50 noise-bg">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-12 sm:w-16 h-[3px] bg-primary" />
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-primary">
              Contactez-nous
            </p>
            <div className="w-12 sm:w-16 h-[3px] bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-black text-foreground mb-4 sm:mb-6">
            CRÉONS <span className="text-gradient-gold">ENSEMBLE</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Vous avez un projet en tête ? Nous adorerions en entendre parler. 
            Écrivez-nous et construisons quelque chose d'<span className="text-serif text-primary">extraordinaire</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 space-y-6 sm:space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-3 sm:space-y-4">
              {[
                { icon: Mail, label: "Email", value: "contact@mooblabs.com", href: "mailto:contact@mooblabs.com" },
                { icon: Phone, label: "Téléphone", value: "+261 37 50 146 26", href: "tel:+261375014626" },
                { icon: MapPin, label: "Adresse", value: "Antananarivo, Madagascar", href: null },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="group"
                >
                  {item.href ? (
                    <a href={item.href} className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 border-2 border-foreground/10 rounded-xl hover:border-primary/40 bg-gradient-to-br from-background to-card/30 hover:from-primary/5 hover:to-primary/10 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 border-2 border-foreground/10 rounded-xl flex items-center justify-center group-hover:border-primary/40 group-hover:bg-gradient-to-br group-hover:from-primary/10 group-hover:to-primary/20 transition-all flex-shrink-0">
                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                          {item.label}
                        </p>
                        <p className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 border-2 border-foreground/10 rounded-xl bg-gradient-to-br from-background to-card/30">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 border-2 border-foreground/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                          {item.label}
                        </p>
                        <p className="text-base sm:text-lg font-semibold text-foreground">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="pt-6 sm:pt-8"
            >
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3 sm:mb-4">
                Suivez-nous
              </p>
              <div className="flex flex-wrap gap-3">
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
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-7"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 sm:py-16 border-2 border-primary/30 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent backdrop-blur-sm"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 mb-6 shadow-lg shadow-primary/20">
                  <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">Message envoyé !</h3>
                <p className="text-muted-foreground text-sm sm:text-base">Nous vous répondrons dans les plus brefs délais.</p>
              </motion.div>
            ) : (
              <div className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-bold uppercase tracking-widest text-foreground/80 mb-2 sm:mb-3">
                      Votre Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-background/50 border-2 border-foreground/10 rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/10 focus:bg-background transition-all text-foreground placeholder:text-muted-foreground text-sm sm:text-base backdrop-blur-sm"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-bold uppercase tracking-widest text-foreground/80 mb-2 sm:mb-3">
                      Adresse Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-background border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground text-sm sm:text-base"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="project" className="block text-xs sm:text-sm font-bold uppercase tracking-widest text-foreground/80 mb-2 sm:mb-3">
                    Type de Projet
                  </label>
                  <select
                    id="project"
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-background border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground text-sm sm:text-base"
                  >
                    <option value="">Sélectionnez un type de projet</option>
                    <option value="branding">Identité de Marque</option>
                    <option value="web">Développement Web</option>
                    <option value="app">Application Mobile</option>
                    <option value="marketing">Marketing Digital</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-bold uppercase tracking-widest text-foreground/80 mb-2 sm:mb-3">
                    Votre Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-background border-2 border-foreground/20 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none text-foreground placeholder:text-muted-foreground text-sm sm:text-base"
                    placeholder="Parlez-nous de votre projet..."
                  />
                </div>

                <motion.button
                  onClick={handleSubmit}
                  disabled={isSubmitting || !formData.name.trim() || !formData.email.trim() || !formData.project || !formData.message.trim()}
                  className="w-full group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-primary/90 text-background font-bold uppercase tracking-wider text-sm rounded-xl inline-flex items-center justify-center gap-3 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none cursor-pointer"
                  whileHover={!isSubmitting && formData.name.trim() && formData.email.trim() && formData.project && formData.message.trim() ? { y: -2, scale: 1.01 } : {}}
                  whileTap={!isSubmitting && formData.name.trim() && formData.email.trim() && formData.project && formData.message.trim() ? { scale: 0.98 } : {}}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin"></div>
                      <span className="relative z-10">Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <span className="relative z-10">Envoyer le Message</span>
                      <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;