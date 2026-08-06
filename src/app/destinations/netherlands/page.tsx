import { CTABanner } from "@/components/home/CTABanner";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, TrendingUp, Cpu, Truck, MessagesSquare, ArrowRight, ShieldCheck, Handshake, Landmark } from "lucide-react";
import { PageCTA } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Work in the Netherlands | Tech & Logistics Careers with Venture Global",
  description: "Relocate to the Netherlands with Venture Global. We specialize in placing top talent into Dutch tech startups, logistics hubs, and leveraging the 30% tax ruling.",
};

export default function NetherlandsDestinationPage() {
  return (
    <>
      {/* Bespoke Netherlands Hero */}
      <section className="relative -mt-[72px] flex min-h-[70svh] flex-col justify-end overflow-hidden pb-10">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=80"
            alt="Amsterdam Netherlands"
            fill
            priority
            className="object-cover scale-105 animate-in fade-in zoom-in duration-1000"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/50 to-primary/95 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent" />
        </div>

        <div className="relative z-10 container-custom w-full pt-28">
          <div className="max-w-4xl">
            <span className="inline-flex items-center justify-center gap-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-400 backdrop-blur-md mb-6">
              The Innovation Capital
            </span>
            
            <h1 className="font-display text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl drop-shadow-lg mb-6">
              Accelerate Your Career in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-300 to-white">Netherlands</span>
            </h1>
            
            <p className="max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl font-light">
              Home to Europe's fastest-growing tech unicorns and the world's most advanced logistics networks. English is the business standard, and the work-life balance is legendary.
            </p>
            
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link 
                href="/find-jobs?country=Netherlands" 
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-[var(--radius-md)] bg-orange-600 px-10 py-4 text-[15px] font-bold text-white shadow-xl transition-all hover:scale-[1.02] hover:shadow-orange-500/30 hover:bg-orange-500"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Apply for Dutch Roles
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
              <p className="text-3xl font-display font-bold text-foreground">95%</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted mt-1">English Fluency</p>
            </div>
            <div className="flex flex-col items-center justify-center pl-8">
              <p className="text-3xl font-display font-bold text-foreground">30%</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted mt-1">Tax Exemption Rule</p>
            </div>
            <div className="flex flex-col items-center justify-center pl-8">
              <p className="text-3xl font-display font-bold text-foreground">Top 5</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted mt-1">Global Innovation</p>
            </div>
            <div className="flex flex-col items-center justify-center pl-8">
              <p className="text-3xl font-display font-bold text-foreground">4 Weeks</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted mt-1">Highly Skilled Migrant Visa</p>
            </div>
          </div>
        </div>
      </div>

      {/* UNIQUE SECTION: The 30% Tax Ruling */}
      <section className="py-12 md:py-16 bg-background overflow-hidden relative">
        <div className="container-custom">
          <div className="grid gap-6 md:gap-8 lg:grid-cols-2 items-center">
             <div className="order-1 lg:order-1">
              <span className="inline-flex items-center justify-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-500 mb-4">
                Financial Advantage
              </span>
              <h2 className="font-display text-4xl font-bold text-foreground tracking-tight md:text-5xl mb-6">
                The 30% Tax Ruling
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                The Netherlands offers one of the most lucrative financial incentives for expats in Europe. If you are recruited from abroad and meet the salary threshold, you can receive up to 30% of your gross salary entirely tax-free.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Massive Net Income Boost</h4>
                    <p className="text-muted text-sm mt-1">This ruling drastically increases your take-home pay, making the higher cost of living in Amsterdam or Rotterdam easily manageable.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                    <Landmark size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">We Handle the Application</h4>
                    <p className="text-muted text-sm mt-1">Our immigration team works with your new employer to ensure the 30% ruling is properly filed and granted by the Dutch tax authorities on your behalf.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-2 lg:order-2 relative">
               <div className="aspect-square rounded-[var(--radius-xl)] bg-gradient-to-br from-emerald-500/20 to-blue-500/20 p-1">
                 <div className="w-full h-full rounded-[calc(var(--radius-xl)-4px)] bg-surface flex flex-col justify-center items-center p-10 text-center border border-border/50">
                    <h3 className="font-display text-xl font-bold text-foreground mb-8">How the 30% Ruling Works</h3>
                    
                    <div className="w-full space-y-4">
                      <div className="w-full bg-background rounded-lg p-4 border border-border flex justify-between items-center">
                         <span className="text-sm font-bold text-muted uppercase">Gross Salary</span>
                         <span className="text-lg font-bold text-foreground">100%</span>
                      </div>
                      <div className="flex justify-center">
                         <ArrowRight size={20} className="text-muted rotate-90" />
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                         <div className="col-span-2 bg-slate-900 rounded-lg p-4 border border-border flex flex-col justify-center items-center">
                            <span className="text-2xl font-bold text-white mb-1">70%</span>
                            <span className="text-xs font-bold text-slate-400 uppercase text-center">Taxed at normal rates</span>
                         </div>
                         <div className="col-span-1 bg-emerald-500/10 rounded-lg p-4 border border-emerald-500/30 flex flex-col justify-center items-center">
                            <span className="text-2xl font-bold text-emerald-500 mb-1">30%</span>
                            <span className="text-xs font-bold text-emerald-600 uppercase text-center">Tax-Free</span>
                         </div>
                      </div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* UNIQUE SECTION: Tech & Logistics Hubs */}
      <section className="py-12 md:py-16 bg-surface border-y border-border">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <h2 className="font-display text-4xl font-bold text-foreground tracking-tight">
              Dominant Industries
            </h2>
            <p className="mt-4 text-lg text-muted">
              We focus our Dutch recruitment exclusively on the two sectors driving the country's economic boom.
            </p>
          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            {/* Tech */}
            <div className="rounded-[var(--radius-xl)] bg-background p-8 md:p-10 shadow-lg border border-border/50 hover:shadow-orange-500/5 transition-all">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 mb-6 text-blue-600">
                <Cpu size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">IT & Tech (Amsterdam/Eindhoven)</span>
              </div>
              <h3 className="font-display text-3xl font-bold text-foreground mb-4">Europe's Silicon Valley</h3>
              <p className="text-muted mb-6 leading-relaxed">
                From FinTech in Amsterdam to advanced semiconductor manufacturing in Eindhoven (Brainport). Dutch tech companies operate entirely in English and heavily rely on international developers.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-foreground font-medium">
                  <CheckCircle2 size={18} className="text-blue-500 shrink-0" /> Extreme demand for DevOps, React, and Data Science
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground font-medium">
                  <CheckCircle2 size={18} className="text-blue-500 shrink-0" /> Highly Skilled Migrant visa approved in weeks
                </li>
              </ul>
              <Link href="/find-jobs?country=Netherlands&sector=IT" className="text-blue-600 font-bold inline-flex items-center gap-1 hover:gap-2 transition-all">
                View Tech Roles <ArrowRight size={16} />
              </Link>
            </div>

            {/* Logistics */}
            <div className="rounded-[var(--radius-xl)] bg-background p-8 md:p-10 shadow-lg border border-border/50 hover:shadow-orange-500/5 transition-all">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-3 py-1 mb-6 text-orange-600">
                <Truck size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">Logistics & Supply Chain</span>
              </div>
              <h3 className="font-display text-3xl font-bold text-foreground mb-4">The Gateway to Europe</h3>
              <p className="text-muted mb-6 leading-relaxed">
                Anchored by the Port of Rotterdam (Europe's largest) and Schiphol Airport, the Dutch logistics sector is a powerhouse requiring constant management and operational talent.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-foreground font-medium">
                  <CheckCircle2 size={18} className="text-orange-500 shrink-0" /> Roles for Supply Chain Analysts and Warehouse Managers
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground font-medium">
                  <CheckCircle2 size={18} className="text-orange-500 shrink-0" /> Strong long-term stability and career progression
                </li>
              </ul>
              <Link href="/find-jobs?country=Netherlands&sector=Logistics" className="text-orange-600 font-bold inline-flex items-center gap-1 hover:gap-2 transition-all">
                View Logistics Roles <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Language Section */}
       <section className="py-12 md:py-16 bg-slate-950 overflow-hidden relative">
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
           <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 mb-6">
             <MessagesSquare size={32} />
           </div>
           <h2 className="font-display text-4xl font-bold text-white tracking-tight md:text-5xl mb-6">
             No Dutch? No Problem.
           </h2>
           <p className="text-lg text-slate-300 leading-relaxed mb-8">
             The Netherlands boasts the highest non-native English proficiency in the world. 95% of the population speaks fluent English, and almost all of our partner tech and logistics companies operate exclusively in English. You can integrate instantly from day one.
           </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
