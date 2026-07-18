import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageCTA, PageHero } from "@/components/ui/PageHero";

const jobs = [
  {
    title: "Electrical Engineer",
    company: "Al Maya Energy",
    country: "United Arab Emirates",
    salary: "$4,500 / month",
    type: "Full-time",
    isUrgent: true,
    slug: "electrical-engineer-uae",
    description:
      "Join an energy projects team supporting installation, maintenance, and compliance for commercial electrical systems.",
    requirements: [
      "Diploma/degree in electrical engineering",
      "3+ years relevant site experience",
      "Willingness to relocate to the UAE",
    ],
  },
  {
    title: "Registered Nurse",
    company: "Saudi Health Services",
    country: "Saudi Arabia",
    salary: "$3,200 / month",
    type: "Contract",
    isUrgent: false,
    slug: "registered-nurse-sa",
    description:
      "Provide patient care in a hospital setting with structured onboarding and relocation support.",
    requirements: [
      "Valid nursing license",
      "Hospital experience preferred",
      "English communication skills",
    ],
  },
  {
    title: "IT Specialist",
    company: "MapleTech",
    country: "Canada",
    salary: "$5,000 / month",
    type: "Full-time",
    isUrgent: false,
    slug: "it-specialist-canada",
    description:
      "Support systems administration and end-user operations for a growing technology services team.",
    requirements: [
      "IT diploma or equivalent experience",
      "Hands-on systems support background",
      "Ready for Canadian workplace onboarding",
    ],
  },
  {
    title: "Construction Supervisor",
    company: "Qatar Builders",
    country: "Qatar",
    salary: "$2,800 / month",
    type: "Full-time",
    isUrgent: true,
    slug: "construction-worker-qatar",
    description:
      "Supervise site crews, quality checks, and daily progress reporting on active construction projects.",
    requirements: [
      "Supervisory construction experience",
      "Safety-first site leadership",
      "Ability to manage multi-trade crews",
    ],
  },
  {
    title: "Executive Chef",
    company: "London Gourmet",
    country: "United Kingdom",
    salary: "$3,500 / month",
    type: "Contract",
    isUrgent: false,
    slug: "chef-uk",
    description:
      "Lead kitchen operations for a hospitality brand focused on quality, consistency, and team development.",
    requirements: [
      "Proven chef / kitchen leadership experience",
      "Menu planning and cost control skills",
      "Right-to-work pathway via eligible employer",
    ],
  },
  {
    title: "Accountant",
    company: "Sydney Finance",
    country: "Australia",
    salary: "$4,200 / month",
    type: "Full-time",
    isUrgent: false,
    slug: "accountant-australia",
    description:
      "Handle reporting, reconciliations, and financial operations support within a professional services environment.",
    requirements: [
      "Accounting qualification or equivalent",
      "Hands-on reporting experience",
      "Strong attention to detail",
    ],
  },
];

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = jobs.find((item) => item.slug === slug);
  if (!job) return { title: "Job" };
  return {
    title: `${job.title} · ${job.country}`,
    description: job.description,
  };
}

export default async function JobDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const job = jobs.find((item) => item.slug === slug);
  if (!job) notFound();

  return (
    <>
      <PageHero
        label={`${job.country} · ${job.type}`}
        title={job.title}
        description={`${job.company} — ${job.salary}`}
        actions={
          <>
            <Link href="/contact" className="btn btn-lg btn-primary">
              Apply / enquire
            </Link>
            <Link
              href="/find-jobs"
              className="btn btn-lg border border-white/25 bg-white/5 text-white hover:bg-white/10"
            >
              Back to jobs
            </Link>
          </>
        }
      />

      <section className="section bg-surface">
        <div className="container-custom grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <h2 className="font-display text-3xl font-semibold text-foreground">
              Role overview
            </h2>
            <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-muted">
              {job.description}
            </p>
            <h3 className="font-display mt-10 text-2xl font-semibold text-foreground">
              Requirements
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] text-muted">
              {job.requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <aside className="h-fit rounded-[var(--radius-lg)] bg-background p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Quick facts
            </p>
            <dl className="mt-5 space-y-4 text-[15px]">
              <div>
                <dt className="text-muted">Company</dt>
                <dd className="mt-1 font-medium text-foreground">{job.company}</dd>
              </div>
              <div>
                <dt className="text-muted">Location</dt>
                <dd className="mt-1 font-medium text-foreground">{job.country}</dd>
              </div>
              <div>
                <dt className="text-muted">Salary</dt>
                <dd className="mt-1 font-medium text-foreground">{job.salary}</dd>
              </div>
              <div>
                <dt className="text-muted">Type</dt>
                <dd className="mt-1 font-medium text-foreground">{job.type}</dd>
              </div>
            </dl>
            <Link href="/services/visa-assistance" className="btn btn-secondary mt-8 w-full">
              Visa support
            </Link>
          </aside>
        </div>
      </section>

      <PageCTA
        title="Interested in this role?"
        description="Contact us with your CV and preferred timeline — we’ll guide screening, documents, and next steps."
      />
    </>
  );
}
