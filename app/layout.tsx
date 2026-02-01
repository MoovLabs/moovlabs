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
  metadataBase: new URL('https://www.moovlabs.tech'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/icone-moovlabs.png',
    shortcut: '/icone-moovlabs.png',
    apple: '/icone-moovlabs.png',
  },
  manifest: '/site.webmanifest',
  title: {
    template: '%s | Mooblabs Studio',
    default: 'Mooblabs Studio - Agence Créative Digitale',
  },
  description: 'Mooblabs Studio est une agence créative spécialisée dans le developpement, le web design ,application mobile et les expériences digitales audacieuses.',
  keywords: ['Agence web', "Mobile" , "Site Vitrine", "Application Mobile",'Web Design', 'Branding', 'Développement', 'UI/UX', 'Digital Agency', 'Madagascar', 'Antananarivo'],
  authors: [{ name: 'Mooblabs Studio' }],
  creator: 'Mooblabs Studio',
  publisher: 'Mooblabs Studio',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: 'Mooblabs Studio - Agence Créative Digitale',
    description: 'Nous créons des expériences digitales audacieuses qui transforment les marques.',
    url: 'https://www.moovlabs.tech',
    siteName: 'Mooblabs Studio',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mooblabs Studio - Agence Créative Digitale',
    description: 'Nous créons des expériences digitales audacieuses qui transforment appui votre revenu.',
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
    url: 'https://www.moovlabs.tech',
    logo: 'https://www.moovlabs.tech/icone-moovlabs.png',
    description: 'Agence créative spécialisée dans le developpement web et mobile',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Antananarivo',
      addressCountry: 'MG',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+261375014626',
      contactType: 'Service de developpement',
    },
  }

  return (
    <html lang="fr">
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
