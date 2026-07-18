"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const mockJobs = [
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

export function FeaturedJobs() {
  return (
    <section className="section bg-background">
      <div className="container-custom">
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="section-label">Openings</p>
            <h2 className="font-display text-3xl font-semibold text-foreground md:text-5xl">
              Roles hiring now
            </h2>
            <p className="mt-3 text-[15px] text-muted">
              Verified employers. Clear packages. Support from application to
              arrival.
            </p>
          </div>
          <Link href="/find-jobs" className="btn btn-secondary shrink-0 self-start sm:self-auto">
            View all roles
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <motion.ul
          className="space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } },
          }}
        >
          {mockJobs.map((job) => (
            <motion.li
              key={job.slug}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link
                href={`/jobs/${job.slug}`}
                className="group flex flex-col gap-4 rounded-[var(--radius-lg)] bg-surface px-5 py-5 transition-colors hover:bg-primary-50 sm:flex-row sm:items-center sm:gap-6 sm:px-6 md:py-6"
              >
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                      {job.title}
                    </h3>
                    {job.isUrgent && (
                      <span className="badge badge-urgent">Urgent</span>
                    )}
                  </div>
                  <p className="text-sm text-muted">
                    {job.company} · {job.country}
                  </p>
                </div>
                <div className="flex items-center gap-5 sm:gap-8">
                  <span className="text-sm font-semibold text-foreground">
                    {job.salary}
                  </span>
                  <span className="badge badge-primary hidden sm:inline-flex">
                    {job.type}
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-[var(--radius-md)] bg-background text-muted transition-colors group-hover:bg-primary group-hover:text-white">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
