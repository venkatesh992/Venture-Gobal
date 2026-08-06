import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { EditApplicationForm } from "@/components/forms/EditApplicationForm";

export const dynamic = "force-dynamic";

export default async function EditApplicationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const application = await prisma.application.findUnique({
    where: { id },
  });

  if (!application) {
    notFound();
  }

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-10">
      <div className="flex items-center justify-between">
        <Link 
          href="/admin/applications" 
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors font-medium"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Applications
        </Link>
      </div>

      <div>
        <h1 className="font-display text-3xl font-bold text-foreground">Edit Candidate</h1>
        <p className="mt-2 text-sm text-muted">Update the candidate's details and application status.</p>
      </div>

      <EditApplicationForm application={application} />
    </div>
  );
}
