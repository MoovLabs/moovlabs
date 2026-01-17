import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mooblabs.studio'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  manifest: '/site.webmanifest',
  title: {
    template: '%s | Mooblabs Studio',
    default: 'Mooblabs Studio - Agence Créative Digitale',
  },
  description: 'Mooblabs Studio est une agence créative spécialisée dans l\'identité de marque, le web design et les expériences digitales audacieuses.',
  keywords: ['Agence web', 'Web Design', 'Branding', 'Développement', 'UI/UX', 'Digital Agency', 'Paris', 'Creative Studio'],
  authors: [{ name: 'Mooblabs Studio' }],
  creator: 'Mooblabs Studio',
  publisher: 'Mooblabs Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Mooblabs Studio - Agence Créative Digitale',
    description: 'Nous créons des expériences digitales audacieuses qui transforment les marques.',
    url: 'https://www.mooblabs.studio',
    siteName: 'Mooblabs Studio',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mooblabs Studio - Agence Créative Digitale',
    description: 'Nous créons des expériences digitales audacieuses qui transforment les marques.',
    creator: '@mooblabs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Agency',
    name: 'Mooblabs Studio',
    url: 'https://www.mooblabs.studio',
    logo: 'https://www.mooblabs.studio/icon.png',
    description: 'Agence créative spécialisée dans l\'identité de marque et le web design.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Paris',
      addressCountry: 'FR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+33-0-00-00-00-00',
      contactType: 'customer service',
    },
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
