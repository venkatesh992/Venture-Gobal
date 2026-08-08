"use server";

import { prisma } from "@/lib/prisma";
import { recruiterSchema, type RecruiterData } from "@/lib/validations";
import { revalidatePath } from "next/cache";

export async function submitRecruiter(data: RecruiterData) {
  try {
    const validatedData = recruiterSchema.parse(data);

    await prisma.recruiterSubmission.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        company: validatedData.company,
        message: validatedData.message,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to submit recruiter form:", error);
    return { success: false, error: "Failed to submit form. Please try again." };
  }
}

export async function updateRecruiterStatus(id: string, status: string) {
  try {
    await prisma.recruiterSubmission.update({
      where: { id },
      data: { status },
    });
    revalidatePath("/admin/recruiters");
    return { success: true };
  } catch (error) {
    console.error("Failed to update recruiter status:", error);
    return { success: false, error: "Failed to update status." };
  }
}
