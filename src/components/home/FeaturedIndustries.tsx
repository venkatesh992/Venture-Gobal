"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Monitor, HeartPulse, HardHat, Factory, Utensils, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const industries = [
  {
    name: "Information Technology",
    icon: Monitor,
    description: "Software engineering, data science, and IT support.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    href: "/industries/it",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Healthcare",
    icon: HeartPulse,
    description: "Nurses, doctors, and medical support staff.",
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    href: "/industries/healthcare",
    badge: "250+ Openings",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Construction",
    icon: HardHat,
    description: "Engineers, project managers, and skilled trades.",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    href: "/industries/construction",
    badge: "Urgent Hiring",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Manufacturing",
    icon: Factory,
    description: "Plant managers, technicians, and supply chain.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    href: "/industries/manufacturing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Hospitality",
    icon: Utensils,
    description: "Chefs, hotel management, and customer service.",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    href: "/industries/hospitality",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Finance",
    icon: Briefcase,
    description: "Accountants, analysts, and corporate finance.",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    href: "/industries/finance",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
  },
];

export function FeaturedIndustries() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <section className="py-10 md:py-16 bg-[#f8fafc]">
      <div className="container-custom max-w-[1440px]">
        
        {/* Header with Slider Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#0D34E9] font-bold tracking-wider text-sm uppercase mb-3 block">
              Our Expertise
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-slate-600 text-lg">
              We specialize in connecting highly skilled professionals with top-tier employers across these core global sectors.
            </p>
          </div>
          
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={scrollLeft} 
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:border-[#0D34E9] hover:text-[#0D34E9] hover:shadow-md transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={scrollRight} 
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:border-[#0D34E9] hover:text-[#0D34E9] hover:shadow-md transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar scroll-smooth"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-none w-[85%] sm:w-[45%] lg:w-[calc(25%-1.125rem)] snap-start"
              >
                <Link 
                  href={industry.href}
                  className="group relative flex flex-col justify-between h-[360px] bg-white rounded-[1.5rem] p-6 border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] hover:border-transparent transition-all duration-500 overflow-hidden"
                >
                  {/* Hover Image Background */}
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 25vw"
                    className="object-cover opacity-0 group-hover:opacity-100 scale-110 group-hover:scale-100 transition-all duration-700 ease-out z-0"
                  />
                  
                  {/* Dark gradient overlay that appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                  {industry.badge && (
                    <div className="absolute top-6 right-6 z-20">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-rose-50 text-rose-600 border border-rose-100/50 shadow-sm group-hover:bg-rose-500 group-hover:text-white group-hover:border-rose-400 transition-colors duration-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 group-hover:bg-white mr-1.5 animate-pulse"></span>
                        {industry.badge}
                      </span>
                    </div>
                  )}

                  {/* Main Content Container (Pushes up on hover) */}
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div className="transform group-hover:-translate-y-4 transition-transform duration-500 ease-out">
                      <div className={`w-14 h-14 rounded-2xl ${industry.bgColor} ${industry.color} flex items-center justify-center mb-5 shadow-sm group-hover:bg-white/10 group-hover:text-white group-hover:backdrop-blur-md transition-all duration-500 ease-out`}>
                        <industry.icon size={26} strokeWidth={2.2} />
                      </div>
                      
                      <h3 className="font-display text-[22px] font-bold text-slate-900 mb-2 group-hover:text-white transition-colors duration-300">
                        {industry.name}
                      </h3>
                      
                      <p className="text-slate-500 text-[14px] font-medium leading-relaxed line-clamp-3 group-hover:text-slate-300 transition-colors duration-300">
                        {industry.description}
                      </p>
                    </div>
                    
                    {/* Explore Link (Reveals at bottom) */}
                    <div className="relative flex items-center text-sm font-bold text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-75">
                      <span>Explore Sector</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* Fading Edges for Slider */}
          <div className="absolute top-0 right-0 bottom-8 w-24 bg-gradient-to-l from-[#f8fafc] to-transparent pointer-events-none hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
