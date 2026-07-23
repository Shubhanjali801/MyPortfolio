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
    period: "02 June 2026 – Present", 
    points: [
      "Build and maintain web applications as part of a remote engineering team.",
      "Work across the stack — from APIs and data models to front-end features.",
      "Deployed the full stack to AWS EC2 on Kubernetes (k3s) with Dockerized services and Traefik ingress.",
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
  {
    role: "Web Developer Intern",
    org: "The Skybrish (Remote)",
    period: "20 Feb 2026 – 20 May 2026", 
    points: [
      "Built a full-stack ERP web application to manage Products, Customers, Suppliers, Sales/Purchase Orders, GRNs, and Invoices.",
      "Implemented JWT authentication with role-based access control (Admin, Sales, Purchase, Inventory) and integrated Chart.js dashboards and jsPDF invoice export.",
      "Developed a full-stack Bookstore platform with React, Node.js, Express, and MongoDB, featuring search/filter/pagination, cart & checkout, and an admin dashboard; designed RESTful APIs secured with JWT & bcrypt."
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
