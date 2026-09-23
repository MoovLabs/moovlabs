"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import Link from "next/link";

import { Section } from "@/src/components/ui/section";
import { Container } from "@/src/components/ui/container";
import { SectionHeader } from "@/src/components/ui/section-header";
import { teamMembers } from "@/src/data/team";
import { technologies } from "@/src/data/technologies";
import type { Locale } from "@/src/types";
import { ArrowUpRight } from "lucide-react";

interface StudioSectionProps {
  dict: any;
  locale: Locale;
}

export function StudioSection({ dict, locale }: StudioSectionProps) {
  return (
    <Section id="studio" variant="muted">
      <Container>
        <SectionHeader
          label={dict.studio.label}
          title={dict.studio.title}
          titleAccent={dict.studio.titleAccent}
          subtitle={dict.studio.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20">
          {/* Values Section */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-display mb-6">
                {locale === "fr" ? "Notre Vision" : "Our Vision"}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {dict.studio.vision}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {Object.values(dict.studio.values).map((value: any, index: number) => (
                <div key={index} className="space-y-3">
                  <div className="text-primary font-display text-4xl mb-4">
                    0{index + 1}
                  </div>
                  <h4 className="text-xl font-bold font-display uppercase tracking-wider">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div>
            <h3 className="text-3xl font-display mb-8">
              {locale === "fr" ? "L'Équipe Fondatrice" : "Founding Team"}
            </h3>
            <div className="space-y-6">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} locale={locale} />
              ))}
            </div>
          </div>
        </div>

        {/* Technologies Marquee */}
        <div className="mt-32 pt-16 border-t border-border/50">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">
              {locale === "fr" ? "Technologies Maîtrisées" : "Core Technologies"}
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70">
            {technologies.map((tech) => (
              <div 
                key={tech.name} 
                className="flex items-center gap-3 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                title={tech.name}
              >
                <span className="text-lg font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function TeamMemberCard({ member, locale }: any) {
  return (
    <div className="card p-6 flex flex-col sm:flex-row gap-6 items-start group">
      <div className="w-20 h-20 bg-muted shrink-0 flex items-center justify-center overflow-hidden rounded-md border border-border">
        {member.image ? (
          <img 
            src={member.image} 
            alt={`${member.firstName} ${member.lastName}`} 
            className="w-full h-full object-cover transition-all duration-500" 
          />
        ) : (
          <span className="text-2xl font-display text-muted-foreground group-hover:text-primary transition-colors">
            {member.firstName.charAt(0)}{member.lastName.charAt(0)}
          </span>
        )}
      </div>
      
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
          <h4 className="text-xl font-bold font-display tracking-wide group-hover:text-primary transition-colors">
            {member.firstName} {member.lastName}
          </h4>
          <div className="flex gap-3">
            {member.socials?.linkedin && (
              <Link 
                href={member.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icons.Linkedin className="w-5 h-5" />
              </Link>
            )}
            {member.socials?.github && (
              <Link 
                href={member.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icons.Github className="w-5 h-5" />
              </Link>
            )}
            {member.socials?.website && (
              <Link 
                href={member.socials.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            )}
          </div>
        </div>
        
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
          {member.role[locale]}
        </p>
        
        <p className="text-sm text-muted-foreground">
          {member.bio[locale]}
        </p>
      </div>
    </div>
  );
}
