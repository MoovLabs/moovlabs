"use client";
import { motion, useInView } from "framer-motion"
import { useRef } from "react";

export const MarqueeSection = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-32 -mx-6 md:-mx-12 lg:-mx-20 overflow-hidden border-y-2 border-foreground/10 py-8"
        >
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-display text-[10rem] md:text-[14rem] text-foreground/[0.03] px-8">
                MOOBLABS • AGENCE DIGITALE • STUDIO CRÉATIF • DESIGN AUDACIEUX •
              </span>
            ))}
          </div>
        </motion.div>
    )
}