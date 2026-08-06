"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { jobApplicationSchema, editApplicationSchema } from "@/lib/validations";
import fs from "fs/promises";
import path from "path";

// Helper to save base64 to public/uploads
async function saveBase64File(base64Data: string, prefix: string): Promise<string> {
  if (!base64Data.startsWith("data:")) return base64Data; // Return as-is if it's a regular URL/string
  
  const matches = base64Data.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
  if (!matches || matches.length !== 3) return base64Data;
  
  const mimeType = matches[1];
  const data = matches[2];
  
  // Very basic extension mapping
  let ext = ".bin";
  if (mimeType.includes("pdf")) ext = ".pdf";
  else if (mimeType.includes("word")) ext = ".docx";
  else if (mimeType.includes("png")) ext = ".png";
  else if (mimeType.includes("jpeg") || mimeType.includes("jpg")) ext = ".jpg";
  
  const fileName = `${prefix}-${Date.now()}${ext}`;
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  
  try {
    await fs.mkdir(uploadDir, { recursive: true });
    await fs.writeFile(path.join(uploadDir, fileName), data, "base64");
    return `/uploads/${fileName}`;
  } catch (e) {
    console.error("File saving error:", e);
    return base64Data; // Fallback
  }
}

export async function submitApplication(data: unknown, jobId?: string) {
  try {
    const parsedData = jobApplicationSchema.parse(data);

    // Save files if they are base64
    const finalResumeUrl = parsedData.resumeUrl 
      ? await saveBase64File(parsedData.resumeUrl, "resume") 
      : undefined;
      
    const finalPassportCopy = parsedData.passportCopy 
      ? await saveBase64File(parsedData.passportCopy, "passport") 
      : undefined;

    // Save to database
    const application = await prisma.application.create({
      data: {
        jobId: jobId || undefined,
        firstName: parsedData.firstName,
        lastName: parsedData.lastName,
        email: parsedData.email,
        phone: parsedData.phone,
        countryOfResidence: parsedData.countryOfResidence,
        nationality: parsedData.nationality,
        designation: parsedData.designation,
        currentCompany: parsedData.currentCompany,
        gccExperience: parsedData.gccExperience,
        otherExperience: parsedData.otherExperience,
        currentSalary: parsedData.currentSalary,
        expectedSalary: parsedData.expectedSalary,
        noticePeriod: parsedData.noticePeriod,
        resumeUrl: finalResumeUrl,
        passportCopy: finalPassportCopy,
      },
    });

    revalidatePath("/admin/applications");
    return { success: true, application };
  } catch (error) {
    console.error("Error submitting application:", error);
    return { success: false, error: "Failed to submit application. Please try again." };
  }
}

export async function updateApplication(id: string, data: unknown) {
  try {
    const parsedData = editApplicationSchema.parse(data);

    const application = await prisma.application.update({
      where: { id },
      data: {
        firstName: parsedData.firstName,
        lastName: parsedData.lastName,
        email: parsedData.email,
        phone: parsedData.phone,
        countryOfResidence: parsedData.countryOfResidence,
        nationality: parsedData.nationality,
        designation: parsedData.designation,
        currentCompany: parsedData.currentCompany,
        gccExperience: parsedData.gccExperience,
        otherExperience: parsedData.otherExperience,
        currentSalary: parsedData.currentSalary,
        expectedSalary: parsedData.expectedSalary,
        noticePeriod: parsedData.noticePeriod,
        status: parsedData.status,
      },
    });

    revalidatePath("/admin/applications");
    revalidatePath(`/admin/applications/${id}`);
    return { success: true, application };
  } catch (error) {
    console.error("Error updating application:", error);
    return { success: false, error: "Failed to update application. Please try again." };
  }
}
