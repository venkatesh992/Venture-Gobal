import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, TrendingUp, Building2, Package, Coins, ArrowRight, ShieldCheck, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Work in Poland | IT & Supply Chain Careers with Venture Global",
  description: "Relocate to Poland, Europe's fastest-growing economy. We specialize in placing professionals in IT hubs and massive logistics centers with rapid visa processing.",
};

export default function PolandDestinationPage() {
  return (
    <>
      {/* Bespoke Poland Hero */}
      <section className="relative -mt-[72px] flex min-h-[90svh] flex-col justify-end overflow-hidden pb-12">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&w=1600&q=80"
            alt="Warsaw Poland"
            fill
            priority
            className="object-cover scale-105 animate-in fade-in zoom-in duration-1000"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-rose-950/40 via-rose-950/50 to-slate-950/95 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
        </div>

        <div className="relative z-10 container-custom w-full pt-32">
          <div className="max-w-4xl">
            <span className="inline-flex items-center justify-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-rose-400 backdrop-blur-md mb-6">
              Europe's Economic Miracle
            </span>
            
            <h1 className="font-display text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl drop-shadow-lg mb-6">
              Rise Faster in <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-white to-slate-300">Poland</span>
            </h1>
            
            <p className="max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl font-light">
              Experience the fastest-growing economy in the EU. Poland offers massive opportunities in IT and Logistics, combining western salaries with an incredibly low cost of living.
            </p>
            
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link 
                href="/find-jobs?country=Poland" 
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-[var(--radius-md)] bg-rose-600 px-10 py-4 text-[15px] font-bold text-white shadow-xl transition-all hover:scale-[1.02] hover:shadow-rose-500/30 hover:bg-rose-500"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Apply for Polish Roles
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
              <p className="text-3xl font-display font-bold text-foreground">#1</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted mt-1">Growth in EU</p>
            </div>
            <div className="flex flex-col items-center justify-center pl-8">
              <p className="text-3xl font-display font-bold text-foreground">-40%</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted mt-1">Cost of Living vs UK</p>
            </div>
            <div className="flex flex-col items-center justify-center pl-8">
              <p className="text-3xl font-display font-bold text-foreground">Fast</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted mt-1">Visa Processing</p>
            </div>
            <div className="flex flex-col items-center justify-center pl-8">
              <p className="text-3xl font-display font-bold text-foreground">100k+</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted mt-1">Tech Roles Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* UNIQUE SECTION: The Purchasing Power Advantage */}
      <section className="section bg-background overflow-hidden relative">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            
            <div className="order-2 lg:order-1 relative">
               <div className="aspect-[4/3] rounded-[var(--radius-xl)] bg-gradient-to-br from-rose-500/20 to-slate-500/20 p-1">
                 <div className="w-full h-full rounded-[calc(var(--radius-xl)-4px)] bg-surface flex flex-col justify-center items-center p-8 text-center border border-border/50">
                    <Coins size={48} className="text-rose-500 mb-6" strokeWidth={1.5} />
                    <h3 className="font-display text-2xl font-bold text-foreground mb-4">The Purchasing Power Arbitrage</h3>
                    
                    <div className="w-full grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-background rounded-lg p-4 border border-border">
                         <span className="block text-sm font-bold text-muted uppercase mb-2">Western Europe</span>
                         <span className="text-xl font-bold text-foreground">High Salary</span>
                         <span className="block text-sm text-red-400 mt-1">Very High Rent</span>
                      </div>
                      <div className="bg-rose-500/10 rounded-lg p-4 border border-rose-500/30">
                         <span className="block text-sm font-bold text-rose-600 uppercase mb-2">Poland</span>
                         <span className="text-xl font-bold text-foreground">Competitive Salary</span>
                         <span className="block text-sm text-emerald-500 mt-1">Low Living Costs</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted mt-6">Result: You often save significantly more disposable income at the end of the month in Warsaw or Krakow than in London or Paris.</p>
                 </div>
               </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-flex items-center justify-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-500 mb-4">
                Quality of Life
              </span>
              <h2 className="font-display text-4xl font-bold text-foreground tracking-tight md:text-5xl mb-6">
                Live Better, Save More.
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Poland offers a unique arbitrage opportunity. International corporations pay highly competitive, near-western salaries, but local living costs remain extremely affordable.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Accelerated Wealth Building</h4>
                    <p className="text-muted text-sm mt-1">Lower taxes and cheap, high-quality housing allow you to build savings rapidly or afford a lifestyle that would be impossible elsewhere.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Modern Infrastructure</h4>
                    <p className="text-muted text-sm mt-1">Enjoy pristine new public transport, gigabit fiber internet everywhere, and some of the safest city streets in the world.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* UNIQUE SECTION: Major Hubs */}
      <section className="section bg-surface border-y border-border">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground tracking-tight">
              Where We Place Candidates
            </h2>
            <p className="mt-4 text-lg text-muted">
              Poland isn't just one hub. We recruit for specialized sectors across the country's booming metropolitan areas.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* IT Hubs */}
            <div className="rounded-[var(--radius-xl)] bg-background p-8 md:p-10 shadow-lg border border-border/50 hover:shadow-rose-500/5 transition-all">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 mb-6 text-blue-600">
                <Building2 size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">Global IT & Finance</span>
              </div>
              <h3 className="font-display text-3xl font-bold text-foreground mb-4">Warsaw & Krakow</h3>
              <p className="text-muted mb-6 leading-relaxed">
                The preferred European headquarters for Fortune 500 banks and tech giants. If you work in software development, cybersecurity, or financial operations, demand here is insatiable.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-foreground font-medium">
                  <CheckCircle2 size={18} className="text-blue-500 shrink-0" /> Entirely English-speaking corporate environments
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground font-medium">
                  <CheckCircle2 size={18} className="text-blue-500 shrink-0" /> Premium relocation packages for seniors
                </li>
              </ul>
              <Link href="/find-jobs?country=Poland&sector=IT" className="text-blue-600 font-bold inline-flex items-center gap-1 hover:gap-2 transition-all">
                View Tech Roles <ArrowRight size={16} />
              </Link>
            </div>

            {/* Logistics & Supply Chain */}
            <div className="rounded-[var(--radius-xl)] bg-background p-8 md:p-10 shadow-lg border border-border/50 hover:shadow-rose-500/5 transition-all">
              <div className="inline-flex items-center gap-2 rounded-full bg-rose-500/10 px-3 py-1 mb-6 text-rose-600">
                <Package size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">Logistics & Supply Chain</span>
              </div>
              <h3 className="font-display text-3xl font-bold text-foreground mb-4">Wroclaw & Poznan</h3>
              <p className="text-muted mb-6 leading-relaxed">
                Strategically located next to Germany, western Poland has become the e-commerce fulfillment and manufacturing engine of Europe.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-foreground font-medium">
                  <CheckCircle2 size={18} className="text-rose-500 shrink-0" /> Massive demand for warehouse managers and engineers
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground font-medium">
                  <CheckCircle2 size={18} className="text-rose-500 shrink-0" /> Fast-track blue-collar and management visas
                </li>
              </ul>
              <Link href="/find-jobs?country=Poland&sector=Logistics" className="text-rose-600 font-bold inline-flex items-center gap-1 hover:gap-2 transition-all">
                View Logistics Roles <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* High-Converting Bottom CTA */}
      <section className="relative overflow-hidden bg-slate-950 py-24">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&w=1600&q=80"
            alt="Poland"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-rose-950/80 mix-blend-multiply" />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-lg max-w-3xl mx-auto leading-tight">
            Ready to upgrade your career?
          </h2>
          <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto font-light">
            Tap into Europe's fastest-growing job market. We secure your contract and handle all Polish immigration paperwork.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/find-jobs?country=Poland"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-[var(--radius-md)] bg-rose-600 px-10 py-4 text-[16px] font-bold text-white shadow-xl transition-transform hover:scale-105"
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
