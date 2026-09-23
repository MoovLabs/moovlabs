"use client";

import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/src/lib/cn";
import type { Locale } from "@/src/types";

interface LanguageSwitcherProps {
  currentLocale: Locale;
  className?: string;
}

export function LanguageSwitcher({ currentLocale, className }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (localeToSwitchTo: Locale) => {
    if (!pathname) return;
    if (localeToSwitchTo === currentLocale) return;
    
    // We only want to replace the first occurrence of the locale segment,
    // usually it's at the beginning of the path e.g. /fr/about or just /fr
    let newPath = pathname;
    if (pathname.startsWith(`/${currentLocale}/`)) {
      newPath = pathname.replace(`/${currentLocale}/`, `/${localeToSwitchTo}/`);
    } else if (pathname === `/${currentLocale}`) {
      newPath = `/${localeToSwitchTo}`;
    } else if (!pathname.startsWith(`/${currentLocale}`)) {
        newPath = `/${localeToSwitchTo}${pathname.startsWith('/') ? pathname : `/${pathname}`}`
    }

    router.push(newPath);
  };

  return (
    <div className={cn("flex items-center gap-1 text-sm font-semibold uppercase tracking-wider", className)}>
      <button
        onClick={() => switchLocale("fr")}
        className={cn(
          "transition-colors duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1",
          currentLocale === "fr" ? "text-primary" : "text-muted-foreground"
        )}
      >
        FR
      </button>
      <span className="text-muted-foreground/40 mx-1">/</span>
      <button
        onClick={() => switchLocale("en")}
        className={cn(
          "transition-colors duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1",
          currentLocale === "en" ? "text-primary" : "text-muted-foreground"
        )}
      >
        EN
      </button>
    </div>
  );
}
