"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import {
  destinations,
  destinationRegions,
  type Destination,
} from "@/lib/content/destinations";

function DestinationCard({ dest }: { dest: Destination }) {
  return (
    <Link
      href={`/destinations/${dest.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] bg-background transition-colors hover:bg-primary-50"
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <Image
          src={dest.image}
          alt={dest.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute left-4 top-4 rounded-[var(--radius-sm)] bg-white/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground backdrop-blur-sm">
          {dest.region}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h2 className="font-display text-2xl font-semibold text-foreground transition-colors group-hover:text-primary">
            {dest.name}
          </h2>
          <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-[var(--radius-md)] bg-surface text-muted transition-colors group-hover:bg-primary group-hover:text-white">
            <ArrowUpRight size={16} />
          </span>
        </div>
        <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted">
          {dest.summary}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="badge badge-primary">{dest.jobCount}</span>
          {dest.sectors.slice(0, 2).map((sector) => (
            <span
              key={sector}
              className="rounded-[var(--radius-sm)] border border-border px-2 py-0.5 text-[11px] font-medium text-muted"
            >
              {sector}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export function DestinationsExplorer() {
  const [region, setRegion] = useState("All");

  const filtered = useMemo(() => {
    if (region === "All") return destinations;
    return destinations.filter((d) => d.region === region);
  }, [region]);

  const featured = destinations[0];

  return (
    <>
      <section className="section-sm bg-surface">
        <div className="container-custom">
          <Link
            href={`/destinations/${featured.slug}`}
            className="group relative block min-h-[420px] overflow-hidden rounded-[var(--radius-lg)] md:min-h-[480px]"
          >
            <Image
              src={featured.image}
              alt={featured.name}
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/45 to-slate-950/20" />
            <div className="absolute inset-0 flex items-end p-8 md:p-12">
              <div className="max-w-xl text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-light">
                  Featured destination
                </p>
                <h2 className="font-display mt-3 text-4xl font-semibold md:text-5xl">
                  {featured.name}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-white/75 md:text-base">
                  {featured.summary}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <span className="rounded-[var(--radius-sm)] bg-white/15 px-3 py-1.5 text-sm font-medium backdrop-blur-sm">
                    {featured.jobCount}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-white">
                    Explore {featured.shortName}
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container-custom">
          <div className="mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label">All markets</p>
              <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
                Browse by region
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {destinationRegions.map((item) => {
                const active = region === item;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setRegion(item)}
                    className={`rounded-[var(--radius-md)] px-4 py-2 text-sm font-semibold transition-colors ${
                      active
                        ? "bg-primary text-white"
                        : "bg-surface text-muted hover:text-foreground"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((dest) => (
              <DestinationCard key={dest.slug} dest={dest} />
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="mt-10 text-center text-muted">
              No destinations in this region yet.
            </p>
          ) : null}
        </div>
      </section>
    </>
  );
}
