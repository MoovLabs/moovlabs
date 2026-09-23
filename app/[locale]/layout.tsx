import { Geist, Geist_Mono } from "next/font/google";
import "@/src/styles/globals.css";
import { Header } from "@/src/components/layout/header";
import { Footer } from "@/src/components/layout/footer";
import { getDictionary } from "@/src/i18n/config";
import type { Locale } from "@/src/types";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.locale);
  return {
    title: {
      template: `%s | ${dict.metadata.title}`,
      default: dict.metadata.title,
    },
    description: dict.metadata.description,
    keywords: dict.metadata.keywords,
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.locale);

  return (
    <html lang={resolvedParams.locale} className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header locale={resolvedParams.locale} dict={dict} />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer locale={resolvedParams.locale} dict={dict} />
      </body>
    </html>
  );
}
