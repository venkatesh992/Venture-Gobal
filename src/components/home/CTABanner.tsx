import Link from "next/link";
import { BriefcaseIcon, Users } from "lucide-react";

export function CTABanner() {
  return (
    <section className="bg-slate-50 py-20 md:py-32 overflow-hidden">
      <div className="container-custom max-w-[1440px]">
        {/* Single Wide Card Container */}
        <div className="relative bg-white rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden">
          
          {/* Decorative Purple Arcs Backgrounds */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/3 pointer-events-none opacity-80">
            <svg width="400" height="400" viewBox="0 0 400 400" className="blur-md">
              <defs>
                <linearGradient id="gradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#0D34E9" />
                </linearGradient>
              </defs>
              <circle cx="200" cy="200" r="140" fill="none" stroke="url(#gradLeft)" strokeWidth="60" strokeDasharray="440 880" strokeLinecap="round" transform="rotate(45 200 200)" />
            </svg>
          </div>
          
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 pointer-events-none opacity-80">
            <svg width="500" height="500" viewBox="0 0 500 500" className="blur-md">
              <defs>
                <linearGradient id="gradRight" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#1e3a8a" />
                </linearGradient>
              </defs>
              <circle cx="250" cy="250" r="180" fill="none" stroke="url(#gradRight)" strokeWidth="70" strokeDasharray="565 1130" strokeLinecap="round" transform="rotate(-135 250 250)" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100/50">
            
            {/* Candidate CTA */}
            <div className="p-10 md:p-20 flex flex-col justify-center items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ease-out shadow-sm border border-blue-100">
                <BriefcaseIcon size={32} strokeWidth={1.5} />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-5 tracking-tight">
                Looking for a Job?
              </h2>
              <p className="text-slate-500 mb-10 max-w-sm text-lg leading-relaxed">
                Explore global opportunities and let our experts handle your visa and relocation.
              </p>
              <Link 
                href="/candidates" 
                className="w-full sm:w-auto inline-flex justify-center items-center h-14 px-10 rounded-full bg-[#0D34E9] text-white font-bold hover:bg-blue-800 transition-all shadow-[0_8px_20px_rgba(13,52,233,0.25)] hover:shadow-[0_12px_25px_rgba(13,52,233,0.35)] hover:-translate-y-1"
              >
                Submit your CV
              </Link>
            </div>

            {/* Employer CTA */}
            <div className="p-10 md:p-20 flex flex-col justify-center items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 ease-out shadow-sm border border-emerald-100">
                <Users size={32} strokeWidth={1.5} />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-5 tracking-tight">
                Looking for Talent?
              </h2>
              <p className="text-slate-500 mb-10 max-w-sm text-lg leading-relaxed">
                Partner with us to source, vet, and relocate top-tier professionals for your organization.
              </p>
              <Link 
                href="/employers" 
                className="w-full sm:w-auto inline-flex justify-center items-center h-14 px-10 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
              >
                Request Staffing
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
