import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Leaf, Laptop, Gamepad2, Heart, ArrowRight, ShieldCheck, TreePine } from "lucide-react";

export const metadata: Metadata = {
  title: "Work in Finland | Tech & Welfare Careers with Venture Global",
  description: "Relocate to Finland, the world's happiest country. Venture Global places top talent into Finnish tech startups, gaming studios, and healthcare.",
};

export default function FinlandDestinationPage() {
  return (
    <>
      {/* Bespoke Finland Hero */}
      <section className="relative -mt-[72px] flex min-h-[90svh] flex-col justify-end overflow-hidden pb-12">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1600&q=80"
            alt="Helsinki Finland"
            fill
            priority
            className="object-cover scale-105 animate-in fade-in zoom-in duration-1000"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/40 via-cyan-950/50 to-slate-950/95 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
        </div>

        <div className="relative z-10 container-custom w-full pt-32">
          <div className="max-w-4xl">
            <span className="inline-flex items-center justify-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-300 backdrop-blur-md mb-6">
              The Nordic Standard
            </span>
            
            <h1 className="font-display text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl drop-shadow-lg mb-6">
              Find Your Balance in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-slate-200">Finland</span>
            </h1>
            
            <p className="max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl font-light">
              Consistently ranked the happiest country in the world. We place elite professionals into Finland's thriving tech, gaming, and healthcare sectors, where work-life balance is a fundamental right.
            </p>
            
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link 
                href="/find-jobs?country=Finland" 
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-[var(--radius-md)] bg-cyan-600 px-10 py-4 text-[15px] font-bold text-white shadow-xl transition-all hover:scale-[1.02] hover:shadow-cyan-500/30 hover:bg-cyan-500"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Apply for Finnish Roles
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
              <p className="text-sm font-semibold uppercase tracking-wider text-muted mt-1">World Happiness</p>
            </div>
            <div className="flex flex-col items-center justify-center pl-8">
              <p className="text-3xl font-display font-bold text-foreground">30</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted mt-1">Paid Vacation Days</p>
            </div>
            <div className="flex flex-col items-center justify-center pl-8">
              <p className="text-3xl font-display font-bold text-foreground">Free</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted mt-1">Education & Healthcare</p>
            </div>
            <div className="flex flex-col items-center justify-center pl-8">
              <p className="text-3xl font-display font-bold text-foreground">14 Days</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-muted mt-1">Fast-Track Visa</p>
            </div>
          </div>
        </div>
      </div>

      {/* UNIQUE SECTION: The Nordic Work Culture */}
      <section className="section bg-background overflow-hidden relative">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            
            <div className="order-1 lg:order-1">
              <span className="inline-flex items-center justify-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-500 mb-4">
                The Welfare State
              </span>
              <h2 className="font-display text-4xl font-bold text-foreground tracking-tight md:text-5xl mb-6">
                Work to Live, Don't Live to Work.
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Finland fundamentally operates differently than the rest of the world. Flat hierarchies, immense trust in employees, and a strict adherence to a 37.5 hour work week are legally and culturally enforced.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                    <Heart size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Unmatched Family Support</h4>
                    <p className="text-muted text-sm mt-1">Generous parental leave, heavily subsidized daycare, and free world-class education make Finland the ultimate destination for raising a family.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-500">
                    <TreePine size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Nature at Your Doorstep</h4>
                    <p className="text-muted text-sm mt-1">Even in the heart of Helsinki, you are never more than 15 minutes away from pristine forests, lakes, and the archipelago.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-2 lg:order-2 relative">
               <div className="aspect-[4/3] rounded-[var(--radius-xl)] bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 p-1">
                 <div className="w-full h-full rounded-[calc(var(--radius-xl)-4px)] bg-surface flex flex-col justify-center items-center p-8 text-center border border-border/50">
                    <Leaf size={48} className="text-emerald-500 mb-6" strokeWidth={1.5} />
                    <h3 className="font-display text-2xl font-bold text-foreground mb-4">The Trust Economy</h3>
                    
                    <ul className="space-y-4 text-left w-full mt-4">
                       <li className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border">
                         <CheckCircle2 size={18} className="text-emerald-500" />
                         <span className="text-sm font-medium text-foreground">Remote work is standard practice</span>
                       </li>
                       <li className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border">
                         <CheckCircle2 size={18} className="text-emerald-500" />
                         <span className="text-sm font-medium text-foreground">Managers act as coaches, not bosses</span>
                       </li>
                       <li className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border">
                         <CheckCircle2 size={18} className="text-emerald-500" />
                         <span className="text-sm font-medium text-foreground">Leaving the office at 4:00 PM is expected</span>
                       </li>
                    </ul>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* UNIQUE SECTION: Innovation & Tech */}
      <section className="section bg-surface border-y border-border">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground tracking-tight">
              Where We Place Talent
            </h2>
            <p className="mt-4 text-lg text-muted">
              Finland is a global leader in specific, highly-skilled technical niches.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Tech & Gaming */}
            <div className="rounded-[var(--radius-xl)] bg-background p-8 md:p-10 shadow-lg border border-border/50 hover:shadow-cyan-500/5 transition-all">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 mb-6 text-blue-600">
                <Gamepad2 size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">Tech & Mobile Gaming</span>
              </div>
              <h3 className="font-display text-3xl font-bold text-foreground mb-4">The Helsinki Hub</h3>
              <p className="text-muted mb-6 leading-relaxed">
                Birthplace of Linux, SMS, and global gaming giants like Supercell and Rovio. The startup ecosystem in Helsinki is incredibly well-funded and desperate for international engineering talent.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-foreground font-medium">
                  <CheckCircle2 size={18} className="text-blue-500 shrink-0" /> English is the default language in all tech companies
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground font-medium">
                  <CheckCircle2 size={18} className="text-blue-500 shrink-0" /> D-Visa allows entry within 14 days for specialists
                </li>
              </ul>
              <Link href="/find-jobs?country=Finland&sector=IT" className="text-blue-600 font-bold inline-flex items-center gap-1 hover:gap-2 transition-all">
                View Tech Roles <ArrowRight size={16} />
              </Link>
            </div>

            {/* Healthcare */}
            <div className="rounded-[var(--radius-xl)] bg-background p-8 md:p-10 shadow-lg border border-border/50 hover:shadow-cyan-500/5 transition-all">
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1 mb-6 text-cyan-600">
                <ShieldCheck size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">Healthcare</span>
              </div>
              <h3 className="font-display text-3xl font-bold text-foreground mb-4">Public & Private Care</h3>
              <p className="text-muted mb-6 leading-relaxed">
                Finland's world-class healthcare system relies heavily on international nurses. We partner directly with municipalities and private care homes to fast-track your licensing.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-foreground font-medium">
                  <CheckCircle2 size={18} className="text-cyan-500 shrink-0" /> Comprehensive Finnish language training provided
                </li>
                <li className="flex items-start gap-3 text-sm text-foreground font-medium">
                  <CheckCircle2 size={18} className="text-cyan-500 shrink-0" /> Very strict nurse-to-patient safety ratios
                </li>
              </ul>
              <Link href="/find-jobs?country=Finland&sector=Healthcare" className="text-cyan-600 font-bold inline-flex items-center gap-1 hover:gap-2 transition-all">
                View Healthcare Roles <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* High-Converting Bottom CTA */}
      <section className="relative overflow-hidden bg-slate-950 py-24">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1600&q=80"
            alt="Finland"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-cyan-950/80 mix-blend-multiply" />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-lg max-w-3xl mx-auto leading-tight">
            Ready to find your balance?
          </h2>
          <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto font-light">
            Escape the burnout culture. Let Venture Global secure your role and Fast-Track Visa to the happiest country on earth.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/find-jobs?country=Finland"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-[var(--radius-md)] bg-cyan-500 px-10 py-4 text-[16px] font-bold text-slate-900 shadow-xl transition-transform hover:scale-105"
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
