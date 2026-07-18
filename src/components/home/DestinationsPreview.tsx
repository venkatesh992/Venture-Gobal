"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { destinations } from "@/lib/content/destinations";

export function DestinationsPreview() {
  const [featured, ...rest] = destinations.slice(0, 4);

  return (
    <section className="section bg-surface">
      <div className="container-custom">
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="section-label">Destinations</p>
            <h2 className="font-display text-3xl font-semibold text-foreground md:text-5xl">
              Where you can go
            </h2>
            <p className="mt-3 text-[15px] text-muted">
              High-demand markets with real hiring pipelines and relocation
              support.
            </p>
          </div>
          <Link
            href="/destinations"
            className="btn btn-secondary shrink-0 self-start sm:self-auto"
          >
            All destinations
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-4 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link
              href={`/destinations/${featured.slug}`}
              className="group relative block min-h-[420px] overflow-hidden rounded-[var(--radius-lg)] lg:h-full"
            >
              <Image
                src={featured.image}
                alt={featured.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-8">
                <h3 className="font-display text-3xl font-semibold">
                  {featured.name}
                </h3>
                <p className="mt-2 text-sm text-white/70">{featured.jobCount}</p>
              </div>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:grid-rows-2">
            {rest.map((dest) => (
              <motion.div
                key={dest.slug}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Link
                  href={`/destinations/${dest.slug}`}
                  className="group relative block aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] sm:aspect-auto sm:h-full sm:min-h-[200px]"
                >
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <h3 className="font-display text-lg font-semibold">
                      {dest.name}
                    </h3>
                    <p className="mt-1 text-sm text-white/70">{dest.jobCount}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
