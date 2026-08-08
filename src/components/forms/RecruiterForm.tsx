"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { recruiterSchema, type RecruiterData } from "@/lib/validations";
import { submitRecruiter } from "@/app/actions/recruiter";

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export function RecruiterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RecruiterData>({
    resolver: zodResolver(recruiterSchema),
  });

  const onSubmit = async (data: RecruiterData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const result = await submitRecruiter(data);
      if (result.success) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
        setErrorMessage(result.error || "Something went wrong.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-[var(--radius-lg)] border border-primary/20 bg-primary/5 p-10 text-center backdrop-blur-md"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
        >
          <CheckCircle2 className="mb-4 h-16 w-16 text-primary" />
        </motion.div>
        <h3 className="font-display text-2xl font-semibold text-foreground">
          Application Received
        </h3>
        <p className="mt-2 max-w-sm text-sm text-muted">
          Thank you for joining our network. Our team will get in touch with you shortly.
        </p>
        <button
          onClick={() => setSubmitStatus("idle")}
          className="btn btn-secondary mt-6 h-[34px] px-6 text-[12px] transition-all hover:bg-white/10"
        >
          Submit another request
        </button>
      </motion.div>
    );
  }

  const inputClasses =
    "flex h-[34px] w-full rounded-md border border-white/10 bg-black/20 px-3 py-[8px] text-[12px] text-foreground shadow-inner backdrop-blur-sm transition-colors placeholder:text-muted/50 focus-visible:border-primary/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/50 disabled:cursor-not-allowed disabled:opacity-50";

  return (
    <motion.form 
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.05 } }
      }}
      onSubmit={handleSubmit(onSubmit)} 
      className="space-y-5"
    >
      <AnimatePresence>
        {submitStatus === "error" && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center gap-2 overflow-hidden rounded-md border border-destructive/20 bg-destructive/10 p-3 text-sm text-destructive"
          >
            <AlertCircle className="h-4 w-4 shrink-0" />
            <p>{errorMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid gap-5 md:grid-cols-2">
        <motion.div variants={itemVariants} className="space-y-1.5">
          <label htmlFor="name" className="text-[12px] font-medium leading-none text-foreground/80">
            Full Name *
          </label>
          <input
            id="name"
            {...register("name")}
            className={inputClasses}
            placeholder="John Doe"
          />
          {errors.name && <p className="text-[11px] text-destructive">{errors.name.message}</p>}
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-1.5">
          <label htmlFor="company" className="text-[12px] font-medium leading-none text-foreground/80">
            Company Name
          </label>
          <input
            id="company"
            {...register("company")}
            className={inputClasses}
            placeholder="ABC Recruiting"
          />
        </motion.div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <motion.div variants={itemVariants} className="space-y-1.5">
          <label htmlFor="email" className="text-[12px] font-medium leading-none text-foreground/80">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={inputClasses}
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-[11px] text-destructive">{errors.email.message}</p>}
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-1.5">
          <label htmlFor="phone" className="text-[12px] font-medium leading-none text-foreground/80">
            Phone Number *
          </label>
          <input
            id="phone"
            {...register("phone")}
            className={inputClasses}
            placeholder="+1 234 567 890"
          />
          {errors.phone && <p className="text-[11px] text-destructive">{errors.phone.message}</p>}
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="space-y-1.5">
        <label htmlFor="message" className="text-[12px] font-medium leading-none text-foreground/80">
          How can we collaborate? *
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={4}
          className={`${inputClasses} h-auto py-2`}
          placeholder="Tell us about your requirements or partnership ideas..."
        />
        {errors.message && <p className="text-[11px] text-destructive">{errors.message.message}</p>}
      </motion.div>

      <motion.div variants={itemVariants} className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary relative h-[38px] w-full overflow-hidden text-[13px] transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Processing...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              Submit Request
            </span>
          )}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 opacity-0 transition-opacity hover:opacity-100" />
        </button>
      </motion.div>
    </motion.form>
  );
}
