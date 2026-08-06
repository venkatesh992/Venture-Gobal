"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { editApplicationSchema, type EditApplicationData } from "@/lib/validations";
import { updateApplication } from "@/app/actions/applications";
import { Application } from "@prisma/client";

interface EditApplicationFormProps {
  application: Application;
  onSuccess?: () => void;
}

export function EditApplicationForm({ application, onSuccess }: EditApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditApplicationData>({
    resolver: zodResolver(editApplicationSchema),
    defaultValues: {
      firstName: application.firstName || "",
      lastName: application.lastName || "",
      email: application.email || "",
      phone: application.phone || "",
      countryOfResidence: application.countryOfResidence || "",
      nationality: application.nationality || "",
      designation: application.designation || "",
      currentCompany: application.currentCompany || "",
      gccExperience: application.gccExperience || "",
      otherExperience: application.otherExperience || "",
      currentSalary: application.currentSalary || "",
      expectedSalary: application.expectedSalary || "",
      noticePeriod: application.noticePeriod || "",
      status: (application.status as any) || "pending",
    },
  });

  const onSubmit = async (data: EditApplicationData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const result = await updateApplication(application.id, data);
      if (result.success) {
        setSubmitStatus("success");
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
      <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-surface p-10 text-center">
        <CheckCircle2 className="mb-4 h-16 w-16 text-emerald-500" />
        <h3 className="mb-2 font-display text-2xl font-bold text-foreground">Update Successful</h3>
        <p className="text-muted">The candidate's details have been updated.</p>
        <button
          onClick={() => setSubmitStatus("idle")}
          className="mt-6 flex h-10 items-center justify-center rounded-md bg-blue-600 px-6 text-sm font-medium text-white hover:bg-blue-700"
        >
          Edit Again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 rounded-xl border border-border bg-surface p-6 md:p-8 shadow-sm">
      {errorMessage && (
        <div className="rounded-md bg-red-50 p-4 text-sm text-red-600 border border-red-200">
          {errorMessage}
        </div>
      )}

      {/* Application Status */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Application Status</h3>
        <div>
          <label className="mb-1 block text-sm font-medium text-muted">Status</label>
          <select
            {...register("status")}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
          >
            <option value="pending">Pending</option>
            <option value="shortlisted">Shortlisted</option>
            <option value="active">Active</option>
            <option value="rejected">Rejected / Inactive</option>
          </select>
          {errors.status && <p className="mt-1 text-xs text-red-500">{errors.status.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Personal Details</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-muted">First Name *</label>
              <input
                {...register("firstName")}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName.message}</p>}
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-muted">Last Name *</label>
              <input
                {...register("lastName")}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName.message}</p>}
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-muted">Email *</label>
            <input
              type="email"
              {...register("email")}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-muted">Phone *</label>
            <input
              {...register("phone")}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
            {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-muted">Nationality</label>
            <input
              {...register("nationality")}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-muted">Country of Residence</label>
            <input
              {...register("countryOfResidence")}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-foreground border-b border-border pb-2">Professional Profile</h3>
          
          <div>
            <label className="mb-1 block text-sm font-medium text-muted">Designation</label>
            <input
              {...register("designation")}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-muted">Current Company</label>
            <input
              {...register("currentCompany")}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-muted">GCC Experience</label>
              <input
                {...register("gccExperience")}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-muted">Other Experience</label>
              <input
                {...register("otherExperience")}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-muted">Current Salary</label>
              <input
                {...register("currentSalary")}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-muted">Expected Salary</label>
              <input
                {...register("expectedSalary")}
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-muted">Notice Period</label>
            <input
              {...register("noticePeriod")}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-6 flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex h-10 items-center justify-center gap-2 rounded-md bg-blue-600 px-8 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-70 transition-colors"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            "Save Changes"
          )}
        </button>
      </div>
    </form>
  );
}
