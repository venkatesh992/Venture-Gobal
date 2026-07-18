import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0926B0 0%, #0D34E9 45%, #0926B0 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 80%, rgba(255,255,255,0.18), transparent 35%), radial-gradient(circle at 90% 15%, rgba(147,197,253,0.35), transparent 40%)",
        }}
      />
      <div className="container-custom relative py-20 md:py-24">
        <div className="max-w-2xl text-white">
          <h2 className="font-display text-3xl font-semibold text-white md:text-5xl">
            Ready for your next move?
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/75 md:text-base">
            Share your skills and preferred countries — we’ll map opportunities
            that actually fit.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn btn-lg btn-on-dark">
              Get started
              <ArrowRight size={18} />
            </Link>
            <Link href="/find-jobs" className="btn btn-lg btn-ghost-on-dark">
              Browse jobs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
