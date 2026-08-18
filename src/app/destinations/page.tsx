import { CTABanner } from "@/components/home/CTABanner";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { DestinationsExplorer } from "@/components/destinations/DestinationsExplorer";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore overseas job destinations including UAE, Saudi Arabia, Canada, UK, Qatar, and Australia with Venturoedge.",
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        label="Destinations"
        title="Countries where we place talent"
        description="Compare active hiring markets, visa pathways, and the support we provide from offer to arrival."
        actions={
          <>
            <Link
              href="/contact"
              className="btn btn-lg btn-primary"
            >
              Get destination advice
            </Link>
          </>
        }
      />

      <DestinationsExplorer />

      <section className="section-sm bg-surface">
        <div className="container-custom grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Matched to real openings",
              detail:
                "We focus on destinations with active employer demand — not generic wish lists.",
            },
            {
              title: "Visa-aware guidance",
              detail:
                "Every recommendation considers sponsorship, documents, and practical timelines.",
            },
            {
              title: "Support through arrival",
              detail:
                "From interviews to pre-departure briefing, you are not left guessing mid-process.",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border-light bg-white p-6 md:p-8"
            >
              <h3 className="font-display text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}

