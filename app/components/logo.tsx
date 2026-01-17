import { motion } from "framer-motion";
import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
}

const Logo = ({ size = "md", animated = true }: LogoProps) => {
  const sizes = {
    sm: "text-3xl",
    md: "text-5xl",
    lg: "text-7xl",
    xl: "text-9xl",
  };

  const Component = animated ? motion.span : "span";

  return (
    <Component
      className={`logo-m ${sizes[size]} select-none`}
      {...(animated && {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.5, ease: "easeOut" },
        whileHover: { scale: 1.05, rotate: -2 },
      })}
    >
      <Image src="/icone-moovlabs.png" alt="Logo" width={40} height={40} />
    </Component>
  );
};

export default Logo;
