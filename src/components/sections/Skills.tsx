import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { skills } from "@/content/skills";

export function Skills() {
  return (
    <Section id="skills" className="!py-20">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I build with"
        subtitle="The stack I reach for across backend, data, and infrastructure work."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.05}>
            <div className="h-full rounded-xl border border-border bg-surface p-5">
              <h3 className="mb-3 font-mono text-xs font-medium text-accent">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-surface-2 px-2.5 py-1 text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
