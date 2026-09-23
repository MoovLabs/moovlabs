import { getDictionary } from "@/src/i18n/config";
import type { Locale } from "@/src/types";

import { HeroSection } from "@/src/features/hero/hero-section";
import { WorkSection } from "@/src/features/work/work-section";
import { ServicesSection } from "@/src/features/services/services-section";
import { ProcessSection } from "@/src/features/process/process-section";
import { StudioSection } from "@/src/features/studio/studio-section";
import { TestimonialsSection } from "@/src/features/testimonials/testimonials-section";
import { FaqSection } from "@/src/features/faq/faq-section";
import { ContactSection } from "@/src/features/contact/contact-section";
import { FinalCtaSection } from "@/src/features/cta/final-cta-section";

interface HomePageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <HeroSection dict={dict} locale={locale} />
      <WorkSection dict={dict} locale={locale} />
      <ServicesSection dict={dict} locale={locale} />
      <ProcessSection dict={dict} locale={locale} />
      <StudioSection dict={dict} locale={locale} />
      <TestimonialsSection dict={dict} locale={locale} />
      <FaqSection dict={dict} locale={locale} />
      <ContactSection dict={dict} locale={locale} />
      <FinalCtaSection dict={dict} locale={locale} />
    </>
  );
}
