// EDIT ME: your experience and education.

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Web Developer",
    org: "Amdox Technologies (Remote)",
    period: "02 June 2026 – Present", // PLACEHOLDER: exact start date
    points: [
      "Build and maintain web applications as part of a remote engineering team.",
      "Work across the stack — from APIs and data models to front-end features.",
      "Deployed a CRM/ERP platform to self-hosted Kubernetes against defined NFR targets.",
    ],
  },
  {
    role: "Backend Developer Intern",
    org: "Syntecxhub (Remote)",
    period: "27 May 2026 – 27 June 2026", 
    points: [
      "Built a set of standalone backend projects using Express and Mongoose.",
      "Followed consistent REST + MongoDB conventions across 12 project briefs.",
      "Covered CRUD services, data modeling, and API design fundamentals.",
    ],
  },
];

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  score?: string;
};

export const education: EducationItem[] = [
  {
    degree: "B.Tech — Information Technology",
    school: "Indian Institute of Information Technology Allahabad, Uttar Pradesh, India",
    period: "Dec 2021 – Jun 2025",
    score: "GPA 6.5",
  },
  {
    degree: "Class XII (Senior Secondary)",
    school: "DAV Science Academy, Ambedkar Nagar, Uttar Pradesh, India",
    period: "2017 – 2019",
    score: "80%",
  },
  {
    degree: "Class X (Secondary)",
    school: "DAV Science Academy, Ambedkar Nagar, Uttar Pradesh, India",
    period: "2015 – 2017", 
    score: "87%",
  },
];
