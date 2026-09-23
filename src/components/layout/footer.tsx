import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/src/lib/cn";
import type { Locale } from "@/src/types";
import { navigationData } from "@/src/data/navigation";
import { SITE_CONFIG } from "@/src/lib/constants";

import Logo from "../shared/logo";
import { Button } from "../ui/button";

interface FooterProps {
  locale: Locale;
  dict: any;
}

export function Footer({ locale, dict }: FooterProps) {
  return (
    <footer className="py-16 px-5 sm:px-8 md:px-12 lg:px-16 border-t border-border noise-bg">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href={`/${locale}`} className="flex items-center gap-3 mb-6 group inline-flex">
              <Logo size="lg" animated={false} />
              <span className="font-display text-4xl tracking-wide group-hover:text-primary transition-colors">
                MOOVLABS
              </span>
            </Link>
            <p className="text-muted-foreground text-lg max-w-md mb-8 leading-relaxed">
              {dict.footer.tagline}
            </p>
            <Button variant="default" asChild>
              <Link href={`/${locale}/contact`}>
                {dict.footer.startProject}
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-xl uppercase tracking-widest mb-6 text-foreground">
              {dict.footer.navigation}
            </h4>
            <nav className="flex flex-col gap-4">
              {navigationData.footer.map((item) => (
                <Link
                  key={item.href}
                  href={`/${locale}${item.href}`}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium inline-block w-fit"
                >
                  {item.label[locale]}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-xl uppercase tracking-widest mb-6 text-foreground">
              {dict.footer.social}
            </h4>
            <nav className="flex flex-col gap-4">
              {navigationData.socials.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors font-medium inline-flex items-center gap-2 group w-fit"
                >
                  {item.name}
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="h-px bg-border mb-8 relative z-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. {dict.footer.rights}
          </p>
          <div className="flex gap-6">
            <Link href={`/${locale}/privacy`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {dict.footer.privacy}
            </Link>
            <Link href={`/${locale}/terms`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {dict.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
