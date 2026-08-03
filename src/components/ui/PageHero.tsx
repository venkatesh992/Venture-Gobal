import Link from "next/link";
import Image from "next/image";

type PageHeroProps = {
  label?: string;
  title: string;
  description?: string;
  actions?: React.ReactNode;
  image?: string;
};

export function PageHero({ 
  label, 
  title, 
  description, 
  actions,
  image = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border-light bg-slate-950 text-white min-h-[40vh] flex flex-col justify-end">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>
      <div className="container-custom relative py-16 md:py-20 lg:py-24 mt-auto">
        {label ? (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-primary-light drop-shadow-md">
            {label}
          </p>
        ) : null}
        <h1 className="font-display max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl drop-shadow-lg">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg font-light drop-shadow-sm">
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
