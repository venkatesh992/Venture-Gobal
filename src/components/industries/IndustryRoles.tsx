import { CheckCircle2 } from "lucide-react";

interface IndustryRolesProps {
  roles: { title: string; demand: string }[];
  whyUs: string[];
}

export function IndustryRoles({ roles, whyUs }: IndustryRolesProps) {
  return (
    <section className="py-20 md:py-32 bg-slate-50">
      <div className="container-custom max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Roles */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Roles We Hire For
            </h2>
            <p className="text-slate-600 mb-10 text-lg">
              We have direct requests from international employers for these specific skill sets.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {roles.map((role, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-slate-900">{role.title}</h3>
                  <div className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
                    {role.demand} Demand
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Why Us */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Why partner with us?
            </h2>
            <p className="text-slate-600 mb-10 text-lg">
              We understand the nuances of global recruitment in this specific sector. 
            </p>
            
            <ul className="space-y-6">
              {whyUs.map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-[#0D34E9]" />
                  </div>
                  <p className="ml-4 text-lg text-slate-700 font-medium leading-relaxed">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}
