import { Monitor, HeartPulse, HardHat, Factory, Utensils, Briefcase } from "lucide-react";

export type IndustryData = {
  id: string;
  name: string;
  icon: any;
  description: string;
  heroImage: string;
  badge?: string;
  roles: { title: string; demand: string }[];
  whyUs: string[];
};

export const industriesData: Record<string, IndustryData> = {
  it: {
    id: "it",
    name: "Information Technology",
    icon: Monitor,
    description: "Connect with global tech hubs. We place top-tier software engineers, data scientists, and IT specialists in competitive roles worldwide.",
    heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1920&q=80",
    roles: [
      { title: "Software Engineer", demand: "High" },
      { title: "Data Scientist", demand: "Very High" },
      { title: "DevOps Engineer", demand: "High" },
      { title: "IT Project Manager", demand: "Medium" },
      { title: "Cybersecurity Analyst", demand: "High" },
      { title: "Cloud Architect", demand: "Very High" },
    ],
    whyUs: [
      "Access to exclusive tech roles before they are advertised globally.",
      "Technical pre-screening to ensure your skills perfectly match employer expectations.",
      "Comprehensive visa support for highly skilled worker categories (H-1B, Tier 2, etc.).",
    ]
  },
  healthcare: {
    id: "healthcare",
    name: "Healthcare",
    icon: HeartPulse,
    description: "Making a difference on a global scale. We support medical professionals in securing lucrative and fulfilling roles in top international healthcare systems.",
    heroImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1920&q=80",
    badge: "250+ Openings",
    roles: [
      { title: "Registered Nurse (RN)", demand: "Critical" },
      { title: "Specialist Physician", demand: "High" },
      { title: "Medical Laboratory Technician", demand: "High" },
      { title: "Radiologist", demand: "Medium" },
      { title: "Healthcare Administrator", demand: "Medium" },
      { title: "Pharmacist", demand: "High" },
    ],
    whyUs: [
      "End-to-end credentialing and licensing support for international medical boards.",
      "Family relocation packages negotiated directly with top hospitals.",
      "Direct placements in countries with critical healthcare shortages, ensuring fast-track visas.",
    ]
  },
  construction: {
    id: "construction",
    name: "Construction",
    icon: HardHat,
    description: "Build the future across borders. From project managers to skilled trades, we place construction professionals in high-growth infrastructure markets.",
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80",
    badge: "Urgent Hiring",
    roles: [
      { title: "Civil Engineer", demand: "High" },
      { title: "Construction Project Manager", demand: "Very High" },
      { title: "HVAC Technician", demand: "Critical" },
      { title: "Site Supervisor", demand: "High" },
      { title: "Heavy Equipment Operator", demand: "Medium" },
      { title: "Electrician", demand: "High" },
    ],
    whyUs: [
      "Placements in mega-projects across the Middle East, North America, and Europe.",
      "Support with converting local certifications to international standards.",
      "Transparent contract terms with fully vetted global contractors.",
    ]
  },
  manufacturing: {
    id: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    description: "Driving global industry forward. We source precision engineers, plant managers, and supply chain experts for state-of-the-art manufacturing facilities.",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80",
    roles: [
      { title: "Mechanical Engineer", demand: "High" },
      { title: "Plant Manager", demand: "Medium" },
      { title: "Quality Control Inspector", demand: "High" },
      { title: "Supply Chain Manager", demand: "High" },
      { title: "CNC Operator", demand: "Very High" },
      { title: "Industrial Designer", demand: "Medium" },
    ],
    whyUs: [
      "Connections with advanced manufacturing and automotive hubs globally.",
      "Career progression mapping from technical roles to management.",
      "Comprehensive support for cross-border logistics and settling in.",
    ]
  },
  hospitality: {
    id: "hospitality",
    name: "Hospitality",
    icon: Utensils,
    description: "Deliver world-class service. We place culinary experts and hotel management professionals in premium resorts and luxury properties worldwide.",
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80",
    roles: [
      { title: "Executive Chef", demand: "High" },
      { title: "Hotel General Manager", demand: "Medium" },
      { title: "Food & Beverage Director", demand: "High" },
      { title: "Front Office Manager", demand: "Medium" },
      { title: "Sommelier", demand: "Medium" },
      { title: "Events Coordinator", demand: "High" },
    ],
    whyUs: [
      "Exclusive partnerships with 5-star hotel chains and luxury cruise lines.",
      "Tailored interview coaching for international hospitality standards.",
      "Assistance with seasonal and long-term hospitality visas.",
    ]
  },
  finance: {
    id: "finance",
    name: "Finance",
    icon: Briefcase,
    description: "Navigate global markets. We connect financial analysts, accountants, and corporate finance leaders with top international firms.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80",
    roles: [
      { title: "Financial Analyst", demand: "High" },
      { title: "Chartered Accountant", demand: "Very High" },
      { title: "Investment Banker", demand: "Medium" },
      { title: "Risk Manager", demand: "High" },
      { title: "Compliance Officer", demand: "High" },
      { title: "Corporate Treasurer", demand: "Medium" },
    ],
    whyUs: [
      "Direct lines to major financial hubs: London, New York, Dubai, Singapore.",
      "Expertise in placing candidates with international accounting certifications (ACCA, CPA).",
      "Discreet and highly professional recruitment process.",
    ]
  },
};
