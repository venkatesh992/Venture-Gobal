import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface IndustryHeroProps {
  name: string;
  description: string;
  heroImage: string;
}

export function IndustryHero({ name, description, heroImage }: IndustryHeroProps) {
  return (
    <section className="relative pt-[120px] pb-20 md:pt-[150px] md:pb-24 overflow-hidden bg-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt={name}
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-slate-300 hover:text-white transition-colors text-sm font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
        
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            Industry Sector
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            {name}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/candidates" 
              className="inline-flex justify-center items-center h-14 px-8 rounded-full bg-[#0D34E9] text-white font-bold hover:bg-blue-800 transition-colors shadow-[0_8px_20px_rgba(13,52,233,0.25)]"
            >
              Submit Your CV
            </Link>
            <Link 
              href="/employers" 
              className="inline-flex justify-center items-center h-14 px-8 rounded-full bg-white/10 text-white border border-white/20 font-bold hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              Request Staffing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
