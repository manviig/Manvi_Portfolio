import type { ContactLink, Fact, NavItem } from "@/types";

export const site = {
  name: "Manvi Gupta",
  email: "manvi6262@gmail.com",
  title: "Manvi Gupta | Full-stack software engineer",
  description:
    "Manvi Gupta, full-stack software engineer with backend and applied AI work: Next.js, TypeScript, Node.js, PostgreSQL, Flask. Projects, experience and contact.",
  kicker: "Full-stack software engineer · Backend & applied AI",
  headline: "I build products from interface to intelligence.",
  lead: "I'm Manvi, a full-stack developer building web applications, backend workflows and practical AI features.",
  availability:
    "Open to software engineering internships and entry-level roles, plus selected freelance web projects",
  year: 2026,
} as const;

export const resume = {
  href: "/resume/Manvi_Gupta_Resume.pdf",
  fileName: "Manvi_Gupta_Resume.pdf",
} as const;

export const nav: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Credentials", href: "#credentials" },
];

export const handles = [
  { short: "GH", label: "/manviig", href: "https://github.com/manviig" },
  {
    short: "LI",
    label: "/manvi-gupta",
    href: "https://www.linkedin.com/in/manvi-gupta-55a193296/",
  },
  { short: "LC", label: "/manviii__g", href: "https://leetcode.com/u/manvii__g/" },
] as const;

export const bubbleLines = [
  "Hi, I'm Manvi!",
  "I like building things end to end.",
  "Currently working across Next.js, TypeScript and backend APIs.",
  "Nova is where I explored practical AI integrations.",
  "Take a look at the projects. They explain my work better.",
];

export const guideLines = {
  about: "A little about me.",
  work: "Start with the work. Short version first, technical detail inside.",
  contact: "That's the tour. Say hello, I'd like to hear from you.",
} as const;

export const about = {
  heading: "Hello, I'm Manvi!",
  paragraphs: [
    "I'm a Computer Science (Data Science) student who enjoys building software end to end: understanding the problem, shaping the interface, designing the backend and connecting the pieces into a usable product. My work spans full-stack applications and practical AI integrations, and I care about reliable products that solve real workflow problems.",
    "Always curious to explore new technologies, currently working across full-stack development, applied AI and automation. Open to opportunities and collaborations.",
  ],
};

export const facts: Fact[] = [
  {
    label: "Education",
    title: "B.Tech CSE (Data Science)",
    detail: "ABES Institute of Technology · 2023 to 2027 · CGPA 7.94 / 10",
  },
  {
    label: "Now",
    title: "Software Developer Trainee",
    detail: "Terafence Limited · Sep 2026 to present",
  },
  {
    label: "Problem solving",
    title: "140+ LeetCode problems",
    detail: "Arrays, strings, linked lists, recursion, stacks, queues, trees",
  },
  {
    label: "Current focus",
    title: "Backend and applied AI",
    detail: "Backend engineering, applied AI and system design",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    copyable: true,
  },
  {
    label: "LinkedIn",
    value: "/manvi-gupta",
    href: "https://www.linkedin.com/in/manvi-gupta-55a193296/",
    external: true,
  },
  { label: "GitHub", value: "/manviig", href: "https://github.com/manviig", external: true },
  {
    label: "LeetCode",
    value: "/manviii__g",
    href: "https://leetcode.com/u/manvii__g/",
    external: true,
  },
];