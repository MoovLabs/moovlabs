import { motion } from "framer-motion";
import Logo from "./logo";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
export const reseaux = [
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61586093841906" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/moovlabs-studio/" },
  { name: "Instagram", href: "https://www.instagram.com/moovlabs_studio/" },
  { name: "Dribbble", href: "https://dribbble.com/moovlabs" },
]

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
              Nous créons des expériences digitales audacieuses qui transforment les marques et génèrent des résultats.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 btn-brutalist"
            >
              Démarrer un Projet
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-xl uppercase tracking-widest mb-6 text-foreground">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
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
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-xl uppercase tracking-widest mb-6 text-foreground">
              Réseaux
            </h4>
            <nav className="flex flex-col gap-3">
              {reseaux.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium inline-flex items-center gap-2"
                >
                  {item.name}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-foreground/10 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mooblabs. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Politique de Confidentialité
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Conditions d'Utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
