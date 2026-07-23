import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { experience, education } from "@/content/experience";

export function Experience() {
  return (
    <Section id="experience" className="!py-20">
      <SectionHeading eyebrow="04 / Experience" title="Where I've worked" />

      <div className="space-y-6">
        {experience.map((job, i) => (
          <Reveal key={job.org} delay={i * 0.05}>
            <div className="rounded-xl border border-border bg-surface p-6">
              <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">
                  {job.role}{" "}
                  <span className="text-accent">· {job.org}</span>
                </h3>
                <span className="font-mono text-xs text-muted">
                  {job.period}
                </span>
              </div>
              <ul className="space-y-2 text-sm text-muted">
                {job.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <h3 className="mb-4 font-mono text-xs font-medium text-accent">
          Education
        </h3>
        <div className="space-y-3">
          {education.map((ed) => (
            <div
              key={ed.school}
              className="flex flex-wrap items-baseline justify-between gap-2 rounded-xl border border-border bg-surface p-5"
            >
              <div>
                <p className="font-medium">{ed.degree}</p>
                <p className="text-sm text-muted">{ed.school}</p>
              </div>
              <div className="text-right">
                <span className="block font-mono text-xs text-muted">
                  {ed.period}
                </span>
                {ed.score && (
                  <span className="mt-1 block font-mono text-xs text-accent">
                    {ed.score}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
