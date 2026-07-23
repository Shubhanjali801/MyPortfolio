import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Lightbulb,
  Wrench,
  Target,
} from "lucide-react";
import { projects, getProject } from "@/content/projects";
import { Chip } from "@/components/ui/Chip";
import { ArchDiagram } from "@/components/ui/ArchDiagram";
import { GithubIcon } from "@/components/ui/BrandIcons";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.pitch,
    openGraph: { title: project.title, description: project.pitch },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-24">
      <Link
        href="/#projects"
        className="mb-10 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to projects
      </Link>

      <header className="mb-10">
        <p className="mb-3 font-mono text-sm text-accent">{project.year}</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-muted">{project.pitch}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>

        {(project.liveUrl || project.githubUrl) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
              >
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-surface"
              >
                <GithubIcon className="h-4 w-4" /> View Code
              </a>
            )}
          </div>
        )}
      </header>

      <Prose title="Overview">
        <p className="text-muted">{project.description}</p>
      </Prose>

      <Prose title="Architecture">
        <ArchDiagram flow={project.architecture.flow} note={project.architecture.note} />
      </Prose>

      <Prose title="Highlights" icon={<Lightbulb className="h-5 w-5 text-accent" />}>
        <BulletList items={project.highlights} />
      </Prose>

      <Prose
        title="Challenges solved"
        icon={<Wrench className="h-5 w-5 text-accent" />}
      >
        <BulletList items={project.challenges} />
      </Prose>

      <Prose title="Tech stack">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
        </div>
      </Prose>

      <Prose title="Outcome" icon={<Target className="h-5 w-5 text-accent" />}>
        <p className="text-muted">{project.outcome}</p>
      </Prose>
    </article>
  );
}

function Prose({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
        {icon}
        {title}
      </h2>
      {children}
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-muted">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}
