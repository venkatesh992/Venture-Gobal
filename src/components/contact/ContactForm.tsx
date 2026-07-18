"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-10 text-center">
        <h3 className="font-display text-2xl font-semibold text-foreground">
          Message received
        </h3>
        <p className="mt-3 text-[15px] text-muted">
          Thanks for reaching out. Our team will respond shortly.
        </p>
        <button
          type="button"
          className="btn btn-secondary mt-8"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-foreground">
            Full name
          </span>
          <input className="input" name="name" required placeholder="Your name" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-foreground">
            Email
          </span>
          <input
            className="input"
            type="email"
            name="email"
            required
            placeholder="you@email.com"
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-foreground">
            Phone
          </span>
          <input className="input" name="phone" placeholder="+91 ..." />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-foreground">
            Subject
          </span>
          <input
            className="input"
            name="subject"
            placeholder="Jobs, visa, training..."
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-foreground">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your goals, skills, and preferred countries."
          className="w-full rounded-[var(--radius-md)] border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-[border-color,box-shadow] placeholder:text-muted-light focus:border-primary focus:shadow-[0_0_0_4px_rgb(37_99_235_/_0.12)]"
        />
      </label>
      <button type="submit" className="btn btn-primary btn-lg w-full sm:w-auto">
        Send message
      </button>
    </form>
  );
}
