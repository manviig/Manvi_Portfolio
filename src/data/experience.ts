import type { Credential, ExperienceEntry, SkillGroup } from "@/types";

export const experience: ExperienceEntry = {
  role: "Software Developer Trainee",
  company: "Terafence Limited",
  period: "Sep 2026 to present",
  stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL"],
  summary:
    "Building an internal support-ticket and role-management platform, with separate agent and customer portals.",
  highlights: [
    "Designed a four-level role hierarchy (L1, L2, L3, Super Admin) with an escalation workflow, and enforced roles on the server.",
    "Moved JWT storage from localStorage to cookies, with admin checks on every report request.",
    "Implemented automatic ticket assignment, live agent-dashboard updates and in-app notifications.",
    "Built an admin Reports module with charts and PDF, JSON and CSV exports, plus follow-up reminders and a post-closure rating flow.",
  ],
  flow: [
    "Customer raises ticket",
    "Auto-assigned to least busy agent",
    "L1 resolves",
    "L2 verifies",
    "Closed and rated",
  ],
};

export const skills: SkillGroup[] = [
  { title: "Languages", items: ["TypeScript", "JavaScript", "Python", "Java", "SQL"] },
  { title: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS"] },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Flask", "REST APIs", "JWT and RBAC"],
  },
  { title: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL"] },
  { title: "Applied AI", items: ["Gemini API", "spaCy", "BERT integration"] },
  {
    title: "Currently developing",
    items: ["AI/ML fundamentals", "Automation", "System design"],
    highlight: true,
  },
];

export const credentials: Credential[] = [
  {
    label: "Qualified",
    title: "GATE 2026 · Computer Science",
    text: "Qualified the Graduate Aptitude Test in Engineering, Computer Science paper.",
  },
  {
    label: "Certificate of training · 2026",
    title: "80-hour training in AI and Machine Learning",
    text: "GI Ventures, through the GRIL programme at ABES Institute of Technology.",
  },
];
