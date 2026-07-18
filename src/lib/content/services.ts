import {
  FileCheck2,
  MessagesSquare,
  Plane,
  Scale,
  BriefcaseBusiness,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  icon: LucideIcon;
  outcomes: string[];
  process: { title: string; detail: string }[];
  whoFor: string[];
};

export const services: Service[] = [
  {
    slug: "visa-assistance",
    title: "Visa Assistance",
    shortTitle: "Visas",
    summary:
      "Clear guidance through work visa applications, documentation checks, and embassy-ready submissions.",
    description:
      "Moving abroad for work means getting the visa right the first time. We help you understand requirements for your destination, prepare a complete file, and stay on track through submission and follow-ups — so delays and rejections are less likely.",
    icon: Scale,
    outcomes: [
      "Requirement checklist tailored to your country and role",
      "Document readiness review before submission",
      "Guidance on forms, timelines, and next steps",
      "Support through queries and status updates",
    ],
    process: [
      {
        title: "Profile & destination review",
        detail:
          "We confirm your offer, nationality, and destination rules so the visa path is clear.",
      },
      {
        title: "Document preparation",
        detail:
          "You get a structured checklist and review before anything is submitted.",
      },
      {
        title: "Application support",
        detail:
          "We guide filing, appointments, and follow-ups until a decision is reached.",
      },
    ],
    whoFor: [
      "Candidates with a job offer abroad",
      "Applicants switching countries or visa types",
      "Families coordinating dependent visas where applicable",
    ],
  },
  {
    slug: "document-processing",
    title: "Document Processing",
    shortTitle: "Documents",
    summary:
      "Attestation, verification, and file organization for overseas employment paperwork.",
    description:
      "Overseas employers and embassies expect clean, complete documentation. We help you organize certificates, experience letters, medicals, and attestations so your file is consistent, professional, and ready for review.",
    icon: FileCheck2,
    outcomes: [
      "Ordered document checklist by destination",
      "Support for attestation and verification steps",
      "Naming and packaging standards employers expect",
      "Fewer back-and-forth requests from recruiters",
    ],
    process: [
      {
        title: "File audit",
        detail:
          "We review what you already have and flag gaps, expiry issues, or format problems.",
      },
      {
        title: "Processing plan",
        detail:
          "You get a step-by-step plan for attestation, translations, and medicals if needed.",
      },
      {
        title: "Final pack",
        detail:
          "Your documents are organized into a submission-ready set for employer or embassy use.",
      },
    ],
    whoFor: [
      "First-time overseas applicants",
      "Candidates with multi-country work history",
      "Anyone facing repeated document rejection loops",
    ],
  },
  {
    slug: "interview-preparation",
    title: "Interview Preparation",
    shortTitle: "Interviews",
    summary:
      "Role-specific coaching so you present confidently to international employers.",
    description:
      "International interviews test skills, communication, and readiness to relocate. We help you prepare answers, practice common scenarios, and present your experience clearly for the market you are targeting.",
    icon: MessagesSquare,
    outcomes: [
      "Role and country-specific interview brief",
      "Practice on technical and behavioral questions",
      "Feedback on clarity, confidence, and structure",
      "Tips for remote and in-person interview formats",
    ],
    process: [
      {
        title: "Role briefing",
        detail:
          "We align on the job description, employer expectations, and your strongest examples.",
      },
      {
        title: "Mock interviews",
        detail:
          "Practice sessions cover technical depth, communication, and relocation questions.",
      },
      {
        title: "Final polish",
        detail:
          "You leave with refined answers, questions to ask, and a calm interview plan.",
      },
    ],
    whoFor: [
      "Shortlisted candidates preparing for employer calls",
      "Professionals returning to interviews after a break",
      "Applicants targeting Gulf, Europe, or North America roles",
    ],
  },
  {
    slug: "career-counselling",
    title: "Career Counselling",
    shortTitle: "Counselling",
    summary:
      "Honest advice on where your skills fit, which countries are realistic, and what to improve.",
    description:
      "Not every role or country is the right next move. Our counselling sessions help you assess options, salary expectations, upskilling needs, and a practical plan — before you commit time and money to applications.",
    icon: BriefcaseBusiness,
    outcomes: [
      "Skills and market fit assessment",
      "Destination shortlist with rationale",
      "Gap analysis for training or certifications",
      "A clear action plan for the next 30–90 days",
    ],
    process: [
      {
        title: "Discovery session",
        detail:
          "We review your background, goals, constraints, and preferred destinations.",
      },
      {
        title: "Options mapping",
        detail:
          "You see realistic pathways across roles, countries, and timelines.",
      },
      {
        title: "Action plan",
        detail:
          "We define next steps: applications, training, documents, or interview prep.",
      },
    ],
    whoFor: [
      "Candidates unsure which country to target",
      "Professionals planning a career switch abroad",
      "Applicants who want a second opinion before applying",
    ],
  },
  {
    slug: "job-placement",
    title: "Job Placement",
    shortTitle: "Placement",
    summary:
      "Matching your profile to verified overseas openings and guiding you through offers.",
    description:
      "We work with partner employers across key destination markets. From profile matching to offer discussion, we help you pursue roles that fit your skills — with transparency on packages, timelines, and requirements.",
    icon: Plane,
    outcomes: [
      "Matched openings based on skills and preferences",
      "Introduction to verified employer partners",
      "Guidance through screening and offer stages",
      "Coordination with visa and document support",
    ],
    process: [
      {
        title: "Profile intake",
        detail:
          "We capture skills, experience, salary expectations, and destination preferences.",
      },
      {
        title: "Matching & applications",
        detail:
          "Relevant openings are shared and applications are coordinated with employers.",
      },
      {
        title: "Offer to onboarding",
        detail:
          "We support offer review and hand off cleanly into visa and departure prep.",
      },
    ],
    whoFor: [
      "Skilled workers seeking overseas employment",
      "Candidates ready to apply within weeks",
      "Professionals targeting specific industries abroad",
    ],
  },
  {
    slug: "pre-departure-support",
    title: "Pre-Departure Support",
    shortTitle: "Pre-departure",
    summary:
      "Practical briefing before you fly — culture, workplace norms, packing, and first-week readiness.",
    description:
      "Getting the job is only half the journey. Pre-departure support helps you arrive prepared: what to expect at work, how to handle the first weeks, and how to avoid common mistakes new overseas hires make.",
    icon: GraduationCap,
    outcomes: [
      "Country and workplace orientation",
      "Travel and packing checklist",
      "First-week settling guidance",
      "Links to training courses where needed",
    ],
    process: [
      {
        title: "Departure briefing",
        detail:
          "Cover travel docs, arrival steps, and employer onboarding expectations.",
      },
      {
        title: "Culture & workplace tips",
        detail:
          "Learn practical norms for your destination so you start confidently.",
      },
      {
        title: "Handover",
        detail:
          "You leave with contacts, checklists, and optional training recommendations.",
      },
    ],
    whoFor: [
      "Candidates with a confirmed start date abroad",
      "First-time international workers",
      "Anyone wanting structured departure preparation",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs() {
  return services.map((service) => service.slug);
}
