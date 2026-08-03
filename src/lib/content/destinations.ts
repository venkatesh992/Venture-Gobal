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
    slug: "greece",
    name: "Greece",
    shortName: "Greece",
    region: "Europe",
    jobCount: "450+ jobs",
    summary:
      "A booming market for hospitality and tourism professionals, with growing opportunities in IT and healthcare.",
    overview:
      "Greece offers a vibrant lifestyle combined with strong hiring demand, particularly in its world-renowned hospitality sector. The country is also seeing steady growth in tech hubs and healthcare facilities, seeking skilled international talent to meet rising demand.",
    highlights: [
      "Unmatched opportunities in luxury hospitality and tourism",
      "Emerging tech ecosystem with demand for IT specialists",
      "Clear pathways for seasonal and long-term employment",
      "Excellent work-life balance in a Mediterranean setting",
    ],
    sectors: ["Hospitality", "IT", "Healthcare", "Warehouse"],
    topRoles: [
      "Hotel Manager",
      "Executive Chef",
      "Software Engineer",
      "Registered Nurse",
      "Warehouse Manager",
    ],
    visaNotes:
      "EU Blue Card and specific national work visas are available. We assist with employer sponsorship documentation and navigating the local immigration process.",
    livingNotes:
      "Housing varies from bustling mainland cities to picturesque islands. Many hospitality roles include accommodation, making relocation highly accessible.",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "finland",
    name: "Finland",
    shortName: "Finland",
    region: "Europe",
    jobCount: "320+ jobs",
    summary:
      "Leading the way in tech innovation and healthcare excellence, offering high living standards and robust social benefits.",
    overview:
      "Finland consistently ranks among the best places to live, offering excellent working conditions and strong demand for IT professionals, healthcare workers, and logistics experts. The workplace culture emphasizes equality, continuous learning, and work-life balance.",
    highlights: [
      "High demand for specialized IT and healthcare professionals",
      "World-class public services and social security",
      "English is widely spoken in the workplace, especially in tech",
      "Strong focus on employee well-being and flexible working",
    ],
    sectors: ["IT", "Healthcare", "Warehouse", "Hospitality"],
    topRoles: [
      "Systems Administrator",
      "General Practitioner",
      "Logistics Coordinator",
      "Housekeeping Supervisor",
      "IT Support Specialist",
    ],
    visaNotes:
      "Finland offers a fast-track residence permit for specialists. The process is streamlined for highly skilled workers in IT and healthcare.",
    livingNotes:
      "Expect a high standard of living with excellent public infrastructure. Winter readiness is essential, but the serene nature and safety make it highly rewarding.",
    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    shortName: "Netherlands",
    region: "Europe",
    jobCount: "600+ jobs",
    summary:
      "A central European hub for logistics, tech startups, and advanced healthcare systems with competitive expatriate benefits.",
    overview:
      "The Netherlands is a powerhouse in logistics and supply chain management, alongside a thriving tech scene. Employers value innovation, efficiency, and international experience, making it a prime destination for skilled professionals across multiple sectors.",
    highlights: [
      "Europe's premier logistics and inventory management hub",
      "Highly developed tech industry and startup ecosystem",
      "30% tax ruling available for highly skilled migrants",
      "Excellent connectivity and public transportation",
    ],
    sectors: ["Warehouse", "IT", "Healthcare", "Hospitality"],
    topRoles: [
      "Supply Chain Supervisor",
      "Cloud Architect",
      "Physical Therapist",
      "Receptionist",
      "Inventory Analyst",
    ],
    visaNotes:
      "The Highly Skilled Migrant visa is a popular and efficient pathway, heavily supported by recognized employer sponsors.",
    livingNotes:
      "Housing in major cities like Amsterdam or Rotterdam is highly competitive. We recommend leveraging employer assistance for initial accommodation.",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "poland",
    name: "Poland",
    shortName: "Poland",
    region: "Europe",
    jobCount: "550+ jobs",
    summary:
      "One of Europe's fastest-growing economies, driving massive demand in IT, warehousing, and healthcare services.",
    overview:
      "Poland has emerged as a major destination for tech hubs and multinational logistics centers. With competitive living costs and a rapidly modernizing infrastructure, it offers excellent career progression opportunities for ambitious professionals.",
    highlights: [
      "Rapidly expanding IT and software development sectors",
      "Major European distribution and warehouse centers",
      "Favorable cost of living compared to Western Europe",
      "Vibrant cities with rich cultural heritage",
    ],
    sectors: ["IT", "Warehouse", "Healthcare", "Hospitality"],
    topRoles: [
      "Cybersecurity Specialist",
      "Forklift Operator",
      "Medical Laboratory Technician",
      "Food & Beverage Director",
      "Software Engineer",
    ],
    visaNotes:
      "Work permits are employer-sponsored. The process is well-established, though processing times can vary depending on the voivodeship (region).",
    livingNotes:
      "Cities like Warsaw, Krakow, and Wroclaw offer modern amenities at very accessible prices. English is commonly used in corporate environments.",
    image:
      "https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "germany",
    name: "Germany",
    shortName: "Germany",
    region: "Europe",
    jobCount: "800+ jobs",
    summary:
      "Europe’s largest economy with robust demand for healthcare professionals, IT experts, and logistics managers.",
    overview:
      "Germany offers long-term stability and excellent social protections. The country is actively recruiting international talent to fill critical shortages in nursing, engineering, tech, and supply chain operations, supported by new, favorable immigration laws.",
    highlights: [
      "Massive demand for registered nurses and care workers",
      "Strong industrial base driving IT and logistics hiring",
      "New Opportunity Card (Chancenkarte) for job seekers",
      "High job security and comprehensive employee benefits",
    ],
    sectors: ["Healthcare", "IT", "Warehouse", "Hospitality"],
    topRoles: [
      "Registered Nurse",
      "Data Analyst",
      "Warehouse Manager",
      "Hotel Manager",
      "Care Worker",
    ],
    visaNotes:
      "Recent immigration reforms have simplified the process for skilled workers, making it easier to obtain the EU Blue Card or a national work visa.",
    livingNotes:
      "Regional differences are significant. While Berlin offers a diverse tech scene, cities like Munich and Frankfurt are financial and industrial hubs. German language skills are highly beneficial.",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1600&q=80",
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
