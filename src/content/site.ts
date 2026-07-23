// ─────────────────────────────────────────────────────────────
// EDIT ME: your identity, links, and site metadata live here.
// Anything marked "PLACEHOLDER" should be replaced with your real info.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Shubhanjali", // PLACEHOLDER: your full name
  title: "Backend & Full-Stack Engineer",
  tagline:
    "I design and ship cloud-native systems — from feed architectures to Kubernetes deployments.",
  shortPitch:
    "Backend-leaning full-stack engineer focused on distributed systems, cloud-native infrastructure, and clean, scalable APIs.",
  location: "Indira Nagar, Lucknow, Uttar Pradesh, India",
  email: "shubhanjali32@gmail.com",
  resumeUrl:
    "https://drive.google.com/file/d/1z14KfNbFUzLctoPmQqV_M89-2YUQoC49/view?usp=drive_link",
  url: "https://your-portfolio.vercel.app", // PLACEHOLDER: set after deploy

  socials: {
    github: "https://github.com/Shubhanjali801",
    linkedin:
      "https://www.linkedin.com/in/shubhanjali-%F0%9F%87%AE%F0%9F%87%B3-b00a04297/",
    email: "mailto:shubhanjali32@gmail.com",
  },
} as const;

export type Site = typeof site;
