import Link from "next/link";
import Image from "next/image";
import { Search, MapPin, Briefcase, FileText, User } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-[54px] pb-4 md:pt-[54px] md:pb-6 px-4 md:px-8 max-w-[1440px] mx-auto">
      <div className="relative overflow-hidden bg-white rounded-[2.5rem] border border-slate-200/80 shadow-sm py-6 md:py-8 flex items-center">
        {/* Decorative background shapes (Spheres) */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 rounded-[2.5rem]">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[50%] rounded-full bg-blue-100/40 blur-3xl" />
          <div className="absolute top-[20%] -right-[10%] w-[30%] h-[40%] rounded-full bg-blue-200/30 blur-3xl" />

          {/* Floating 3D-like spheres */}
          <div
            className="absolute top-[20%] left-[2%] w-24 h-24 sm:w-32 sm:h-32 rounded-full opacity-90"
            style={{
              background: "radial-gradient(circle at 30% 30%, #4A6BFC, #0D34E9)",
              boxShadow: "0 10px 25px -5px rgba(13, 52, 233, 0.4), inset -10px -10px 20px rgba(0,0,0,0.1)",
              animation: "float 6s ease-in-out infinite"
            }}
          />
          <div
            className="absolute bottom-[15%] right-[2%] w-32 h-32 sm:w-48 sm:h-48 rounded-full opacity-70"
            style={{
              background: "radial-gradient(circle at 30% 30%, #bfdbfe, #3b82f6)",
              boxShadow: "0 15px 35px -5px rgba(59, 130, 246, 0.3), inset -15px -15px 30px rgba(0,0,0,0.1)",
              animation: "float 8s ease-in-out infinite reverse"
            }}
          />
        </div>

        <div className="container-custom relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 xl:gap-16 items-center">

            {/* Left Column - Content */}
            <div className="lg:col-span-7 max-w-2xl animate-hero-copy">
              <span className="inline-block text-slate-500 font-bold tracking-widest text-xs mb-4 uppercase">
                VG Recruitment
              </span>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-[4.5rem] font-bold text-[#0f172a] leading-[1.05] tracking-tight mb-6">
                Your Gateway to <br />
                <span className="text-slate-600">Global Careers.</span>
              </h1>
              <p className="text-slate-600 text-lg mb-10 max-w-lg leading-relaxed">
                We connect skilled professionals with trusted employers across 25+ countries — from offer letter to arrival.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full max-w-lg">
                <Link href="/find-jobs" className="bg-[#0D34E9] hover:bg-[#0926B0] text-white h-14 px-8 rounded-2xl font-semibold transition-colors w-full sm:w-auto shadow-lg shadow-blue-900/20 flex items-center justify-center text-[15px]">
                  Explore open roles
                </Link>
                <Link href="/contact" className="bg-white border-2 border-slate-200 text-slate-700 hover:border-[#0D34E9] hover:text-[#0D34E9] h-14 px-8 rounded-2xl font-semibold transition-colors w-full sm:w-auto flex items-center justify-center text-[15px]">
                  Talk to a consultant
                </Link>
              </div>


            </div>

            {/* Right Column - Image Collage */}
            <div className="lg:col-span-5 relative h-[400px] sm:h-[500px] w-full animate-hero-copy-delay lg:translate-x-4">
              <div className="grid grid-cols-2 gap-4 h-full relative z-10">
                {/* Left tall image (White Collar) */}
                <div className="relative h-full rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
                  <Image
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80"
                    alt="Indian IT Professional"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 border border-black/5 rounded-[2rem] pointer-events-none" />
                </div>
                
                {/* Right stacked images */}
                <div className="grid grid-rows-2 gap-4 h-full">
                  {/* Top right (Blue Collar / Engineering) */}
                  <div className="relative h-full rounded-[2rem] overflow-hidden shadow-lg group">
                    <Image
                      src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                      alt="Indian Construction Engineer"
                      fill
                      priority
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 border border-black/5 rounded-[2rem] pointer-events-none" />
                  </div>
                  
                  {/* Bottom right (Healthcare) */}
                  <div className="relative h-full rounded-[2rem] overflow-hidden shadow-lg group">
                    <Image
                      src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80"
                      alt="Indian Healthcare Professional"
                      fill
                      priority
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 border border-black/5 rounded-[2rem] pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Floating Recruitment Badge */}
              <div className="absolute top-[35%] -left-8 sm:-left-12 z-20 bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4 animate-[float_4s_ease-in-out_infinite]">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Briefcase size={22} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Just Placed</p>
                  <p className="text-[15px] font-bold text-slate-900">Senior Engineer • Dubai</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
