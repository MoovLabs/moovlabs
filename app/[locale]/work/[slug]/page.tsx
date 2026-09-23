import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { projects } from "@/src/data/projects";
import { getDictionary } from "@/src/i18n/config";
import type { Locale } from "@/src/types";
import { Container } from "@/src/components/ui/container";

interface ProjectPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Case Study`,
    description: project.description[locale],
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  const dict = await getDictionary(locale);

  if (!project) {
    notFound();
  }

  return (
    <article className="pt-32 pb-24 min-h-screen">
      <Container>
        <Link 
          href={`/${locale}/#work`}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 uppercase tracking-widest text-sm font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          {dict.work.backToWork}
        </Link>

        <header className="max-w-4xl mb-16">
          <p className="text-primary font-display uppercase tracking-widest mb-4">
            {project.category[locale]} — {project.year}
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tight mb-8">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            {project.longDescription[locale]}
          </p>
        </header>
      </Container>

      <div className="w-full aspect-video md:aspect-[21/9] relative mb-24 bg-muted">
        <Image 
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 mb-24">
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                {dict.work.technologies}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 border border-border text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {project.url && (
              <div>
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-14 px-8 border-2 border-primary bg-primary text-primary-foreground font-semibold hover:bg-transparent hover:text-primary transition-all duration-300 w-full"
                >
                  {dict.work.viewProject || "View Project"}
                </a>
              </div>
            )}
          </div>

          <div className="space-y-16">
            <section>
              <h2 className="text-3xl font-display font-bold mb-6">
                {dict.work.challenge || "The Challenge"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.challenge?.[locale] || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
              </p>
            </section>
            
            <section>
              <h2 className="text-3xl font-display font-bold mb-6">
                {dict.work.solution || "Our Solution"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.solution?.[locale] || "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-display font-bold mb-6">
                {dict.work.result || "The Result"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.result?.[locale] || "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}
              </p>
            </section>
          </div>
        </div>
      </Container>
    </article>
  );
}
