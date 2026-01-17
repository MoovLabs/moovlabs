"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  { title: "Bold", description: "We push boundaries and challenge conventions" },
  { title: "Authentic", description: "We stay true to each brand's unique voice" },
  { title: "Precise", description: "Every pixel, every detail matters to us" },
  { title: "Human", description: "We design for real people, not metrics" },
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
              About Us
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
              WE ARE <span className="text-gradient-gold">MOOBLABS</span>
            </h2>
            
            <div className="space-y-6 text-xl leading-relaxed text-muted-foreground">
              <p>
                We're a team of <span className="text-foreground font-semibold">designers</span>, 
                <span className="text-foreground font-semibold"> developers</span>, and 
                <span className="text-foreground font-semibold"> strategists</span> who believe 
                that great design has the power to transform businesses.
              </p>
              <p>
                Founded with a passion for <span className="text-serif text-primary">bold creativity</span>, 
                we combine artistry with technology to deliver solutions that don't just look stunning—they 
                drive real, measurable results.
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
                "WE DON'T JUST CREATE WEBSITES.
                <br />
                <span className="text-gradient-gold">WE CRAFT EXPERIENCES</span> THAT LEAVE A LASTING IMPRESSION."
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
                Our Values
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
                { value: "50+", label: "Projects Delivered" },
                { value: "8+", label: "Years Experience" },
                { value: "30+", label: "Happy Clients" },
                { value: "15", label: "Team Members" },
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

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-32 -mx-6 md:-mx-12 lg:-mx-20 overflow-hidden border-y-2 border-foreground/10 py-8"
        >
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-display text-[10rem] md:text-[14rem] text-foreground/[0.03] px-8">
                MOOBLABS • DIGITAL AGENCY • CREATIVE STUDIO • BOLD DESIGN •
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
