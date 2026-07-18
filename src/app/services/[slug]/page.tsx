import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { PageCTA, PageHero } from "@/components/ui/PageHero";
import {
  getAllServiceSlugs,
  getServiceBySlug,
  services,
} from "@/lib/content/services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service" };
  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = service.icon;
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        label="Service"
        title={service.title}
        description={service.summary}
        actions={
          <>
            <Link href="/contact" className="btn btn-lg btn-primary">
              Get started
            </Link>
            <Link
              href="/services"
              className="btn btn-lg border border-white/25 bg-white/5 text-white hover:bg-white/10"
            >
              All services
            </Link>
          </>
        }
      />

      <section className="section bg-surface">
        <div className="container-custom grid gap-12 lg:grid-cols-[1.4fr_0.8fr] lg:gap-16">
          <div>
            <div className="mb-6 grid h-14 w-14 place-items-center rounded-[var(--radius-md)] bg-primary/10 text-primary">
              <Icon size={26} />
            </div>
            <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
              How this helps
            </h2>
            <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-muted">
              {service.description}
            </p>

            <h3 className="font-display mt-12 text-2xl font-semibold text-foreground">
              What you get
            </h3>
            <ul className="mt-5 space-y-3">
              {service.outcomes.map((item) => (
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
              Best for
            </p>
            <ul className="mt-4 space-y-3">
              {service.whoFor.map((item) => (
                <li
                  key={item}
                  className="border-b border-border-light pb-3 text-[15px] text-muted last:border-0 last:pb-0"
                >
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn btn-primary mt-8 w-full">
              Request this service
            </Link>
          </aside>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container-custom">
          <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
            How it works
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {service.process.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[var(--radius-lg)] border border-border-light bg-surface p-6 md:p-7"
              >
                <p className="font-display text-sm font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-4 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm bg-surface">
        <div className="container-custom">
          <h2 className="font-display text-2xl font-semibold text-foreground md:text-3xl">
            Related services
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="rounded-[var(--radius-lg)] bg-background p-6 transition-colors hover:bg-primary-50"
              >
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCTA />
    </>
  );
}
