import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, FileText, Home, Plane } from "lucide-react";
import { PageCTA } from "@/components/ui/PageHero";
import {
  getAllDestinationSlugs,
  getDestinationBySlug,
  getRelatedDestinations,
} from "@/lib/content/destinations";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllDestinationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const dest = getDestinationBySlug(slug);
  if (!dest) return { title: "Destination" };
  return {
    title: `${dest.name} Jobs & Relocation`,
    description: dest.summary,
  };
}

export default async function DestinationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const dest = getDestinationBySlug(slug);
  if (!dest) notFound();

  const related = getRelatedDestinations(dest.slug);

  return (
    <>
      {/* Cinematic country hero */}
      <section className="relative -mt-[72px] flex min-h-[78svh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={dest.image}
            alt={dest.name}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(15,23,42,0.45) 0%, rgba(15,23,42,0.2) 40%, rgba(15,23,42,0.88) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 container-custom w-full pb-14 pt-32 md:pb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-light">
            {dest.region}
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-5xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl">
            {dest.name}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            {dest.summary}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-[var(--radius-md)] bg-white/15 px-3 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              {dest.jobCount}
            </span>
            <Link href={`/find-jobs?country=${encodeURIComponent(dest.name)}`} className="btn btn-primary">
              View jobs in {dest.shortName}
            </Link>
            <Link href="/contact" className="btn btn-ghost-on-dark">
              Ask about relocating
            </Link>
          </div>
        </div>
      </section>

      {/* Overview + highlights */}
      <section className="section bg-surface">
        <div className="container-custom grid gap-12 lg:grid-cols-[1.35fr_0.85fr] lg:gap-16">
          <div>
            <p className="section-label">Overview</p>
            <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
              Working in {dest.shortName}
            </h2>
            <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-muted">
              {dest.overview}
            </p>

            <h3 className="font-display mt-12 text-2xl font-semibold text-foreground">
              Why candidates choose {dest.shortName}
            </h3>
            <ul className="mt-5 space-y-3">
              {dest.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] text-foreground">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit rounded-[var(--radius-lg)] bg-background p-7 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              In-demand sectors
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {dest.sectors.map((sector) => (
                <span
                  key={sector}
                  className="rounded-[var(--radius-md)] border border-border bg-surface px-3 py-1.5 text-sm font-medium text-foreground"
                >
                  {sector}
                </span>
              ))}
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Example roles
            </p>
            <ul className="mt-4 space-y-2.5">
              {dest.topRoles.map((role) => (
                <li
                  key={role}
                  className="border-b border-border-light pb-2.5 text-[15px] text-foreground last:border-0 last:pb-0"
                >
                  {role}
                </li>
              ))}
            </ul>

            <Link
              href={`/find-jobs?country=${encodeURIComponent(dest.name)}`}
              className="btn btn-primary mt-8 w-full"
            >
              Browse {dest.shortName} jobs
            </Link>
          </aside>
        </div>
      </section>

      {/* Visa + living */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="mb-10 max-w-2xl">
            <p className="section-label">Practical details</p>
            <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
              What to know before you move
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[var(--radius-lg)] bg-surface p-7">
              <span className="grid h-11 w-11 place-items-center rounded-[var(--radius-md)] bg-primary/10 text-primary">
                <Plane size={20} />
              </span>
              <h3 className="font-display mt-5 text-xl font-semibold text-foreground">
                Visa pathway
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {dest.visaNotes}
              </p>
              <Link
                href="/services/visa-assistance"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary"
              >
                Visa assistance
                <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="rounded-[var(--radius-lg)] bg-surface p-7">
              <span className="grid h-11 w-11 place-items-center rounded-[var(--radius-md)] bg-primary/10 text-primary">
                <Home size={20} />
              </span>
              <h3 className="font-display mt-5 text-xl font-semibold text-foreground">
                Living & settling
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {dest.livingNotes}
              </p>
              <Link
                href="/services/pre-departure-support"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary"
              >
                Pre-departure support
                <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="rounded-[var(--radius-lg)] bg-surface p-7">
              <span className="grid h-11 w-11 place-items-center rounded-[var(--radius-md)] bg-primary/10 text-primary">
                <FileText size={20} />
              </span>
              <h3 className="font-display mt-5 text-xl font-semibold text-foreground">
                Documents
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                Clean attestation, experience letters, and medicals reduce delays.
                We help you package a submission-ready file for employers and
                embassies.
              </p>
              <Link
                href="/services/document-processing"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary"
              >
                Document processing
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section-sm bg-surface">
        <div className="container-custom">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-semibold text-foreground md:text-3xl">
              Other destinations
            </h2>
            <Link href="/destinations" className="text-sm font-semibold text-primary">
              View all
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/destinations/${item.slug}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)]"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="font-display text-lg font-semibold">{item.name}</h3>
                  <p className="mt-1 text-sm text-white/70">{item.jobCount}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title={`Planning a move to ${dest.name}?`}
        description="We’ll help with role matching, documents, visas, and pre-departure prep for this destination."
      />
    </>
  );
}
