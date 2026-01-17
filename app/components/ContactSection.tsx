"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact" className="section-padding px-6 md:px-12 lg:px-20 bg-card/50 noise-bg">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-[3px] bg-primary" />
            <p className="text-sm font-bold uppercase tracking-[0.4em] text-primary">
              Get In Touch
            </p>
            <div className="w-16 h-[3px] bg-primary" />
          </div>
          <h2 className="text-display-lg text-foreground mb-6">
            LET'S <span className="text-gradient-gold">CREATE</span> TOGETHER
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it. 
            Drop us a line and let's build something <span className="text-serif text-primary">extraordinary</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: "hello@mooblabs.com", href: "mailto:hello@mooblabs.com" },
                { icon: Phone, label: "Phone", value: "+1 (234) 567-890", href: "tel:+1234567890" },
                { icon: MapPin, label: "Location", value: "Paris, France", href: null },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="group"
                >
                  {item.href ? (
                    <a href={item.href} className="flex items-center gap-6 p-6 border-2 border-foreground/10 hover:border-primary transition-all duration-300 group-hover:shadow-[4px_4px_0_hsl(var(--primary))] group-hover:translate-x-[-2px] group-hover:translate-y-[-2px]">
                      <div className="w-14 h-14 border-2 border-foreground/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                        <item.icon className="w-6 h-6 text-foreground/60 group-hover:text-primary transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                          {item.label}
                        </p>
                        <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-6 p-6 border-2 border-foreground/10">
                      <div className="w-14 h-14 border-2 border-foreground/20 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-foreground/60" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                          {item.label}
                        </p>
                        <p className="text-lg font-semibold text-foreground">
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
              className="pt-8"
            >
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
                Follow Us
              </p>
              <div className="flex flex-wrap gap-3">
                {["Twitter", "LinkedIn", "Instagram", "Dribbble"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="px-5 py-3 border-2 border-foreground/20 text-sm font-bold uppercase tracking-wider text-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="lg:col-span-7 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold uppercase tracking-widest text-foreground/80 mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 bg-background border-2 border-foreground/20 focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest text-foreground/80 mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-4 bg-background border-2 border-foreground/20 focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="project" className="block text-sm font-bold uppercase tracking-widest text-foreground/80 mb-3">
                Project Type
              </label>
              <select
                id="project"
                value={formData.project}
                onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                className="w-full px-6 py-4 bg-background border-2 border-foreground/20 focus:outline-none focus:border-primary transition-colors text-foreground"
                required
              >
                <option value="">Select a project type</option>
                <option value="branding">Brand Identity</option>
                <option value="web">Web Development</option>
                <option value="app">Mobile App</option>
                <option value="marketing">Digital Marketing</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold uppercase tracking-widest text-foreground/80 mb-3">
                Your Message
              </label>
              <textarea
                id="message"
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-6 py-4 bg-background border-2 border-foreground/20 focus:outline-none focus:border-primary transition-colors resize-none text-foreground placeholder:text-muted-foreground"
                placeholder="Tell us about your project..."
                required
              />
            </div>

            <motion.button
              type="submit"
              className="w-full btn-brutalist inline-flex items-center justify-center gap-3"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              Send Message
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
