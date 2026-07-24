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
    "https://drive.google.com/file/d/1mmTPvOuvXCrBDfremp6wQ37CRB8olWbt/view?usp=drive_link",
  url: "https://myportfolio-production-43a6.up.railway.app/", 

  socials: {
    github: "https://github.com/Shubhanjali801",
    linkedin:
      "https://www.linkedin.com/in/shubhanjali-%F0%9F%87%AE%F0%9F%87%B3-b00a04297/",
    email: "mailto:shubhanjali32@gmail.com",
  },
} as const;

export type Site = typeof site;
