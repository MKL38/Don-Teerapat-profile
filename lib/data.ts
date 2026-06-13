// Single source of truth for profile content, sourced from Teerapat Futhep's CV.

export const profile = {
  name: "Teerapat Futhep",
  firstName: "Teerapat",
  lastName: "Futhep",
  role: "Project Manager & Business Development",
  tagline:
    "Strategic project management and business development across retail, digital commerce, and aviation.",
  currentPosition: "Senior Business Development — Nok Air",
  location: "Bangkok, Thailand · Open to relocation",
  intro:
    "Dynamic business development professional with experience across aviation, retail, and e-commerce. Proven track record in corporate partnerships, vendor negotiations, platform growth, and leading cross-functional teams. Comfortable working at the intersection of strategy and operations.",
} as const;

export const contact = {
  phone: "087 516 1343",
  phoneIntl: "+66875161343",
  email: "futhepteerapat@gmail.com",
  linkedin: "www.linkedin.com/in/teerapat-futhep",
  linkedinUrl: "https://www.linkedin.com/in/teerapat-futhep",
} as const;

export type Experience = {
  index: string;
  company: string;
  meta: string;
  period: string;
  title: string;
  groups: { heading?: string; points: string[] }[];
};

export const experiences: Experience[] = [
  {
    index: "001",
    company: "Nok Airline",
    meta: "Aviation",
    period: "Sep 2025 — Present",
    title: "Senior Business Development",
    groups: [
      {
        heading: "Corporate Partnership",
        points: [
          "Established and led the customer-redemption collaboration between the airline and partners — distributing lounge passes and air-tickets across retail, real estate, airport, and e-commerce partners.",
        ],
      },
      {
        heading: "Digital Platform Strategy",
        points: [
          "Orchestrated technical requirement gathering and vendor selection for the airline website, including comprehensive cost-benefit analyses to ensure efficient resource allocation and project scalability.",
          "Managed the AI flight-booking feature within the LINE platform — optimizing the digital customer journey and leveraging social-commerce channels to increase conversion and accessibility.",
          "Led end-to-end project implementation: financial feasibility via P&L projection, cost-benefit analysis, and product–market-fit research.",
        ],
      },
      {
        heading: "Internal Administration — Loyalty Program",
        points: [
          "Led the negotiation with Salesforce (CRM) to secure the most competitive proposal and improved pricing for Nok Air's 2026 plan.",
          "Initiated commercial-term negotiation and contract review, reducing proposed costs by removing unused SaaS feature modules.",
          "Prepared the functional requirements and TOR for an alternative CRM SaaS platform as a fallback option.",
        ],
      },
    ],
  },
  {
    index: "002",
    company: "Ascend Commerce, CP Group",
    meta: "E-commerce · Super App",
    period: "2024 — 2025 · 1-year parallel project",
    title: "Project Manager — Business Operation, Amaze Super Application",
    groups: [
      {
        points: [
          "Acted as business analyst to gather product requirements and business-process SOPs from different business units — including 7-Eleven and Lotus's — to integrate unique commerce features into the single Amaze super app.",
          "Conducted in-depth business and operational research to define workflow and functional requirements for on-demand and next-day delivery models.",
          "Executed UAT and staff training for order management — both happy- and unhappy-case — across 14,000 stores countrywide.",
          "Analyzed UX/UI requirements of in-store operations and ran countrywide store ramp-up, ensuring store and O2O operations met each business unit's SLA standard.",
        ],
      },
    ],
  },
  {
    index: "003",
    company: "CP Axtra (Makro & Lotus's), CP Group",
    meta: "Retail · B2B",
    period: "2022 — 2025 · 3 years",
    title: "Sponsor & Project Manager — Business Development Lead",
    groups: [
      {
        heading: "Business Development Lead — promoted to team lead",
        points: [
          "Led the junior business-development team across Suphanburi province.",
          "Led and mentored 10 junior business-development executives across multiple sales districts.",
          "Assessed individual performance and career progression, and conducted quarterly recruitment for junior BD positions.",
          "Presented business-development performance reviews and strategic proposals to Makro and CP Group executives quarterly.",
        ],
      },
      {
        heading: "Business Development Executive — Leadership Program",
        points: [
          "Participated in the CP leadership program; trained on-ground in active sales strategy and account management across all customer tiers.",
          "Engaged HORECA clients to build relationships and drive sales initiatives within assigned territories.",
          "Operated across both urban and upcountry markets — Bangkok, Chiang Mai, and Saraburi.",
        ],
      },
    ],
  },
];

export const skillGroups: { index: string; title: string; items: string[] }[] = [
  {
    index: "001",
    title: "Proficiency",
    items: [
      "Strategic project management — retail, digital retail & airline",
      "Business development & sales — B2B clients, corporate partners",
      "Market research & customer segmentation — upcountry & BKK",
      "Strategic framework development",
      "KPI & financial tracking",
      "Analytical thinking",
      "AI literacy",
    ],
  },
  {
    index: "002",
    title: "Data Analysis & Visualization",
    items: ["Excel", "SQL", "Generative AI"],
  },
  {
    index: "003",
    title: "Programming",
    items: ["HTML", "CSS", "Tailwind CSS", "React.js", "Git / GitHub"],
  },
];

export const facts: { label: string; value: string }[] = [
  { label: "Age", value: "27" },
  { label: "Nationality", value: "Thai" },
  { label: "Location", value: "Bangkok — willing to relocate" },
  { label: "TOEIC", value: "745" },
];

export const education = {
  institution: "King Mongkut's Institute of Technology Ladkrabang",
  degree: "Bachelor of Business Administration (BBA)",
  school: "KMITL Business School",
  period: "2018 — 2022",
} as const;
