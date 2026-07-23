// EDIT ME: your skills, grouped by category.

export type SkillGroup = { category: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "SQL", "Python","C++", "Java"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Prisma", "Mongoose","NestJS"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Data & Caching",
    items: ["PostgreSQL", "MongoDB", "Redis", "AWS S3"],
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "Kubernetes (k3s/k8s)", "AWS EC2", "CI/CD", "Linux"],
  },
  {
    category: "Practices",
    items: [
      "System Design",
      "Caching Strategies",
      "Testing",
      "Non-Functional Requirements",
    ],
  },
];
