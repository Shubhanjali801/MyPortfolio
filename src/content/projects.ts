// ─────────────────────────────────────────────────────────────
// EDIT ME: your projects. Fill in `liveUrl` and `githubUrl`.
// Set liveUrl to null if a project has no live demo.
// ─────────────────────────────────────────────────────────────

export type Project = {
  slug: string;
  title: string;
  pitch: string;
  description: string;
  year: string;
  featured: boolean;
  liveUrl: string | null;
  githubUrl: string | null; // PLACEHOLDER — fill these in
  tags: string[];
  highlights: string[];
  challenges: string[];
  stack: string[];
  outcome: string;
  // Mini architecture diagram nodes for the case-study page (simple, themeable)
  architecture: { flow: string[]; note: string };
};

export const projects: Project[] = [
  {
    slug: "amdox",
    title: "Amdox — Cloud-Native CRM Deployment",
    pitch:
      "Production-grade CRM deployment on self-hosted Kubernetes, engineered to hard NFR targets.",
    description:
      "A full deployment of a CRM platform on a self-hosted k3s Kubernetes cluster, driven by explicit non-functional requirements for uptime, latency, throughput, security, and scalability — with a managed-cloud fallback path documented for portability.",
    year: "2025",
    featured: true,
    liveUrl: null,
    githubUrl: "https://github.com/Shubhanjali801/amdox-erp",
    tags: ["Kubernetes", "Docker", "DevOps", "SRE"],
    highlights: [
      "Authored k3s Kubernetes manifests for the full application stack.",
      "Defined and targeted NFRs: uptime, latency, throughput, security, scalability.",
      "Documented a managed-cloud fallback deployment for portability.",
      "Treated non-functional requirements as first-class deliverables.",
    ],
    challenges: [
      "Balancing self-hosted control against the operational cost of meeting cloud-grade uptime and scalability targets.",
    ],
    stack: ["Kubernetes (k3s)", "Docker", "YAML Manifests", "Linux"],
    outcome:
      "A repeatable, self-hosted deployment that meets defined NFR targets, with a documented path to managed infrastructure.",
    architecture: {
      flow: ["Users", "Ingress", "k3s Cluster", "App Pods", "Persistent Storage"],
      note: "Self-hosted k3s with ingress routing to horizontally-scalable app pods, backed by persistent volumes.",
    },
  },
  {
    slug: "instagram-clone",
    title: "Instagram Clone — Social Feed at Scale",
    pitch:
      "Full-stack Instagram-style app with a feed engineered for scale using hybrid fan-out and Redis caching.",
    description:
      "A system-design-driven Instagram clone with separate backend and frontend workspaces. The feed uses a hybrid fan-out (push/pull) model backed by a Redis feed cache to keep timelines fast as the follow graph grows.",
    year: "2025",
    featured: true,
    liveUrl: null,
    githubUrl: "https://github.com/Shubhanjali801/Instagram_App",
    tags: ["System Design", "Node.js", "Redis", "TypeScript"],
    highlights: [
      "Hybrid fan-out (push + pull) feed generation to balance write and read cost.",
      "Redis feed cache for low-latency timeline reads.",
      "Monorepo with separate backend and frontend workspaces.",
      "8/8 tests passing (Vitest).",
    ],
    challenges: [
      "Choosing when to fan-out-on-write vs fan-out-on-read to avoid the celebrity-user hotspot problem.",
    ],
    stack: ["Node.js", "TypeScript", "Redis", "Vitest", "Monorepo Workspaces"],
    outcome:
      "A complete, tested social feed that demonstrates practical caching and fan-out trade-offs.",
    architecture: {
      flow: ["Client", "API", "Fan-out Service", "Redis Feed Cache", "Database"],
      note: "Writes fan out to followers' cached feeds; reads hit Redis first, falling back to the database.",
    },
  },
  {
    slug: "pastebin",
    title: "Pastebin — Metadata/Blob Split Storage",
    pitch:
      "A Pastebin service that separates metadata from blob storage, deployed live on AWS.",
    description:
      "A Pastebin clone with a deliberate storage split: lightweight metadata in a fast store and paste bodies as blobs in S3. Deployed on AWS EC2, demonstrating cloud storage design and separation of concerns.",
    year: "2025",
    featured: true,
    liveUrl: null,
    githubUrl: "https://github.com/Shubhanjali801/Pastebin_App",
    tags: ["AWS", "S3", "Node.js", "TypeScript"],
    highlights: [
      "Metadata/blob split: small metadata separated from large paste bodies.",
      "Paste bodies stored as blobs in AWS S3.",
      "Deployed on AWS EC2.",
    ],
    challenges: [
      "Designing the boundary between metadata and blob storage so lookups stay cheap while bodies scale independently.",
    ],
    stack: ["Node.js", "TypeScript", "AWS EC2", "AWS S3"],
    outcome:
      "A working cloud-deployed service illustrating scalable storage design.",
    architecture: {
      flow: ["Client", "API (EC2)", "Metadata Store", "S3 Blob Store"],
      note: "Metadata and paste bodies are stored separately so each can scale on its own terms.",
    },
  },
  {
    slug: "url-shortener",
    title: "URL Shortener — Containerized on Kubernetes",
    pitch:
      "A URL shortener with Postgres + Redis, containerized and deployed to Kubernetes.",
    description:
      "A URL shortening service built with Express, Postgres, and Redis, using Prisma as the ORM. Containerized with Docker, deployed to a local Kubernetes cluster, and running live in production on Railway — covering the full path from code to a public URL.",
    year: "2025",
    featured: true,
    liveUrl: "https://urlshortnerapp-production-dd24.up.railway.app/",
    githubUrl: "https://github.com/Shubhanjali801/Url_Shortner_App",
    tags: ["Node.js", "PostgreSQL", "Redis", "Kubernetes"],
    highlights: [
      "Express API with Postgres persistence and Redis caching.",
      "Prisma ORM for typed database access.",
      "Dockerized and deployed to local Docker Desktop Kubernetes.",
      "Running live in production on Railway.",
    ],
    challenges: [
      "Getting Prisma to run cleanly in a slim Alpine container image, and wiring image loading into the local k8s cluster.",
    ],
    stack: [
      "Node.js",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Redis",
      "Prisma",
      "Docker",
      "Kubernetes",
    ],
    outcome:
      "A full backend service demonstrating persistence, caching, and container orchestration end to end.",
    architecture: {
      flow: ["Client", "Express API", "Redis Cache", "PostgreSQL"],
      note: "Short-code lookups hit Redis first; misses fall through to Postgres via Prisma.",
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
