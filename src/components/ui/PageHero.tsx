import Link from "next/link";

type PageHeroProps = {
  label?: string;
  title: string;
  description?: string;
  actions?: React.ReactNode;
};

export function PageHero({ label, title, description, actions }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border-light bg-secondary text-white">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 80% at 90% 0%, rgba(37,99,235,0.4), transparent 55%), radial-gradient(ellipse 50% 60% at 0% 100%, rgba(37,99,235,0.15), transparent 50%)",
        }}
      />
      <div className="container-custom relative py-16 md:py-20 lg:py-24">
        {label ? (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-primary-light">
            {label}
          </p>
        ) : null}
        <h1 className="font-display max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            {description}
          </p>
        ) : null}
        {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </section>
  );
}

type SectionHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
};

export function SectionHeader({
  label,
  title,
  description,
  action,
}: SectionHeaderProps) {
  return (
    <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        {label ? <p className="section-label">{label}</p> : null}
        <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 text-[15px] leading-relaxed text-muted">{description}</p>
        ) : null}
      </div>
      {action}
    </div>
  );
}

export function PageCTA({
  title = "Ready to take the next step?",
  description = "Talk to our team about jobs, visas, training, or your destination plan.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="section bg-background">
      <div className="container-custom">
        <div className="overflow-hidden rounded-[var(--radius-lg)] bg-primary px-8 py-12 text-white md:px-12 md:py-14">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
              {title}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-white/80">
              {description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-lg btn-on-dark">
                Contact us
              </Link>
              <Link
                href="/find-jobs"
                className="btn btn-lg border border-white/30 bg-transparent text-white hover:bg-white/10"
              >
                Browse jobs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
