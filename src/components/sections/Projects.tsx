import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Chip } from "@/components/ui/Chip";
import { featuredProjects } from "@/content/projects";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        subtitle="A few projects that show how I think about systems, storage, and scale. Each has a full case study."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {featuredProjects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.06}>
            <article className="group relative flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent-soft">
              <div className="mb-4 flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold leading-snug">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="after:absolute after:inset-0"
                  >
                    {p.title}
                  </Link>
                </h3>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>

              <p className="mb-5 flex-1 text-sm text-muted">{p.pitch}</p>

              <div className="mb-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>

              <div className="relative z-10 flex items-center gap-4 text-sm">
                {p.githubUrl && (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-foreground"
                  >
                    <GithubIcon className="h-4 w-4" /> Code
                  </a>
                )}
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-foreground"
                  >
                    <ExternalLink className="h-4 w-4" /> Live
                  </a>
                )}
                <span className="ml-auto font-mono text-xs text-muted">
                  {p.year}
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
