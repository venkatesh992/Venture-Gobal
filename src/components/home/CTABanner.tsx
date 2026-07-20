import Link from "next/link";
import { BriefcaseIcon, Users } from "lucide-react";

export function CTABanner() {
  return (
    <section className="bg-slate-50 py-20 md:py-32">
      <div className="container-custom max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Candidate CTA */}
          <div className="bg-white rounded-3xl p-10 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col justify-center text-center items-center group hover:border-blue-200 transition-colors duration-300">
            <div className="w-20 h-20 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 ease-out">
              <BriefcaseIcon size={40} strokeWidth={1.5} />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Looking for a Job?
            </h2>
            <p className="text-slate-500 mb-10 max-w-sm text-lg">
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
          <div className="bg-white rounded-3xl p-10 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col justify-center text-center items-center group hover:border-slate-300 transition-colors duration-300">
            <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 ease-out">
              <Users size={40} strokeWidth={1.5} />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Looking for Talent?
            </h2>
            <p className="text-slate-500 mb-10 max-w-sm text-lg">
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
    </section>
  );
}
