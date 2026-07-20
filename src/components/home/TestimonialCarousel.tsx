"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Senior HVAC Technician · Placed in UAE",
    quote:
      "VG Recruitment found me a strong placement quickly and handled my entire visa process without drama. I knew exactly where I stood at each step.",
  },
  {
    name: "Dr. Ananya Sharma",
    role: "Chief Medical Officer · Placed in Saudi Arabia",
    quote:
      "Their credentialing and relocation support were flawless. They didn't just find me a role; they secured my family's transition abroad.",
  },
  {
    name: "Vikram Desai",
    role: "IT Solutions Architect · Placed in Canada",
    quote:
      "A completely transparent process. VG's recruiters actually understood my technical stack and found an employer who valued my exact skill set.",
  },
  {
    name: "Priya Menon",
    role: "HR Director · Global Logistics Corp",
    quote:
      "We rely heavily on VG Recruitment to source reliable, vetted engineering and warehouse staff. They deliver top-tier talent every single time.",
  }
];

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const current = testimonials[index];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 6500);
    return () => clearInterval(timer);
  }, [total]);

  return (
    <section className="section bg-background">
      <div className="container-custom">
        <div className="mb-12 max-w-xl">
          <p className="section-label">Stories</p>
          <h2 className="font-display text-3xl font-semibold text-foreground md:text-5xl">
            From candidates abroad
          </h2>
        </div>

        <div className="relative max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current.name}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
            >
              <p className="font-display text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl md:text-4xl">
                “{current.quote}”
              </p>
              <footer className="mt-8">
                <cite className="not-italic text-base font-semibold text-foreground">
                  {current.name}
                </cite>
                <p className="mt-1 text-sm text-muted">{current.role}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-10 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIndex((prev) => (prev - 1 + total) % total)}
              className="grid h-11 w-11 place-items-center rounded-[var(--radius-md)] border border-border text-muted transition-colors hover:border-foreground hover:text-foreground"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => setIndex((prev) => (prev + 1) % total)}
              className="grid h-11 w-11 place-items-center rounded-[var(--radius-md)] border border-border text-muted transition-colors hover:border-foreground hover:text-foreground"
              aria-label="Next testimonial"
            >
              <ArrowRight size={18} />
            </button>
            <p className="ml-3 text-sm text-muted">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
