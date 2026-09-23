import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/src/lib/cn";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
  className?: string;
}

const Logo = ({ size = "md", animated = true, className }: LogoProps) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
    xl: "w-20 h-20",
  };

  const Component = animated ? motion.span : "span";

  return (
    <Component
      className={cn("relative flex-shrink-0 select-none", sizes[size], className)}
      {...(animated && {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.5, ease: "easeOut" },
        whileHover: { scale: 1.05, rotate: -2 },
      })}
    >
      <Image src="/icon-moovlabs.png" alt="Moovlabs Logo" fill className="object-contain" />
    </Component>
  );
};

export default Logo;
