"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Amit Patel",
    role: "Electrician · UAE",
    quote:
      "VG found me a strong placement quickly and handled every document without drama. I knew where I stood at each step.",
  },
  {
    name: "Maria Gomez",
    role: "Nurse · Saudi Arabia",
    quote:
      "Visa support and settlement advice were practical — not generic. They helped me start work abroad with confidence.",
  },
  {
    name: "John Lee",
    role: "IT Specialist · Canada",
    quote:
      "Transparent process, clear timelines, and recruiters who actually cared about the fit — not just filling a seat.",
  },
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
