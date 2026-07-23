"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { site } from "@/content/site";
import { staggerContainer, fadeInUp } from "@/lib/motion";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent-soft blur-[120px]" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto w-full max-w-5xl px-6"
      >
        <motion.p
          variants={fadeInUp}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Open to opportunities
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl"
        >
          Hi, I&apos;m {site.name.split(" ")[0]} —{" "}
          <span className="text-accent">{site.title}</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mt-6 max-w-2xl text-lg text-muted sm:text-xl"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
          >
            View Projects <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface"
          >
            <Download className="h-4 w-4" /> Resume
          </a>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-8 flex items-center gap-4"
        >
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-foreground"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-foreground"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href={site.socials.email}
            aria-label="Email"
            className="text-muted transition-colors hover:text-foreground"
          >
            <Mail className="h-5 w-5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
