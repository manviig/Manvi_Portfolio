import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "nova",
    tone: "nova",
    kicker: "Personal project · Solo build",
    name: "Nova",
    badge: "Live",
    summary:
      "A threat-intelligence platform that analyses suspicious URLs and emails and explains the risk in plain language.",
    problem: "Raw security signals are hard for non-experts to read.",
    role: "Solo build: full stack, plus the Flask analysis service and API integrations.",
    stack: ["React", "Node.js", "MongoDB", "Flask", "Python", "JWT"],
    links: [
      { label: "View live site", href: "https://nova-lime-five.vercel.app/", primary: true },
      { label: "Source code", href: "https://github.com/manviig/Novaa" },
    ],
    caption: "Simplified view of the MERN app and the Python services.",
    diagram: {
      id: "nova",
      label:
        "Simplified architecture: React dashboard talks to an Express API backed by MongoDB, which calls Flask services that use VirusTotal, a BERT model, spaCy and Gemini.",
      nodes: [
        { x: 16, y: 115, w: 140, h: 80, rx: 14, title: "React", sub: "dashboard" },
        { x: 214, y: 52, w: 150, h: 80, rx: 14, title: "Express API", sub: "JWT · roles · reports" },
        { x: 214, y: 178, w: 150, h: 80, rx: 14, title: "MongoDB", sub: "stored results" },
        { x: 422, y: 115, w: 140, h: 80, rx: 14, title: "Flask", sub: "Python services" },
        { x: 620, y: 14, w: 110, h: 52, rx: 12, title: "VirusTotal", small: true },
        { x: 620, y: 86, w: 110, h: 52, rx: 12, title: "BERT", small: true },
        { x: 620, y: 158, w: 110, h: 52, rx: 12, title: "spaCy NER", small: true },
        { x: 620, y: 230, w: 110, h: 52, rx: 12, title: "Gemini", small: true },
      ],
      arrows: [
        "M156 155 C185 155 185 92 214 92",
        "M289 132 L289 178",
        "M364 92 C395 92 395 155 422 155",
        "M562 155 C590 155 590 40 620 40",
        "M562 155 C590 155 590 112 620 112",
        "M562 155 C590 155 590 184 620 184",
        "M562 155 C590 155 590 256 620 256",
      ],
    },
    tiles: [
      { title: "0 to 100", text: "Risk score for every URL and email" },
      { title: "90+", text: "VirusTotal engines checked" },
      { title: "BERT + spaCy", text: "Email text signals" },
      { title: "Gemini", text: "Plain-English explanation" },
    ],
    deepDive: [
      {
        title: "How it works",
        columns: 3,
        cards: [
          {
            title: "URL score, 0 to 100",
            text: "Reads VirusTotal's cached report first and submits a new scan only when none exists. Malicious engines count for up to 70 points and suspicious ones for up to 20, plus extra points for a poor reputation, a long redirect chain, a missing HTTPS certificate and phishing or malware tags. Low under 25, Medium 25 to 49, High 50 to 74, Critical from 75.",
          },
          {
            title: "Email score",
            text: "Ten weighted rules (urgency, credential requests, threats, reward scams, links, raw IP addresses) add up to 100. The final score is 60% rules and 40% BERT classifier, then spaCy entity checks for impersonation add up to 15 points.",
            blend: { rules: 60, nlp: 40 },
          },
          {
            title: "Dashboard and reports",
            text: "MongoDB aggregation pipelines for the stats, and single or combined PDF reports generated with PDFKit.",
          },
        ],
      },
      {
        title: "Decisions",
        columns: 3,
        cards: [
          {
            label: "Decision",
            title: "Degrade, don't fail",
            text: "If the Flask service or Gemini is down, the scan still completes with the rule-based score and no explanation.",
          },
          {
            label: "Decision",
            title: "Don't over-trust the model",
            text: "The BERT model was fine-tuned by its author on SMS spam, not by me and not on email. I capped it at 40% of the score and added keyword adjustments.",
          },
          {
            label: "Decision",
            title: "Impersonation needs context",
            text: "A brand name only adds risk when other warning signs are present, so a clean email that mentions PayPal isn't flagged.",
          },
        ],
      },
      {
        title: "Failures and security",
        columns: 2,
        cards: [
          {
            label: "Broke",
            title: "Auth on startup",
            text: "dotenv loaded after the auth module, so JWT settings were missing.",
          },
          {
            label: "Broke",
            title: "VirusTotal",
            text: "Results came back before the scan finished, so I now check the analysis status and poll up to five times, five seconds apart.",
          },
          {
            title: "When things fail",
            text: "Calls to the Flask service time out after 60 seconds and return a failure instead of throwing, so Express falls back to rules only. A Gemini failure leaves the explanation empty, but the scan is still saved.",
          },
          {
            title: "Security and data",
            text: "Passwords are hashed with bcrypt and sessions use JWTs that expire after 7 days. The auth middleware loads the user on every request, every threat and stats query is filtered by user, and admin routes sit behind a separate role check. URLs and emails are length-limited.",
          },
        ],
      },
      {
        title: "Next",
        columns: 1,
        cards: [
          {
            wide: true,
            title: "What I'd improve next",
            text: 'Return an "inconclusive" result when VirusTotal doesn\'t finish, instead of a low score. Add rate limiting to the analyze endpoints. Evaluate the classifier on real phishing emails. Add automated tests. The rules are English-only keyword lists, so they are easy to evade.',
          },
        ],
      },
    ],
  },
  {
    id: "support-portal",
    tone: "portal",
    kicker: "Work project · Terafence Limited",
    name: "Support Portal",
    badge: "In development",
    summary:
      "An internal support platform with separate customer and agent portals, built on Next.js and an Express and PostgreSQL API.",
    problem: "Support teams need one place to assign, track and escalate tickets.",
    role: "Software Developer Trainee, building the platform across the Next.js frontend and the Express API.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Express", "PostgreSQL"],
    links: [],
    note: "Internal company project, so there is no public link.",
    tiles: [
      { title: "Auto-assign", text: "Least busy agent gets the ticket" },
      { title: "L1 to L3", text: "Escalation, L2 verifies closure" },
      { title: "Live chat", text: "Customer and agent updates" },
      { title: "Guide bot", text: "Quick fixes, then an agent" },
    ],
    deepDive: [
      {
        title: "Tickets and roles",
        columns: 3,
        cards: [
          {
            title: "Tickets",
            text: "Customers and agents can both create and raise tickets. A new ticket is assigned automatically to the least busy agent, and priority and status are tracked with the ticket's details.",
          },
          {
            title: "Roles and escalation",
            text: "Four levels: L1, L2, L3 and Super Admin. L1 resolves a ticket, L2 verifies it before closure, and an unresolved ticket moves up to the next level.",
          },
          {
            title: "Live dashboard",
            text: "The agent dashboard updates live by polling, with a chat between the customer and the agent for regular updates.",
          },
        ],
      },
      {
        title: "Customer experience",
        columns: 3,
        cards: [
          {
            title: "Notifications",
            text: "In-app notifications for new messages, status changes and resolution, plus email updates sent for specific events.",
          },
          {
            title: "Guide bot",
            text: "Customers get a bot that walks them through quick fixes first. If the problem isn't resolved, it escalates to an agent.",
          },
          {
            title: "Follow-up and feedback",
            text: "Follow-up reminders on open tickets, and a feedback and rating flow after closure that agents can see.",
          },
        ],
      },
      {
        title: "Security and reporting",
        columns: 3,
        cards: [
          {
            title: "Security",
            text: "The JWT moved from localStorage to a cookie, roles are enforced on the server instead of trusting the client, and admin status is verified on every report request.",
          },
          {
            title: "Reports",
            text: "An admin Reports module with charts and PDF, JSON and CSV exports by date range.",
          },
          {
            title: "Supervision",
            text: "Superiors can see audit logs, ticket report summaries and each agent's workload.",
          },
        ],
      },
    ],
  },
  {
    id: "wanderlust",
    tone: "wanderlust",
    kicker: "Personal project",
    name: "WanderLust",
    badge: "Live",
    summary: "An Airbnb-style listing and booking platform with reviews and maps.",
    problem: "Listing sites need accounts, ownership rules and reviews that hold together.",
    role: "Solo build: full stack with Express, MongoDB and server-rendered EJS.",
    stack: ["Node.js", "Express", "MongoDB", "EJS", "Passport.js", "Cloudinary", "Leaflet"],
    links: [
      { label: "View live site", href: "https://wanderlust-0dad.onrender.com/", primary: true },
      { label: "Source code", href: "https://github.com/manviig/WanderLust" },
    ],
    note: "Hosted on Render, so the first load can take a few seconds.",
    caption: "Simplified view of the request flow.",
    diagram: {
      id: "wanderlust",
      label:
        "Simplified architecture: the browser gets EJS views from an Express app. Passport.js handles sessions, Joi and custom middleware run before controllers, and controllers use MongoDB and Cloudinary.",
      nodes: [
        { x: 16, y: 115, w: 140, h: 80, rx: 14, title: "Browser", sub: "EJS views" },
        { x: 214, y: 52, w: 160, h: 80, rx: 14, title: "Express routes", sub: "Joi · middleware" },
        { x: 214, y: 178, w: 160, h: 80, rx: 14, title: "Passport.js", sub: "sessions · ownership" },
        { x: 432, y: 115, w: 140, h: 80, rx: 14, title: "Controllers", sub: "MVC · CRUD" },
        { x: 620, y: 60, w: 110, h: 52, rx: 12, title: "MongoDB", small: true },
        { x: 620, y: 198, w: 110, h: 52, rx: 12, title: "Cloudinary", small: true },
      ],
      arrows: [
        "M156 155 C185 155 190 92 212 92",
        "M294 132 L294 176",
        "M374 92 C410 92 410 140 430 148",
        "M572 140 C600 130 600 100 618 90",
        "M572 172 C600 185 600 215 618 224",
      ],
    },
    tiles: [
      { title: "Listings", text: "With reviews and image uploads" },
      { title: "Owner-only", text: "Only the creator edits a listing" },
      { title: "Joi", text: "Every request validated" },
      { title: "MVC", text: "Express, EJS, MongoDB" },
    ],
    deepDive: [
      {
        title: "What I built",
        columns: 3,
        cards: [
          {
            title: "Listings and reviews",
            text: "Create, edit and delete listings with reviews, and images uploaded to Cloudinary through Multer. Only the image URL is stored in MongoDB.",
          },
          {
            title: "Sessions login",
            text: "Passport.js session authentication. Sessions are stored in MongoDB with connect-mongo, so logins survive a restart, and the session cookie is httpOnly and expires after 7 days.",
          },
          {
            title: "RESTful APIs under MVC",
            text: "CRUD APIs with views rendered in EJS. Addresses are geocoded with MapTiler and drawn with Leaflet, and a listing is only re-geocoded when its location changes.",
          },
        ],
      },
      {
        title: "Decisions",
        columns: 2,
        cards: [
          {
            label: "Decision",
            title: "Ownership checks",
            text: "Middleware lets only a listing's creator edit or delete it, and only a review's author delete it. Logged-out visitors are sent to log in and then back to where they were headed.",
          },
          {
            label: "Decision",
            title: "Validate every request",
            text: "Joi checks incoming data before it is saved: ratings must be 1 to 5, prices can't be negative and image URLs must be valid.",
          },
          {
            label: "Decision",
            title: "One place for errors",
            text: "Central error handling instead of per-route handling, with login and ownership checks as shared middleware.",
          },
          {
            label: "Decision",
            title: "No orphaned reviews",
            text: "Deleting a listing also deletes its reviews through a Mongoose hook, and deleting a review removes its reference from the listing.",
          },
        ],
      },
      {
        title: "Next",
        columns: 1,
        cards: [
          {
            wide: true,
            title: "What I'd improve next",
            text: "Return 400 instead of 404 for invalid input, paginate the listings page, and add automated tests.",
          },
        ],
      },
    ],
  },
];
