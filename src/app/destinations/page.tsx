import type { Metadata } from "next";
import Link from "next/link";
import { PageCTA, PageHero } from "@/components/ui/PageHero";
import { DestinationsExplorer } from "@/components/destinations/DestinationsExplorer";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore overseas job destinations including UAE, Saudi Arabia, Canada, UK, Qatar, and Australia with VG Recruitment.",
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
            <Link href="/find-jobs" className="btn btn-lg btn-primary">
              Browse open roles
            </Link>
            <Link
              href="/contact"
              className="btn btn-lg border border-white/25 bg-white/5 text-white hover:bg-white/10"
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
              className="border-t border-border-light pt-6"
            >
              <p className="font-display text-sm font-semibold text-primary">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display mt-3 text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <PageCTA
        title="Not sure which country fits you?"
        description="Share your skills and constraints — we’ll shortlist destinations that are realistic for your profile."
      />
    </>
  );
}
