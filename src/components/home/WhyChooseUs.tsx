"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Globe2, FileCheck, Users } from "lucide-react";

const reasons = [
  {
    title: "Global Reach, Local Expertise",
    description:
      "We partner with top-tier organizations across the Gulf, Europe, North America, and Asia-Pacific to find the perfect cultural and professional fit.",
    icon: Globe2,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "End-to-End Visa & Relocation",
    description:
      "From documentation and embassy interviews to flight booking and pre-departure briefings, our dedicated immigration team handles it all.",
    icon: FileCheck,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Rigorous Talent Vetting",
    description:
      "Employers trust us because every candidate undergoes strict technical assessments, background checks, and language proficiency tests.",
    icon: ShieldCheck,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    title: "Dedicated Consultant Support",
    description:
      "You are never just a resume to us. You get a dedicated consultant guiding you through every step of your international career move.",
    icon: Users,
    color: "text-rose-600",
    bgColor: "bg-rose-50",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-10 md:py-16 bg-white relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.06)] z-20">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] rounded-full bg-blue-50/50 blur-3xl pointer-events-none" />
      
      <div className="container-custom max-w-[1440px] relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:w-5/12">
            <span className="text-[#0D34E9] font-bold tracking-wider text-sm uppercase mb-3 block">
              The VG Difference
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Why top talent & employers trust us globally.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              We don't just match resumes to job descriptions. We build lasting international careers and supply chain-critical workforce solutions with absolute transparency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/employers" 
                className="inline-flex justify-center items-center h-14 px-8 rounded-full bg-[#0D34E9] text-white font-bold hover:bg-blue-800 transition-colors shadow-[0_8px_20px_rgba(13,52,233,0.25)] hover:shadow-[0_12px_25px_rgba(13,52,233,0.35)]"
              >
                Hire Global Talent
              </Link>
              <Link 
                href="/about" 
                className="inline-flex justify-center items-center h-14 px-8 rounded-full bg-white text-slate-700 border border-slate-200 font-bold hover:bg-slate-50 hover:border-slate-300 transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </div>

          {/* Right Column - Grid */}
          <div className="lg:w-7/12 w-full">
            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
              {reasons.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className={`bg-white p-8 rounded-[1.5rem] border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgb(0,0,0,0.06)] transition-shadow duration-300 ${idx % 2 !== 0 ? 'sm:mt-8' : ''}`}
                >
                  <div className={`w-14 h-14 rounded-2xl ${item.bgColor} ${item.color} flex items-center justify-center mb-6`}>
                    <item.icon size={26} strokeWidth={2.2} />
                  </div>
                  <h3 className="font-display text-[20px] font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
