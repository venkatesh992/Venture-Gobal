"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "Global Placements", value: 10000, suffix: "+" },
  { label: "Visa Success Rate", value: 98, suffix: "%" },
  { label: "Active Employer Partners", value: 500, suffix: "+" },
  { label: "Destinations", value: 25, suffix: "+" },
];

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame: number;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return count;
}

function StatItem({
  label,
  value,
  suffix,
  active,
}: {
  label: string;
  value: number;
  suffix: string;
  active: boolean;
}) {
  const count = useCountUp(value, active);
  return (
    <div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all hover:-translate-y-1 text-center flex flex-col items-center justify-center">
      <p className="font-display text-4xl font-bold tracking-tight text-[#0f172a] md:text-5xl">
        {count.toLocaleString()}
        <span className="text-[#0D34E9]">{suffix}</span>
      </p>
      <p className="mt-3 text-sm font-semibold text-slate-500 uppercase tracking-wider">{label}</p>
    </div>
  );
}

export function StatsCounter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-8 md:py-12">
      <div className="container-custom max-w-[1440px]">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat) => (
            <StatItem
              key={stat.label}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              active={isInView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
