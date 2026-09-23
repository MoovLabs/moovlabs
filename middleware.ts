import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18nConfig } from './src/i18n/config';

// Get the preferred locale, similar to how next-intl does it
function getLocale(request: NextRequest): string {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = i18nConfig.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return '';

  // Get locale from cookie if it exists
  const localeCookie = request.cookies.get('NEXT_LOCALE')?.value;
  if (localeCookie && (i18nConfig.locales as readonly string[]).includes(localeCookie)) {
    return localeCookie;
  }

  // Get accept-language header
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    // Basic parser for accept-language header
    // "fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5"
    const parsed = acceptLanguage
      .split(',')
      .map((lang) => {
        const [locale, q] = lang.split(';');
        const quality = q ? parseFloat(q.split('=')[1]) : 1;
        return { locale: locale.trim().split('-')[0], quality };
      })
      .sort((a, b) => b.quality - a.quality);

    for (const { locale } of parsed) {
      if ((i18nConfig.locales as readonly string[]).includes(locale)) {
        return locale;
      }
    }
  }

  return i18nConfig.defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Exclude static files, API routes, etc.
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = i18nConfig.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
