"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, Mail, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>();

  async function onSubmit(data: ContactInput) {
    setServerError(null);

    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      setServerError(parsed.error.issues[0]?.message ?? "Invalid input.");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong.");
      }
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setServerError(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  const inputClass =
    "w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent";

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="05 / Contact"
        title="Let's build something"
        subtitle="Have a role, a project, or just want to say hi? Drop me a message."
      />

      <div className="grid gap-10 md:grid-cols-2">
        <Reveal>
          {status === "success" ? (
            <div className="flex h-full flex-col items-start justify-center gap-3 rounded-xl border border-border bg-surface p-8">
              <CheckCircle2 className="h-8 w-8 text-emerald-500" />
              <p className="text-lg font-medium">Message sent!</p>
              <p className="text-sm text-muted">
                Thanks for reaching out — I&apos;ll get back to you soon.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 text-sm text-accent hover:underline"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm">
                  Name
                </label>
                <input
                  id="name"
                  className={inputClass}
                  {...register("name", { required: "Name is required." })}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={inputClass}
                  {...register("email", { required: "Email is required." })}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={inputClass + " resize-y"}
                  {...register("message", {
                    required: "Message is required.",
                  })}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {serverError && (
                <p className="text-sm text-red-500">{serverError}</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send message"}
                <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex h-full flex-col justify-center gap-4">
            <p className="text-muted">
              Prefer email or socials? Reach me directly:
            </p>
            <a
              href={site.socials.email}
              className="inline-flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 transition-colors hover:border-accent/50"
            >
              <Mail className="h-5 w-5 text-accent" />
              <span className="text-sm">{site.email}</span>
            </a>
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 transition-colors hover:border-accent/50"
            >
              <GithubIcon className="h-5 w-5 text-accent" />
              <span className="text-sm">GitHub</span>
            </a>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 transition-colors hover:border-accent/50"
            >
              <LinkedinIcon className="h-5 w-5 text-accent" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
