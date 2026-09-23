"use client";

import { useState } from "react";
import * as Icons from "lucide-react";
import Link from "next/link";

import { Section } from "@/src/components/ui/section";
import { Container } from "@/src/components/ui/container";
import { SectionHeader } from "@/src/components/ui/section-header";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Textarea } from "@/src/components/ui/textarea";
import { Select } from "@/src/components/ui/select";
import { Button } from "@/src/components/ui/button";
import { SITE_CONFIG } from "@/src/lib/constants";
import type { Locale } from "@/src/types";

interface ContactSectionProps {
  dict: any;
  locale: Locale;
}

export function ContactSection({ dict, locale }: ContactSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setIsSuccess(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        (e.target as HTMLFormElement).reset();
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(locale === 'fr' ? 'Une erreur est survenue. Veuillez réessayer.' : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" variant="muted" className="pt-24 pb-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          {/* Info Side */}
          <div>
            <SectionHeader
              label={dict.contact.label}
              title={dict.contact.title}
              titleAccent={dict.contact.titleAccent}
              subtitle={dict.contact.subtitle}
            />

            <div className="mt-12 space-y-8">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {dict.contact.info.email}
                </h4>
                <a 
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-lg md:text-xl font-medium hover:text-primary transition-colors block"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {dict.contact.info.phone}
                </h4>
                <a 
                  href={`tel:${SITE_CONFIG.phone.replace(/[^0-9+]/g, '')}`}
                  className="text-lg md:text-xl font-medium hover:text-primary transition-colors block"
                >
                  {SITE_CONFIG.phone}
                </a>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {dict.contact.info.address}
                </h4>
                <p className="text-lg md:text-xl font-medium">
                  {SITE_CONFIG.address}
                </p>
              </div>

              <div className="pt-8 space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {dict.contact.info.followUs}
                </h4>
                <div className="flex gap-4">
                  {Object.entries(SITE_CONFIG.socials).map(([key, url]) => {
                    // Quick way to get icon component by name
                    const IconName = key.charAt(0).toUpperCase() + key.slice(1);
                    const Icon = (Icons as any)[IconName] || Icons.Circle;
                    
                    return (
                      <Link 
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-full border border-border text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
                        title={key}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="sr-only">{key}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="card p-8 md:p-12 relative overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{dict.contact.form.name}</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder={dict.contact.form.namePlaceholder} 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{dict.contact.form.email}</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder={dict.contact.form.emailPlaceholder} 
                    required 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">{dict.contact.form.company}</Label>
                <Input 
                  id="company" 
                  name="company" 
                  placeholder={dict.contact.form.companyPlaceholder} 
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="projectType">{dict.contact.form.projectType}</Label>
                  <Select id="projectType" name="projectType" required defaultValue="">
                    <option value="" disabled>
                      {dict.contact.form.projectTypePlaceholder}
                    </option>
                    {Object.entries(dict.contact.projectTypes).map(([key, label]) => (
                      <option key={key} value={key}>
                        {label as string}
                      </option>
                    ))}
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget">{dict.contact.form.budget}</Label>
                  <Select id="budget" name="budget" required defaultValue="">
                    <option value="" disabled>
                      {dict.contact.form.budgetPlaceholder}
                    </option>
                    {Object.entries(dict.contact.budgetRanges).map(([key, label]) => (
                      <option key={key} value={key}>
                        {label as string}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">{dict.contact.form.message}</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder={dict.contact.form.messagePlaceholder} 
                  rows={5}
                  required 
                />
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full sm:w-auto min-w-[200px]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Icons.Loader2 className="w-4 h-4 animate-spin" />
                      {dict.contact.form.sending}
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      {dict.contact.form.submit}
                      <Icons.ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  )}
                </Button>
              </div>
            </form>

            {/* Success Overlay */}
            <div 
              className={`absolute inset-0 bg-card/95 backdrop-blur-sm flex items-center justify-center z-10 transition-all duration-500 flex-col gap-4 ${
                isSuccess ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center">
                <Icons.Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold">Merci !</h3>
              <p className="text-muted-foreground">{dict.contact.form.success}</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
