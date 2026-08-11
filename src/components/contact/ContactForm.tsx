"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactData } from "@/lib/validations";
import { submitContact } from "@/app/actions/contact";
import { services } from "@/lib/content/services";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactData) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      const result = await submitContact(data);
      if (result.success) {
        setSubmitted(true);
        reset();
      } else {
        setError(result.error || "Failed to submit message");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {error && (
        <div className="rounded-md bg-red-50 p-4 mb-6 border border-red-200">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-foreground">
            Full name
          </span>
          <input 
            className="input" 
            {...register("name")}
            placeholder="Your name" 
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-foreground">
            Email
          </span>
          <input
            className="input"
            type="email"
            {...register("email")}
            placeholder="you@email.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-foreground">
            Phone
          </span>
          <input 
            className="input" 
            {...register("phone")}
            placeholder="+91 ..." 
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-foreground">
            Subject
          </span>
          <select
            className="input w-full"
            {...register("subject")}
          >
            <option value="">Select a subject...</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="General Inquiry">General Inquiry</option>
            <option value="Other">Other</option>
          </select>
          {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>}
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-foreground">
          Message
        </span>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Tell us about your goals, skills, and preferred countries."
          className="w-full rounded-[var(--radius-md)] border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-[border-color,box-shadow] placeholder:text-muted-light focus:border-primary focus:shadow-[0_0_0_4px_rgb(37_99_235_/_0.12)]"
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
      </label>
      <button 
        type="submit" 
        className="btn btn-primary btn-lg w-full sm:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
