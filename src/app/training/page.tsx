import type { Metadata } from "next";
import Link from "next/link";
import { PageCTA, PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Training",
  description:
    "Pre-departure, language, and technical training courses to prepare for overseas employment with VG Recruitment.",
};

const courses = [
  {
    title: "Pre-Departure Orientation",
    category: "Pre-departure",
    duration: "2 days",
    summary:
      "Workplace norms, travel readiness, and first-week settling guidance for your destination.",
  },
  {
    title: "Workplace English Essentials",
    category: "Language",
    duration: "4 weeks",
    summary:
      "Practical communication for interviews, site coordination, and day-to-day work abroad.",
  },
  {
    title: "Safety & Site Readiness",
    category: "Technical",
    duration: "1 week",
    summary:
      "Core safety practices and role-readiness modules for industrial and construction placements.",
  },
  {
    title: "Healthcare Communication",
    category: "Language",
    duration: "3 weeks",
    summary:
      "Patient-facing communication and documentation language for nursing and care roles.",
  },
];

export default function TrainingPage() {
  return (
    <>
      <PageHero
        label="Training"
        title="Prepare before you fly"
        description="Practical courses that strengthen interviews, workplace communication, and departure readiness."
        actions={
          <>
            <Link href="/contact" className="btn btn-lg btn-primary">
              Ask about courses
            </Link>
            <Link
              href="/services/pre-departure-support"
              className="btn btn-lg border border-white/25 bg-white/5 text-white hover:bg-white/10"
            >
              Pre-departure support
            </Link>
          </>
        }
      />

      <section className="section bg-surface">
        <div className="container-custom grid gap-4 md:grid-cols-2">
          {courses.map((course) => (
            <article
              key={course.title}
              className="rounded-[var(--radius-lg)] bg-background p-7 md:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                {course.category}
              </p>
              <h2 className="font-display mt-3 text-2xl font-semibold text-foreground">
                {course.title}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {course.summary}
              </p>
              <p className="mt-6 text-sm font-medium text-foreground">
                Duration: {course.duration}
              </p>
            </article>
          ))}
        </div>
      </section>

      <PageCTA
        title="Need a course recommendation?"
        description="Tell us your target role and country — we’ll suggest the right preparation path."
      />
    </>
  );
}
