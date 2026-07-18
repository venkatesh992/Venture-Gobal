"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, Briefcase } from "lucide-react";

export function JobSearchBar() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (keyword.trim()) params.set("q", keyword.trim());
    if (country.trim()) params.set("country", country.trim());
    if (category.trim()) params.set("category", category.trim());
    const qs = params.toString();
    router.push(qs ? `/find-jobs?${qs}` : "/find-jobs");
  };

  return (
    <section className="section-sm bg-surface">
      <div className="container-custom">
        <div className="mb-8 max-w-2xl">
          <p className="section-label">Search</p>
          <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
            Find your next role
          </h2>
          <p className="mt-3 text-[15px] text-muted">
            Filter by role, destination, or category — we’ll take it from there.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="grid grid-cols-1 gap-2 rounded-[var(--radius-lg)] bg-background p-2 md:grid-cols-[1.2fr_1fr_1fr_auto] md:gap-0 md:p-2"
        >
          <label className="flex min-w-0 items-center gap-3 rounded-[var(--radius-md)] bg-surface px-4">
            <Search size={18} className="shrink-0 text-muted" aria-hidden />
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Job title or keyword"
              className="h-14 w-full border-0 bg-transparent text-[15px] outline-none placeholder:text-muted-light"
              aria-label="Job title or keyword"
            />
          </label>
          <label className="flex min-w-0 items-center gap-3 rounded-[var(--radius-md)] bg-surface px-4 md:border-l md:border-border-light">
            <MapPin size={18} className="shrink-0 text-muted" aria-hidden />
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Country"
              className="h-14 w-full border-0 bg-transparent text-[15px] outline-none placeholder:text-muted-light"
              aria-label="Country"
            />
          </label>
          <label className="flex min-w-0 items-center gap-3 rounded-[var(--radius-md)] bg-surface px-4 md:border-l md:border-border-light">
            <Briefcase size={18} className="shrink-0 text-muted" aria-hidden />
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Category"
              className="h-14 w-full border-0 bg-transparent text-[15px] outline-none placeholder:text-muted-light"
              aria-label="Category"
            />
          </label>
          <button type="submit" className="btn btn-primary btn-lg w-full md:ml-2 md:w-auto">
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
