import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageCTA, PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Find Jobs",
  description:
    "Browse overseas job openings across the Gulf, Europe, North America, and Asia-Pacific with VG Recruitment.",
};

const jobs = [
  {
    title: "Electrical Engineer",
    company: "Al Maya Energy",
    country: "United Arab Emirates",
    salary: "$4,500 / mo",
    type: "Full-time",
    isUrgent: true,
    slug: "electrical-engineer-uae",
  },
  {
    title: "Registered Nurse",
    company: "Saudi Health Services",
    country: "Saudi Arabia",
    salary: "$3,200 / mo",
    type: "Contract",
    isUrgent: false,
    slug: "registered-nurse-sa",
  },
  {
    title: "IT Specialist",
    company: "MapleTech",
    country: "Canada",
    salary: "$5,000 / mo",
    type: "Full-time",
    isUrgent: false,
    slug: "it-specialist-canada",
  },
  {
    title: "Construction Supervisor",
    company: "Qatar Builders",
    country: "Qatar",
    salary: "$2,800 / mo",
    type: "Full-time",
    isUrgent: true,
    slug: "construction-worker-qatar",
  },
  {
    title: "Executive Chef",
    company: "London Gourmet",
    country: "United Kingdom",
    salary: "$3,500 / mo",
    type: "Contract",
    isUrgent: false,
    slug: "chef-uk",
  },
  {
    title: "Accountant",
    company: "Sydney Finance",
    country: "Australia",
    salary: "$4,200 / mo",
    type: "Full-time",
    isUrgent: false,
    slug: "accountant-australia",
  },
];

export default function FindJobsPage() {
  return (
    <>
      <PageHero
        label="Jobs"
        title="Find overseas roles that fit"
        description="Explore openings with verified employers. Apply with guidance on documents, interviews, and visas."
        actions={
          <Link href="/contact" className="btn btn-lg btn-primary">
            Get placement help
          </Link>
        }
      />

      <section className="section bg-surface">
        <div className="container-custom">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <p className="text-[15px] text-muted">
              Showing {jobs.length} featured openings
            </p>
            <Link href="/services/job-placement" className="text-sm font-semibold text-primary">
              How placement works
            </Link>
          </div>

          <ul className="space-y-3">
            {jobs.map((job) => (
              <li key={job.slug}>
                <Link
                  href={`/jobs/${job.slug}`}
                  className="group flex flex-col gap-4 rounded-[var(--radius-lg)] bg-background px-5 py-5 transition-colors hover:bg-primary-50 sm:flex-row sm:items-center sm:px-6 md:py-6"
                >
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <h2 className="font-display text-xl font-semibold text-foreground group-hover:text-primary">
                        {job.title}
                      </h2>
                      {job.isUrgent ? (
                        <span className="badge badge-urgent">Urgent</span>
                      ) : null}
                    </div>
                    <p className="text-sm text-muted">
                      {job.company} · {job.country}
                    </p>
                  </div>
                  <div className="flex items-center gap-5">
                    <span className="text-sm font-semibold">{job.salary}</span>
                    <span className="badge badge-primary hidden sm:inline-flex">
                      {job.type}
                    </span>
                    <span className="grid h-10 w-10 place-items-center rounded-[var(--radius-md)] bg-surface text-muted group-hover:bg-primary group-hover:text-white">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PageCTA
        title="Don’t see the right role yet?"
        description="Share your profile and preferred countries — we’ll match you to openings as they open."
      />
    </>
  );
}
