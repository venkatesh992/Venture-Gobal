import type { Metadata } from "next";
import Link from "next/link";
import { PageCTA, PageHero, SectionHeader } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about VG Recruitment Agency — how we help skilled professionals find overseas careers with trusted employers.",
};

const values = [
  {
    title: "Clarity over hype",
    detail:
      "We explain requirements, timelines, and trade-offs honestly so you can decide with confidence.",
  },
  {
    title: "Verified pathways",
    detail:
      "We focus on employers and destinations we can support properly — from matching through departure.",
  },
  {
    title: "People, not volume",
    detail:
      "Every profile is reviewed for fit. We would rather guide the right move than rush the wrong one.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About VG"
        title="A recruitment partner for global careers"
        description="VG Recruitment connects skilled professionals with international employers — and stays with you through documents, interviews, visas, and departure."
        actions={
          <>
            <Link href="/contact" className="btn btn-lg btn-primary">
              Contact us
            </Link>
            <Link
              href="/services"
              className="btn btn-lg border border-white/25 bg-white/5 text-white hover:bg-white/10"
            >
              Our services
            </Link>
          </>
        }
      />

      <section className="section bg-surface">
        <div className="container-custom grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="section-label">Our story</p>
            <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
              Built around one idea: make overseas work less uncertain
            </h2>
          </div>
          <div className="space-y-5 text-[16px] leading-relaxed text-muted">
            <p>
              Finding work abroad should not feel like guesswork. Candidates need
              clear roles, honest package information, and practical support for
              paperwork and visas. Employers need reliable talent who are ready
              to relocate.
            </p>
            <p>
              VG Recruitment bridges both sides. We combine job matching with
              the services that make a move possible — counselling, interview
              prep, document processing, visa guidance, and pre-departure
              support.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container-custom">
          <SectionHeader
            label="Values"
            title="How we work"
            description="Simple principles that shape every placement and conversation."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="rounded-[var(--radius-lg)] bg-surface p-7"
              >
                <p className="font-display text-sm font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-4 text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {value.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA />
    </>
  );
}
