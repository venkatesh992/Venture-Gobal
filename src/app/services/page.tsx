import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageCTA, PageHero } from "@/components/ui/PageHero";
import { services } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Visa assistance, document processing, interview prep, career counselling, and job placement support from VG Recruitment.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Everything you need for a confident move abroad"
        description="From matching and interviews to visas, documents, and departure prep — one team guiding each stage."
        actions={
          <>
            <Link href="/contact" className="btn btn-lg btn-primary">
              Talk to us
            </Link>
            <Link
              href="/find-jobs"
              className="btn btn-lg border border-white/25 bg-white/5 text-white hover:bg-white/10"
            >
              Browse jobs
            </Link>
          </>
        }
      />

      <section className="section bg-surface">
        <div className="container-custom">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex flex-col rounded-[var(--radius-lg)] bg-background p-7 transition-colors hover:bg-primary-50 md:p-8"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-[var(--radius-md)] bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon size={22} />
                  </span>
                  <h2 className="font-display mt-6 text-2xl font-semibold text-foreground transition-colors group-hover:text-primary">
                    {service.title}
                  </h2>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                    {service.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Learn more
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <PageCTA
        title="Not sure which service you need?"
        description="Tell us your situation — we’ll recommend the right path across jobs, visas, documents, and training."
      />
    </>
  );
}
