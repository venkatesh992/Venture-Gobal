import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Handshake, HeartPulse, Building2, BookOpen, GraduationCap, ArrowRight, FileCheck } from "lucide-react";
import { PageCTA } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Work in Germany | Healthcare & IT Careers with Venture Global",
  description: "Secure your next career move in Germany with Venture Global's end-to-end relocation and recruitment services, specializing in the Chancenkarte and EU Blue Card.",
};

export default function GermanyDestinationPage() {
  return (
    <>
      {/* Bespoke Germany Hero */}
      <section className="relative -mt-[72px] flex min-h-[90svh] flex-col justify-end overflow-hidden pb-12">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1600&q=80"
            alt="Germany"
            fill
            priority
            className="object-cover scale-105 animate-in fade-in zoom-in duration-1000"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/40 to-slate-950/95 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
        </div>

        <div className="relative z-10 container-custom w-full pt-32">
          <div className="max-w-4xl">
            <span className="inline-flex items-center justify-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-400 backdrop-blur-md mb-6">
              Europe's Economic Powerhouse
            </span>
            
            <h1 className="font-display text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl drop-shadow-lg mb-6">
              Your Future in <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-red-500 to-primary">Germany</span>
            </h1>
            
            <p className="max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl font-light">
              Germany is urgently recruiting international talent. With the new Opportunity Card (Chancenkarte) and our direct hospital and enterprise connections, relocating has never been faster.
            </p>
            
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link 
                href="/find-jobs?country=Germany" 
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-[var(--radius-md)] bg-amber-600 px-10 py-4 text-[15px] font-bold text-white shadow-xl transition-all hover:scale-[1.02] hover:shadow-amber-500/30 hover:bg-amber-500"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Apply for German Roles
                  <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <div className="border-b border-border bg-surface/50 backdrop-blur-sm relative z-20">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-8 py-8 md:grid-cols-4 divide-x divide-border-light text-center">
            <div className="flex flex-col items-center justify-center">
              <p className="text-3xl font-display font-bold text-foreground">1M+</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted mt-1">Open Job Vacancies</p>
            </div>
            <div className="flex flex-col items-center justify-center pl-8">
              <p className="text-3xl font-display font-bold text-foreground">30%</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted mt-1">Shorter Visa Processing</p>
            </div>
            <div className="flex flex-col items-center justify-center pl-8">
              <p className="text-3xl font-display font-bold text-foreground">B2</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted mt-1">Language Support</p>
            </div>
            <div className="flex flex-col items-center justify-center pl-8">
              <p className="text-3xl font-display font-bold text-foreground">Top 10</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted mt-1">Global Healthcare</p>
            </div>
          </div>
        </div>
      </div>

      {/* UNIQUE SECTION: The Chancenkarte */}
      <section className="section bg-background overflow-hidden relative">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1 relative">
               <div className="aspect-square rounded-[var(--radius-xl)] bg-gradient-to-br from-amber-500/20 to-primary/20 p-1">
                 <div className="w-full h-full rounded-[calc(var(--radius-xl)-4px)] bg-surface flex flex-col justify-center items-center p-10 text-center border border-border/50">
                    <FileCheck size={64} className="text-amber-500 mb-6" strokeWidth={1.5} />
                    <h3 className="font-display text-3xl font-bold text-foreground mb-4">The Chancenkarte</h3>
                    <p className="text-muted leading-relaxed mb-8">Germany's new points-based "Opportunity Card" allows skilled non-EU professionals to enter Germany for up to one year to look for a job—without needing a permanent contract upfront.</p>
                    <div className="w-full bg-background rounded-lg p-4 border border-border text-left">
                       <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Points are awarded for:</p>
                       <ul className="space-y-2">
                         <li className="flex items-center gap-2 text-sm text-foreground"><CheckCircle2 size={14} className="text-emerald-500" /> Language proficiency (German or English)</li>
                         <li className="flex items-center gap-2 text-sm text-foreground"><CheckCircle2 size={14} className="text-emerald-500" /> Professional experience</li>
                         <li className="flex items-center gap-2 text-sm text-foreground"><CheckCircle2 size={14} className="text-emerald-500" /> Age (under 35)</li>
                       </ul>
                    </div>
                 </div>
               </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary mb-4">
                Visa Revolution
              </span>
              <h2 className="font-display text-4xl font-bold text-foreground tracking-tight md:text-5xl mb-6">
                Moving to Germany has never been easier.
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Recent legislative changes have dramatically lowered the barriers for international talent. You no longer need to navigate decades of red tape.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">EU Blue Card Thresholds Lowered</h4>
                    <p className="text-muted text-sm mt-1">The salary requirements for the EU Blue Card have been significantly reduced, especially for bottleneck professions like IT and nursing.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Handshake size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Experience over Degrees</h4>
                    <p className="text-muted text-sm mt-1">If you have extensive professional experience, you may no longer need your foreign degree fully recognized before you start working.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UNIQUE SECTION: Healthcare & IT Focus */}
      <section className="section bg-surface border-y border-border">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground tracking-tight">
              Where Germany Needs You Most
            </h2>
            <p className="mt-4 text-lg text-muted">
              We specialize in placing candidates directly into Germany's most critical shortage sectors.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Healthcare */}
            <div className="rounded-[var(--radius-xl)] bg-background p-8 md:p-10 shadow-lg border border-border/50 hover:shadow-primary/5 transition-all">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-3 py-1 mb-6 text-red-600">
                <HeartPulse size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">Healthcare & Nursing</span>
              </div>
              <h3 className="font-display text-3xl font-bold text-foreground mb-4">Care for a Nation</h3>
              <p className="text-muted mb-6 leading-relaxed">
                Germany's aging population has created an unprecedented demand for registered nurses and care workers. Hospitals and clinics are actively sponsoring international talent with aggressive benefits.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-foreground font-medium">
                  <CheckCircle2 size={18} className="text-red-500 shrink-0" /> Full sponsorship for German language courses (B1/B2)
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground font-medium">
                  <CheckCircle2 size={18} className="text-red-500 shrink-0" /> Fast-tracked license recognition (Defizitbescheid)
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground font-medium">
                  <CheckCircle2 size={18} className="text-red-500 shrink-0" /> Generous shift allowances and strictly regulated working hours
                </li>
              </ul>
              <Link href="/find-jobs?country=Germany&sector=Healthcare" className="text-red-600 font-bold inline-flex items-center gap-1 hover:gap-2 transition-all">
                View Nursing Roles <ArrowRight size={16} />
              </Link>
            </div>

            {/* IT & Engineering */}
            <div className="rounded-[var(--radius-xl)] bg-background p-8 md:p-10 shadow-lg border border-border/50 hover:shadow-primary/5 transition-all">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 mb-6 text-blue-600">
                <Building2 size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">Tech & Engineering</span>
              </div>
              <h3 className="font-display text-3xl font-bold text-foreground mb-4">Drive the Economy</h3>
              <p className="text-muted mb-6 leading-relaxed">
                From automotive giants in Munich to bustling startups in Berlin, Germany's tech sector is facing a severe shortage of software engineers, cloud architects, and data analysts.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-foreground font-medium">
                  <CheckCircle2 size={18} className="text-blue-500 shrink-0" /> English is widely accepted as the primary working language
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground font-medium">
                  <CheckCircle2 size={18} className="text-blue-500 shrink-0" /> Immediate eligibility for the highly coveted EU Blue Card
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground font-medium">
                  <CheckCircle2 size={18} className="text-blue-500 shrink-0" /> Massive relocation packages including initial housing
                </li>
              </ul>
              <Link href="/find-jobs?country=Germany&sector=IT" className="text-blue-600 font-bold inline-flex items-center gap-1 hover:gap-2 transition-all">
                View Tech Roles <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* High-Converting Bottom CTA */}
      <section className="relative overflow-hidden bg-slate-950 py-24">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1600&q=80"
            alt="Germany"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/80 mix-blend-multiply" />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-lg max-w-3xl mx-auto leading-tight">
            Ready to build your future in Germany?
          </h2>
          <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto font-light">
            Don't navigate the German bureaucracy alone. Let Venture Global's experts secure your visa, your job, and your future.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/find-jobs?country=Germany"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-[var(--radius-md)] bg-amber-500 px-10 py-4 text-[16px] font-bold text-slate-900 shadow-xl transition-transform hover:scale-105"
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
