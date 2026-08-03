import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Handshake, Briefcase, FileCheck, Plane, Users, Globe2, ChevronRight } from "lucide-react";
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
    title: `Work in ${dest.name} | Premium Opportunities with Venture Global`,
    description: `Secure your next career move in ${dest.name} with Venture Global's end-to-end relocation and recruitment services.`,
  };
}

export default async function DestinationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const dest = getDestinationBySlug(slug);
  if (!dest) notFound();

  const related = getRelatedDestinations(dest.slug);

  return (
    <>
      {/* Premium Cinematic Hero */}
      <section className="relative -mt-[72px] flex min-h-[85svh] flex-col justify-end overflow-hidden pb-12">
        <div className="absolute inset-0">
          <Image
            src={dest.image}
            alt={dest.name}
            fill
            priority
            className="object-cover scale-105 animate-in fade-in zoom-in duration-1000"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/40 to-slate-950/95 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        <div className="relative z-10 container-custom w-full pt-32">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md mb-6">
              Exclusive Opportunities in {dest.region}
            </span>
            
            <h1 className="font-display text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl drop-shadow-lg mb-6">
              Launch Your Career in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-white">{dest.name}</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg leading-relaxed text-slate-300 md:text-xl font-light">
              Skip the bureaucratic maze. Let Venture Global's elite network of employers and visa experts fast-track your relocation to {dest.name}.
            </p>
            
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link 
                href={`/find-jobs?country=${encodeURIComponent(dest.name)}`} 
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-[var(--radius-md)] bg-primary px-10 py-4 text-[15px] font-bold text-white shadow-xl transition-all hover:scale-[1.02] hover:shadow-primary/30"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Apply for {dest.shortName} Roles
                  <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transition-transform duration-500 group-hover:translate-x-full" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Trust Metrics Banner */}
      <div className="border-y border-border bg-surface/50 backdrop-blur-sm relative z-20">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-6 md:gap-8 py-8 md:grid-cols-4 divide-x divide-border-light text-center">
            <div className="flex flex-col items-center justify-center">
              <p className="text-3xl font-display font-bold text-foreground">98%</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted mt-1">Visa Success Rate</p>
            </div>
            <div className="flex flex-col items-center justify-center pl-8">
              <p className="text-3xl font-display font-bold text-foreground">500+</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted mt-1">Candidates Placed</p>
            </div>
            <div className="flex flex-col items-center justify-center pl-8">
              <p className="text-3xl font-display font-bold text-foreground">Top 1%</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted mt-1">Employer Network</p>
            </div>
            <div className="flex flex-col items-center justify-center pl-8">
              <p className="text-3xl font-display font-bold text-foreground">Fast-Track</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted mt-1">Application Process</p>
            </div>
          </div>
        </div>
      </div>

      {/* The Venture Global Advantage (Persuasive Agency Selling) */}
      <section className="py-12 md:py-16 bg-background overflow-hidden relative">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display text-4xl font-bold text-foreground tracking-tight md:text-5xl">
              Don't leave your future to chance.
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Applying overseas alone is frustrating and legally complex. We leverage our direct employer relationships in {dest.name} to guarantee you priority interviews and seamless visa handling.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Handshake,
                title: "Direct Employer Access",
                desc: "We bypass the standard HR queues. When you apply through us, your profile lands directly on the hiring manager's desk."
              },
              {
                icon: ShieldCheck,
                title: "End-to-End Visa Protection",
                desc: "Never worry about a rejection due to paperwork errors. Our legal team handles every document, attestation, and embassy filing."
              },
              {
                icon: Zap,
                title: "Zero Hidden Fees",
                desc: "We operate with total transparency. Many of our placements in Europe include full employer sponsorship for your relocation costs."
              }
            ].map((item, i) => (
              <div key={i} className="group relative flex flex-col rounded-[var(--radius-xl)] bg-surface p-8 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 border border-border/50">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg transition-transform group-hover:scale-110">
                  <item.icon size={26} strokeWidth={2} />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground tracking-tight mb-4">
                  {item.title}
                </h3>
                <p className="text-[16px] leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Box Overview & Highlights */}
      <section className="py-12 md:py-16 bg-surface border-y border-border">
        <div className="container-custom grid gap-6 md:gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
          
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="rounded-[var(--radius-xl)] bg-background p-8 md:p-10 shadow-sm border border-border/50">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 mb-6">
                <Globe2 size={14} className="text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary">The Market</span>
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground tracking-tight">
                Living & Working in {dest.shortName}
              </h2>
              <p className="mt-6 text-[17px] leading-relaxed text-muted">
                {dest.overview}
              </p>
            </div>

            <div className="rounded-[var(--radius-xl)] bg-background p-8 md:p-10 shadow-sm border border-border/50">
              <h3 className="font-display text-2xl font-bold text-foreground tracking-tight">
                Why professionals love {dest.shortName}
              </h3>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {dest.highlights.map((item) => (
                  <li key={item} className="flex gap-4 rounded-xl border border-border-light bg-surface/50 p-4 transition-colors hover:bg-surface">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                      <CheckCircle2 size={16} strokeWidth={2.5} />
                    </span>
                    <span className="text-[15px] font-medium text-foreground leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Interactive Opportunities Widget */}
          <aside className="h-fit rounded-[var(--radius-xl)] bg-slate-950 p-8 md:p-10 shadow-2xl relative overflow-hidden group">
            <div className="absolute -inset-24 bg-primary/20 blur-[100px] rounded-full opacity-50 group-hover:opacity-75 transition-opacity duration-1000" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-8">
                <Briefcase size={24} className="text-primary-light" />
                <h3 className="font-display text-3xl font-bold text-white">Active Demand</h3>
              </div>
              
              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 mb-4">
                  Target Sectors
                </p>
                <div className="flex flex-wrap gap-2">
                  {dest.sectors.map((sector) => (
                    <span
                      key={sector}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[15px] font-medium text-slate-200 transition-colors hover:bg-primary/20 hover:border-primary/50 hover:text-white"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 mb-4">
                  Example Placements
                </p>
                <div className="space-y-2.5">
                  {dest.topRoles.map((role) => (
                    <div
                      key={role}
                      className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] p-3.5 transition-all hover:bg-white/[0.05] hover:border-white/10"
                    >
                      <span className="text-[15px] font-medium text-slate-200">{role}</span>
                      <CheckCircle2 size={16} className="text-emerald-500/70" />
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={`/find-jobs?country=${encodeURIComponent(dest.name)}`}
                className="btn btn-primary mt-10 w-full shadow-primary/20 shadow-lg text-[15px] py-4"
              >
                Find Your Role Now
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* "How We Get You There" Actionable Pipeline */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <h2 className="font-display text-4xl font-bold text-foreground tracking-tight">
              Your Journey to {dest.shortName}
            </h2>
            <p className="mt-4 text-lg text-muted">
              We've refined the relocation process into four predictable, stress-free steps.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10" />

            <div className="grid gap-10 md:grid-cols-4 relative z-10">
              {[
                {
                  step: "01",
                  title: "Application & Matching",
                  desc: "Submit your profile. Our recruiters instantly match you with verified employers in our database.",
                },
                {
                  step: "02",
                  title: "Priority Interviews",
                  desc: "Skip the line. We schedule your interviews and provide intensive 1-on-1 coaching to guarantee success.",
                },
                {
                  step: "03",
                  title: "Visa & Legal",
                  desc: "Once you accept an offer, our in-house legal team manages the entire sponsorship and visa process.",
                },
                {
                  step: "04",
                  title: "Arrival & Settlement",
                  desc: "We don't abandon you at the airport. We assist with flights, housing arrangements, and local onboarding.",
                },
              ].map((item, i) => (
                <div key={i} className="relative flex flex-col items-center text-center">
                  <div className="flex h-[90px] w-[90px] items-center justify-center rounded-full border-4 border-background bg-surface shadow-xl text-primary font-display text-3xl font-bold mb-6">
                    {item.step}
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-[15px] text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-10 md:mt-12 text-center">
             <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors border-b-2 border-primary/30 hover:border-primary pb-1">
               Speak with a {dest.shortName} relocation expert <ChevronRight size={18} />
             </Link>
          </div>
        </div>
      </section>

      {/* High-Converting Bottom CTA */}
      <section className="relative overflow-hidden bg-slate-950 py-16 md:py-20">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={dest.image}
            alt={dest.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/80 mix-blend-multiply" />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-lg max-w-3xl mx-auto leading-tight">
            Ready to build your future in {dest.name}?
          </h2>
          <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto font-light">
            Join hundreds of professionals who trusted Venture Global to secure their dream career abroad.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href={`/find-jobs?country=${encodeURIComponent(dest.name)}`}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-[var(--radius-md)] bg-white px-10 py-4 text-[16px] font-bold text-slate-900 shadow-xl transition-transform hover:scale-105"
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-[var(--radius-md)] border border-white/20 bg-white/5 px-10 py-4 text-[16px] font-bold text-white backdrop-blur-md transition-colors hover:bg-white/10"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
