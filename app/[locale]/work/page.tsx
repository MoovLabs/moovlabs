import { getDictionary } from "@/src/i18n/config";
import type { Locale } from "@/src/types";
import { Container } from "@/src/components/ui/container";
import { ProjectCard } from "@/src/features/work/project-card";
import { projects } from "@/src/data/projects";
import { SectionHeader } from "@/src/components/ui/section-header";

interface WorkPageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: WorkPageProps) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.locale);
  return {
    title: `${dict.work.title} - Moovlabs`,
    description: dict.work.label,
  };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.locale);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <Container>
        <div className="mb-16">
          <SectionHeader
            label={dict.work.label}
            title={dict.work.title}
            titleAccent={dict.work.titleAccent}
            className="mb-0"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              locale={resolvedParams.locale}
              index={index}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
