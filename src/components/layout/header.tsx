"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import { cn } from "@/src/lib/cn";
import type { Locale } from "@/src/types";
import { navigationData } from "@/src/data/navigation";

import Logo from "../shared/logo";
import { LanguageSwitcher } from "../ui/language-switcher";
import { Button } from "../ui/button";

interface HeaderProps {
  locale: Locale;
  dict: any;
}

export function Header({ locale, dict }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border py-4" : "py-6"
      )}
    >
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-3 group z-50 relative" onClick={closeMenu}>
          <Logo size="md" />
          <span className="font-display text-2xl tracking-wider hidden sm:block transition-colors group-hover:text-primary">
            MOOVLABS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigationData.main.map((item) => {
            const isActive = pathname === `/${locale}${item.href}`;
            return (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                className={cn(
                  "text-sm font-semibold uppercase tracking-[0.15em] transition-colors hover:text-primary py-2 link-underline",
                  isActive ? "text-primary" : "text-foreground"
                )}
              >
                {item.label[locale]}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <LanguageSwitcher currentLocale={locale} />
          <div className="w-px h-5 bg-border" />
          <Button variant="default" size="sm" asChild>
            <Link href={`/${locale}/#contact`}>{dict.nav.startProject}</Link>
          </Button>
        </div>

        {/* Mobile Toggle & Actions */}
        <div className="flex items-center gap-4 lg:hidden z-50 relative">
          <LanguageSwitcher currentLocale={locale} />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 -mr-2 text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
        }}
        className="fixed inset-0 bg-background z-40 lg:hidden flex flex-col pt-24 px-5 pb-8 overflow-y-auto"
      >
        <nav className="flex flex-col gap-6 mt-8">
          {navigationData.main.map((item, i) => {
            const isActive = pathname === `/${locale}${item.href}`;
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: isOpen ? i * 0.1 : 0 }}
              >
                <Link
                  href={`/${locale}${item.href}`}
                  onClick={closeMenu}
                  className={cn(
                    "text-4xl font-display uppercase tracking-wide block transition-colors border-b border-border pb-4",
                    isActive ? "text-primary" : "text-foreground hover:text-primary"
                  )}
                >
                  {item.label[locale]}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: isOpen ? 0.5 : 0 }}
          className="mt-auto pt-10"
        >
          <Button variant="default" className="w-full mb-8" asChild onClick={closeMenu}>
            <Link href={`/${locale}/#contact`}>{dict.nav.startProject}</Link>
          </Button>

          <div className="flex gap-6 justify-center">
            {navigationData.socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
}
