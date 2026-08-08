"use server";

import { prisma } from "@/lib/prisma";
import { contactSchema, ContactData } from "@/lib/validations";

export async function submitContact(data: ContactData) {
  try {
    const validatedData = contactSchema.parse(data);

    await prisma.contactSubmission.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone || null,
        subject: validatedData.subject || null,
        message: validatedData.message,
      },
    });

    return { success: true };
  } catch (error: any) {
    console.error("Failed to submit contact form:", error);
    return { success: false, error: error.message || "Failed to submit message. Please try again." };
  }
}
