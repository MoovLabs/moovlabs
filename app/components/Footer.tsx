import { motion } from "framer-motion";
import Logo from "./logo";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 md:px-12 lg:px-20 border-t-2 border-foreground/10 noise-bg">
      <div className="max-w-[1600px] mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Logo size="lg" animated={false} />
              <span className="font-display text-3xl tracking-wide">MOOBLABS</span>
            </div>
            <p className="text-muted-foreground text-lg max-w-md mb-8">
              We craft bold digital experiences that transform brands and drive results.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 btn-brutalist"
            >
              Start a Project
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-xl uppercase tracking-widest mb-6 text-foreground">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {["Home", "Services", "Work", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-xl uppercase tracking-widest mb-6 text-foreground">
              Connect
            </h4>
            <nav className="flex flex-col gap-3">
              {["Twitter", "LinkedIn", "Instagram", "Dribbble", "Behance"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium inline-flex items-center gap-2"
                >
                  {item}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-foreground/10 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mooblabs. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
