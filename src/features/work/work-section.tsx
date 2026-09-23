"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Section } from "@/src/components/ui/section";
import { Container } from "@/src/components/ui/container";
import { SectionHeader } from "@/src/components/ui/section-header";
import { ProjectCard } from "./project-card";
import { projects } from "@/src/data/projects";
import type { Locale } from "@/src/types";
import { Button } from "@/src/components/ui/button";

interface WorkSectionProps {
  dict: any;
  locale: Locale;
}

export function WorkSection({ dict, locale }: WorkSectionProps) {
  return (
    <Section id="work" variant="muted">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionHeader
            label={dict.work.label}
            title={dict.work.title}
            titleAccent={dict.work.titleAccent}
            className="mb-0"
          />
          <Button variant="link" asChild className="mb-4">
            <Link href={`/${locale}/work`}>
              {dict.work.viewAll}
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              locale={locale}
              index={index}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
