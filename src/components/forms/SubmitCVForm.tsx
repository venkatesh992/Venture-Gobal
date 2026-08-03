"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, UploadCloud, CheckCircle2, AlertCircle, FileText, X, Link as LinkIcon } from "lucide-react";
import { jobApplicationSchema, type JobApplicationData } from "@/lib/validations";
import { submitApplication } from "@/app/actions/applications";

interface SubmitCVFormProps {
  jobId?: string;
  onSuccess?: () => void;
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export function SubmitCVForm({ jobId, onSuccess }: SubmitCVFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  
  // File upload states
  const [uploadType, setUploadType] = useState<"file" | "url">("file");
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<JobApplicationData>({
    resolver: zodResolver(jobApplicationSchema),
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSelectedFileName(file.name);

    // Convert file to base64
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setValue("resumeUrl", event.target.result as string, { shouldValidate: true });
      }
    };
    reader.readAsDataURL(file);
  };

  const removeFile = () => {
    setSelectedFileName(null);
    setValue("resumeUrl", "");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const onSubmit = async (data: JobApplicationData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const result = await submitApplication(data, jobId);
      if (result.success) {
        setSubmitStatus("success");
        reset();
        setSelectedFileName(null);
        if (onSuccess) onSuccess();
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
          Thank you for submitting your application. Our recruitment team is reviewing your profile.
        </p>
        <button
          onClick={() => setSubmitStatus("idle")}
          className="btn btn-secondary mt-6 h-[34px] px-6 text-[12px] transition-all hover:bg-white/10"
        >
          Submit another application
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
          <label htmlFor="fullName" className="text-[12px] font-medium leading-none text-foreground/80">
            Full Name *
          </label>
          <input
            id="fullName"
            {...register("fullName")}
            className={inputClasses}
            placeholder="John Doe"
          />
          {errors.fullName && <p className="text-[11px] text-destructive">{errors.fullName.message}</p>}
        </motion.div>

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
      </div>

      <div className="grid gap-5 md:grid-cols-2">
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

        <motion.div variants={itemVariants} className="space-y-1.5">
          <label htmlFor="experience" className="text-[12px] font-medium leading-none text-foreground/80">
            Years of Experience
          </label>
          <input
            id="experience"
            {...register("experience")}
            className={inputClasses}
            placeholder="e.g. 5 Years"
          />
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <label className="text-[12px] font-medium leading-none text-foreground/80">
            Resume / CV *
          </label>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 text-[10px]">
            <button
              type="button"
              onClick={() => setUploadType("file")}
              className={`rounded-full px-3 py-1 transition-colors ${uploadType === "file" ? "bg-white/10 text-white" : "text-muted hover:text-white"}`}
            >
              Upload File
            </button>
            <button
              type="button"
              onClick={() => setUploadType("url")}
              className={`rounded-full px-3 py-1 transition-colors ${uploadType === "url" ? "bg-white/10 text-white" : "text-muted hover:text-white"}`}
            >
              Provide URL
            </button>
          </div>
        </div>

        {uploadType === "file" ? (
          <div className="relative overflow-hidden rounded-lg border border-dashed border-white/20 bg-black/10 transition-colors hover:border-primary/50 hover:bg-white/[0.02]">
            {selectedFileName ? (
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{selectedFileName}</p>
                    <p className="text-xs text-primary">Ready to submit</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={removeFile}
                  className="rounded-full p-2 text-muted hover:bg-white/10 hover:text-white transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-muted">
                  <UploadCloud className="h-6 w-6" />
                </div>
                <p className="text-sm font-medium text-foreground">Click to upload or drag and drop</p>
                <p className="mt-1 text-xs text-muted">PDF, DOCX up to 5MB</p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="absolute inset-0 cursor-pointer opacity-0"
                />
              </div>
            )}
          </div>
        ) : (
          <div className="relative">
            <LinkIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              {...register("resumeUrl")}
              className={`${inputClasses} pl-9`}
              placeholder="https://drive.google.com/..."
            />
          </div>
        )}
        {errors.resumeUrl && <p className="text-[11px] text-destructive">{errors.resumeUrl.message}</p>}
      </motion.div>
      
      <motion.div variants={itemVariants} className="space-y-1.5 pt-2">
        <label htmlFor="passportCopy" className="text-[12px] font-medium leading-none text-foreground/80">
          Passport Copy Link (Optional)
        </label>
        <input
          id="passportCopy"
          {...register("passportCopy")}
          className={inputClasses}
          placeholder="https://..."
        />
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
              Submit Application
            </span>
          )}
          {/* Subtle button glow effect */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 opacity-0 transition-opacity hover:opacity-100" />
        </button>
      </motion.div>
    </motion.form>
  );
}
