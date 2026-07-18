export type Destination = {
  slug: string;
  name: string;
  shortName: string;
  region: string;
  jobCount: string;
  summary: string;
  overview: string;
  highlights: string[];
  sectors: string[];
  topRoles: string[];
  visaNotes: string;
  livingNotes: string;
  image: string;
};

export const destinations: Destination[] = [
  {
    slug: "uae",
    name: "United Arab Emirates",
    shortName: "UAE",
    region: "Middle East",
    jobCount: "500+ jobs",
    summary:
      "Strong demand across energy, hospitality, healthcare, and construction — with competitive packages and clear employer sponsorship.",
    overview:
      "The UAE remains one of the most active destinations for skilled overseas talent. Dubai and Abu Dhabi lead hiring across infrastructure, hospitality, healthcare, and professional services, with established relocation pathways and tax-friendly compensation for many roles.",
    highlights: [
      "High demand in engineering, nursing, and hospitality",
      "Tax-friendly salary structures for many roles",
      "Clear work visa processes with employer sponsorship",
      "Fast screening cycles with multinational employers",
    ],
    sectors: ["Energy", "Healthcare", "Hospitality", "Construction", "IT"],
    topRoles: [
      "Electrical Engineer",
      "Registered Nurse",
      "Hotel Supervisor",
      "Civil Foreman",
      "IT Support Specialist",
    ],
    visaNotes:
      "Most work visas are employer-sponsored. Once you have an offer, we help prepare documents, medicals, and entry requirements so your file moves cleanly.",
    livingNotes:
      "Expect modern city living with high housing costs in prime areas. Many packages include accommodation or an allowance — confirm this before you accept.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "saudi-arabia",
    name: "Saudi Arabia",
    shortName: "KSA",
    region: "Middle East",
    jobCount: "400+ jobs",
    summary:
      "Rapid hiring across healthcare, infrastructure, and industrial projects tied to large-scale national development.",
    overview:
      "Saudi Arabia’s development agenda continues to create openings for skilled professionals in healthcare, construction, engineering, and facilities. Recruitment is typically structured through licensed partners with clear onboarding steps.",
    highlights: [
      "Growing healthcare and construction hiring",
      "Long-term project-based opportunities",
      "Visa and onboarding support through employers",
      "Strong demand for experienced supervisors",
    ],
    sectors: ["Healthcare", "Construction", "Oil & Gas", "Facilities", "Education"],
    topRoles: [
      "Registered Nurse",
      "Site Engineer",
      "HVAC Technician",
      "Project Supervisor",
      "Laboratory Technician",
    ],
    visaNotes:
      "Work authorization is generally tied to your sponsoring employer. Document accuracy and medical clearance are critical before travel.",
    livingNotes:
      "Compounds and employer housing are common for many roles. Cultural norms and workplace expectations should be reviewed in pre-departure briefing.",
    image:
      "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "canada",
    name: "Canada",
    shortName: "Canada",
    region: "North America",
    jobCount: "350+ jobs",
    summary:
      "Skilled pathways in IT, trades, healthcare, and professional services — with longer-term career potential.",
    overview:
      "Canada attracts candidates seeking growth and stability. Employers often prioritize credentials, language readiness, and a realistic relocation plan. Preparation around licensing and documentation makes a measurable difference.",
    highlights: [
      "Demand for IT, nursing, and skilled trades",
      "Strong focus on credentials and language",
      "Longer-term settlement potential for many roles",
      "Structured workplace onboarding culture",
    ],
    sectors: ["IT", "Healthcare", "Trades", "Finance", "Logistics"],
    topRoles: [
      "IT Specialist",
      "Registered Nurse",
      "Welder / Fabricator",
      "Accountant",
      "Warehouse Supervisor",
    ],
    visaNotes:
      "Pathways vary by role and province. We help you understand employer-led options and documentation needed before interviews advance.",
    livingNotes:
      "Cost of living differs widely by city. Winter readiness, healthcare registration, and housing timelines should be planned early.",
    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "uk",
    name: "United Kingdom",
    shortName: "UK",
    region: "Europe",
    jobCount: "300+ jobs",
    summary:
      "Openings in healthcare, hospitality, and specialist professional roles through eligible employer channels.",
    overview:
      "The UK offers established hiring routes for qualified professionals, especially in healthcare and hospitality. Success often depends on meeting role eligibility, language standards, and employer sponsorship criteria.",
    highlights: [
      "Healthcare and hospitality demand",
      "English-language workplace environments",
      "Employer-led sponsorship for eligible roles",
      "Clear professional standards and training culture",
    ],
    sectors: ["Healthcare", "Hospitality", "Social Care", "Engineering", "IT"],
    topRoles: [
      "Registered Nurse",
      "Executive Chef",
      "Care Worker",
      "Mechanical Technician",
      "Software Support Analyst",
    ],
    visaNotes:
      "Eligible sponsored roles require careful matching. We guide document packs and interview prep so you meet employer and compliance expectations.",
    livingNotes:
      "Cities vary sharply in rent and commute times. Many candidates start with employer guidance on temporary housing for the first weeks.",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "qatar",
    name: "Qatar",
    shortName: "Qatar",
    region: "Middle East",
    jobCount: "200+ jobs",
    summary:
      "Ongoing needs in construction, facilities, and service operations — often with housing and transport benefits.",
    overview:
      "Qatar continues to hire for infrastructure, facilities, and service roles. Packages frequently include accommodation or transport support, and screening can move quickly once profiles are shortlisted.",
    highlights: [
      "Construction and facilities hiring",
      "Often includes housing/transport benefits",
      "Fast-moving employer screening cycles",
      "Project-driven demand for supervisors",
    ],
    sectors: ["Construction", "Facilities", "Hospitality", "Logistics", "Security"],
    topRoles: [
      "Construction Supervisor",
      "Electrician",
      "Facilities Technician",
      "Kitchen Supervisor",
      "Store Keeper",
    ],
    visaNotes:
      "Employer sponsorship is standard. Medicals and document attestation should be completed in the right order to avoid delays.",
    livingNotes:
      "Many roles provide shared or company housing. Pre-departure briefings help with workplace norms and first-week arrival steps.",
    image:
      "https://images.unsplash.com/photo-1555881403-7c243adb0c8a?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "australia",
    name: "Australia",
    shortName: "Australia",
    region: "Asia-Pacific",
    jobCount: "250+ jobs",
    summary:
      "Opportunities in finance, trades, healthcare, and hospitality for credential-ready candidates.",
    overview:
      "Australia rewards candidates with the right credentials and relocation readiness. Licensing, skills assessments, and document quality are often decisive — especially for trades and care roles.",
    highlights: [
      "Demand across skilled trades and care",
      "Credential checks are often critical",
      "Lifestyle and long-term career appeal",
      "Strong safety and workplace standards",
    ],
    sectors: ["Trades", "Healthcare", "Hospitality", "Finance", "Agriculture"],
    topRoles: [
      "Accountant",
      "Chef",
      "Aged Care Worker",
      "Electrician",
      "Farm Supervisor",
    ],
    visaNotes:
      "Requirements depend on occupation and pathway. We help map realistic options before you invest heavily in applications.",
    livingNotes:
      "Major cities are competitive for rent. Regional roles may offer faster placement and different lifestyle trade-offs.",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1600&q=80",
  },
];

export const destinationRegions = [
  "All",
  ...Array.from(new Set(destinations.map((d) => d.region))),
];

export function getDestinationBySlug(slug: string) {
  return destinations.find((item) => item.slug === slug);
}

export function getAllDestinationSlugs() {
  return destinations.map((item) => item.slug);
}

export function getRelatedDestinations(slug: string, limit = 3) {
  const current = getDestinationBySlug(slug);
  if (!current) return destinations.slice(0, limit);
  const sameRegion = destinations.filter(
    (d) => d.slug !== slug && d.region === current.region
  );
  const others = destinations.filter(
    (d) => d.slug !== slug && d.region !== current.region
  );
  return [...sameRegion, ...others].slice(0, limit);
}
