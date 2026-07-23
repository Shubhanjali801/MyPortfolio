import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";

export function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="01 / About" title="About me" />
      <div className="grid gap-8 md:grid-cols-3">
        <Reveal className="md:col-span-2 space-y-4 text-lg text-muted">
          <p>
            I&apos;m a {site.title.toLowerCase()} who enjoys the parts of
            engineering where systems meet scale — designing APIs, choosing the
            right storage and caching strategy, and getting services running
            reliably in production.
          </p>
          <p>
            My projects span the stack: a social feed built around{" "}
            <span className="text-foreground">hybrid fan-out and Redis</span>, a
            CRM deployed to{" "}
            <span className="text-foreground">self-hosted Kubernetes</span>{" "}
            against real NFR targets, and cloud services on{" "}
            <span className="text-foreground">AWS</span>. I care about the
            &quot;how&quot; and the &quot;why&quot; behind each decision, not
            just shipping features.
          </p>
          <p>
            I&apos;m currently a web developer at{" "}
            <span className="text-foreground">Amdox Technologies</span> (remote),
            where I build web applications across the stack while deepening my
            work in distributed systems and cloud-native infrastructure.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-xl border border-border bg-surface p-6">
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="font-mono text-xs text-muted">Focus</dt>
                <dd className="mt-1 font-medium">
                  Backend · Systems · Cloud-Native
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-muted">Location</dt>
                <dd className="mt-1 font-medium">{site.location}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-muted">Email</dt>
                <dd className="mt-1 break-all font-medium">{site.email}</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
