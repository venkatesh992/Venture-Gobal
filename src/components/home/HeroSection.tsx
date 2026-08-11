import Link from "next/link";
import Image from "next/image";
import { Search, MapPin, Briefcase, FileText, User } from "lucide-react";

export function HeroSection() {
  return (
    <section className="py-10 md:py-16 px-4 md:px-8 max-w-[1440px] mx-auto">
      <div className="relative overflow-hidden bg-white rounded-[2.5rem] border border-slate-200/80 shadow-sm py-12 md:py-16 flex items-center">
        {/* Decorative background shapes (Spheres) */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 rounded-[2.5rem]">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[50%] rounded-full bg-blue-100/40 blur-3xl" />
          <div className="absolute top-[20%] -right-[10%] w-[30%] h-[40%] rounded-full bg-blue-200/30 blur-3xl" />

          {/* Floating 3D-like spheres */}
          <div
            className="absolute top-[20%] left-[2%] w-24 h-24 sm:w-32 sm:h-32 rounded-full opacity-90"
            style={{
              background: "radial-gradient(circle at 30% 30%, #4674A1, #04255A)",
              boxShadow: "0 10px 25px -5px rgba(4, 37, 90, 0.4), inset -10px -10px 20px rgba(0,0,0,0.1)",
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
                Who We Are
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0f172a] leading-[1.05] tracking-tight mb-6">
                Bridging the <br />
                <span className="text-slate-600">Global Talent Gap.</span>
              </h2>
              <p className="text-slate-600 text-lg mb-10 max-w-lg leading-relaxed">
                Venturoedge is a premier global recruitment and relocation agency. We specialize in connecting world-class talent with top-tier organizations across the globe, handling everything from sourcing to final relocation with absolute transparency.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full max-w-lg">
                <Link href="/about" className="w-full sm:w-auto inline-flex justify-center items-center h-14 px-10 rounded-full bg-[#04255A] text-white font-bold hover:bg-[#02183D] transition-all shadow-[0_8px_20px_rgba(4,37,90,0.25)] hover:shadow-[0_12px_25px_rgba(4,37,90,0.35)] hover:-translate-y-1 text-[15px]">
                  Read Our Full Story
                </Link>
                <Link href="/contact" className="w-full sm:w-auto inline-flex justify-center items-center h-14 px-8 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-1 text-[15px]">
                  Chat with an expert
                </Link>
              </div>


            </div>

            {/* Right Column - Image Collage */}
            <div className="lg:col-span-5 relative w-full aspect-square animate-hero-copy-delay lg:translate-x-4">
              <div className="h-full relative z-10 w-full rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white group flex items-center justify-center">
                <Image
                  src="/about_globe.jpg"
                  alt="Venturoedge Global Network"
                  fill
                  priority
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 border border-black/5 rounded-[2rem] pointer-events-none" />
              </div>


            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
