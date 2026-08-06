import { CTABanner } from "@/components/home/CTABanner";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Palmtree, Utensils, Anchor, Sun, ArrowRight, ShieldCheck, Handshake } from "lucide-react";
import { PageCTA } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Work in Greece | Luxury Hospitality Careers with Venture Global",
  description: "Secure your next career move in Greece with Venture Global's end-to-end relocation services, specializing in 5-star resorts, island hospitality, and seasonal contracts.",
};

export default function GreeceDestinationPage() {
  return (
    <>
      {/* Bespoke Greece Hero */}
      <section className="relative -mt-[72px] flex min-h-[70svh] flex-col justify-end overflow-hidden pb-10">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=80"
            alt="Greece Santorini"
            fill
            priority
            className="object-cover scale-105 animate-in fade-in zoom-in duration-1000"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/50 to-primary/95 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent" />
        </div>

        <div className="relative z-10 container-custom w-full pt-28">
          <div className="max-w-4xl">
            <span className="inline-flex items-center justify-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-300 backdrop-blur-md mb-6">
              The Mediterranean Hub
            </span>
            
            <h1 className="font-display text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl drop-shadow-lg mb-6">
              Elevate Your Career in <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-white to-amber-200">Greece</span>
            </h1>
            
            <p className="max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl font-light">
              From the bustling luxury hotels of Athens to the exclusive resorts of Mykonos and Santorini. We place top-tier hospitality and service professionals directly into Europe's premier tourist destination.
            </p>
            
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link 
                href="/find-jobs?country=Greece" 
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-[var(--radius-md)] bg-sky-600 px-10 py-4 text-[15px] font-bold text-white shadow-xl transition-all hover:scale-[1.02] hover:shadow-sky-500/30 hover:bg-sky-500"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Apply for Greek Roles
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
          <div className="grid grid-cols-2 gap-6 md:gap-8 py-8 md:grid-cols-4 divide-x divide-border-light text-center">
            <div className="flex flex-col items-center justify-center">
              <p className="text-3xl font-display font-bold text-foreground">Top 3</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted mt-1">Global Tourism</p>
            </div>
            <div className="flex flex-col items-center justify-center pl-8">
              <p className="text-3xl font-display font-bold text-foreground">300+</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted mt-1">Luxury Resort Partners</p>
            </div>
            <div className="flex flex-col items-center justify-center pl-8">
              <p className="text-3xl font-display font-bold text-foreground">100%</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted mt-1">Accommodation Provided*</p>
            </div>
            <div className="flex flex-col items-center justify-center pl-8">
              <p className="text-3xl font-display font-bold text-foreground">Seasonal</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted mt-1">& Permanent Tracks</p>
            </div>
          </div>
        </div>
      </div>

      {/* UNIQUE SECTION: The Hospitality Track */}
      <section className="py-12 md:py-16 bg-background overflow-hidden relative">
        <div className="container-custom">
           <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <span className="inline-flex items-center justify-center rounded-full bg-sky-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-sky-500 mb-4">
              Our Specialization
            </span>
            <h2 className="font-display text-4xl font-bold text-foreground tracking-tight md:text-5xl">
              The Luxury Hospitality Track
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              We hold exclusive recruitment contracts with Greece's leading 5-star hotel chains and island resorts. If you have experience in F&B, Guest Relations, or Culinary Arts, your skills are in massive demand.
            </p>
          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-3">
            {/* F&B */}
            <div className="rounded-[var(--radius-xl)] bg-surface p-8 shadow-sm border border-border/50 transition-all hover:-translate-y-1 hover:shadow-sky-500/10">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 mb-6 text-amber-500">
                <Utensils size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">Food & Beverage</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Fine Dining & Bars</h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Positions for experienced Sommeliers, Mixologists, Waitstaff, and Restaurant Managers in high-volume, premium environments.
              </p>
              <ul className="space-y-2 mb-6">
                 <li className="flex items-center gap-2 text-sm text-foreground"><CheckCircle2 size={14} className="text-sky-500" /> High tipping culture</li>
                 <li className="flex items-center gap-2 text-sm text-foreground"><CheckCircle2 size={14} className="text-sky-500" /> Multi-cultural teams</li>
              </ul>
            </div>

            {/* Guest Services */}
            <div className="rounded-[var(--radius-xl)] bg-surface p-8 shadow-sm border border-border/50 transition-all hover:-translate-y-1 hover:shadow-sky-500/10">
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 mb-6 text-sky-500">
                <Palmtree size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">Guest Services</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Front Office & VIP</h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Roles for Receptionists, Concierges, and VIP Client Managers. Fluent English is mandatory; additional European languages are a huge plus.
              </p>
              <ul className="space-y-2 mb-6">
                 <li className="flex items-center gap-2 text-sm text-foreground"><CheckCircle2 size={14} className="text-sky-500" /> Customer-facing premium roles</li>
                 <li className="flex items-center gap-2 text-sm text-foreground"><CheckCircle2 size={14} className="text-sky-500" /> Rapid career progression</li>
              </ul>
            </div>

             {/* Operations */}
             <div className="rounded-[var(--radius-xl)] bg-surface p-8 shadow-sm border border-border/50 transition-all hover:-translate-y-1 hover:shadow-sky-500/10">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 mb-6 text-emerald-500">
                <Anchor size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">Resort Operations</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Behind the Scenes</h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Crucial roles keeping the resorts running: Executive Housekeepers, Facilities Managers, and Logistics Coordinators.
              </p>
              <ul className="space-y-2 mb-6">
                 <li className="flex items-center gap-2 text-sm text-foreground"><CheckCircle2 size={14} className="text-sky-500" /> Stable, long-term contracts</li>
                 <li className="flex items-center gap-2 text-sm text-foreground"><CheckCircle2 size={14} className="text-sky-500" /> Leadership opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* UNIQUE SECTION: Seasonal vs Permanent */}
      <section className="py-12 md:py-16 bg-slate-950 border-y border-border overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
           <Image src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=80" alt="bg" fill className="object-cover" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid gap-6 md:gap-8 lg:grid-cols-2 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold text-white tracking-tight md:text-5xl mb-6">
                Choose Your Lifestyle
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Greece offers incredibly flexible working models. Whether you want to grind hard for 7 months on an island or build a permanent life in Athens, we have the right contract for you.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
                    <Sun size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xl">The 7-Month Island Season</h4>
                    <p className="text-slate-400 text-sm mt-2">Work intensely from April to October in places like Mykonos or Crete. Accommodation and meals are almost always fully covered by the employer, allowing you to save the vast majority of your income.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400">
                    <Handshake size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xl">Year-Round City Postings</h4>
                    <p className="text-slate-400 text-sm mt-2">Secure permanent, 12-month contracts in Athens or Thessaloniki. These roles offer more stability, standard 40-hour work weeks, and the opportunity to deeply integrate into the local culture.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[600px] w-full rounded-[var(--radius-2xl)] overflow-hidden border border-white/10 shadow-2xl">
               <Image src="https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&w=1200&q=80" alt="Greece lifestyle" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
