import { z } from "zod";

/**
 * Zod schemas for all form validations used across the application.
 */

// Contact form schema
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Job application form schema
export const jobApplicationSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  dateOfBirth: z.string().optional(),
  experience: z.string().optional(),
  currentJob: z.string().optional(),
  expectedSalary: z.string().optional(),
  resumeUrl: z.string().url().optional(),
  passportCopy: z.string().url().optional(),
});

// Course enrollment schema
export const enrollmentSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  batch: z.string().optional(),
});

// Type exports
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type JobApplicationData = z.infer<typeof jobApplicationSchema>;
export type EnrollmentData = z.infer<typeof enrollmentSchema>;
