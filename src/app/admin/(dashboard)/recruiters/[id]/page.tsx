import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Mail, Phone, Briefcase, Building } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function RecruiterDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const recruiter = await prisma.recruiterSubmission.findUnique({
    where: { id },
  });

  if (!recruiter) {
    notFound();
  }

  const dateFormatted = new Intl.DateTimeFormat('en-US', { 
    month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' 
  }).format(new Date(recruiter.createdAt));

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-10">
      <div className="flex items-center justify-between">
        <Link 
          href="/admin/recruiters" 
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors font-medium"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Recruiters
        </Link>
        <div className="flex items-center gap-3">
          <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
            recruiter.status === 'pending' ? 'bg-orange-100 text-orange-600' :
            recruiter.status === 'contacted' ? 'bg-blue-100 text-blue-600' :
            'bg-emerald-100 text-emerald-600'
          }`}>
            {recruiter.status}
          </span>
        </div>
      </div>

      <header className="rounded-xl border border-border bg-surface p-6 md:p-8 shadow-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-600 text-2xl font-bold text-white shadow-sm">
                {recruiter.name.charAt(0)}
              </div>
              <div>
                <h1 className="font-display text-3xl font-bold text-foreground">
                  {recruiter.name}
                </h1>
                <p className="text-purple-600 font-medium mt-1">
                  {recruiter.company || "Independent Recruiter"}
                </p>
              </div>
            </div>
            
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-muted font-medium">
              <span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-muted-light" /> Submitted on {dateFormatted}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-6">
        {/* Contact Info */}
        <section className="rounded-xl border border-border bg-surface p-6 shadow-sm">
          <h3 className="text-[15px] font-bold text-foreground border-b border-border pb-3 mb-5 flex items-center gap-2">
            <Mail className="h-5 w-5 text-muted-light" /> Contact & Company Details
          </h3>
          <div className="space-y-4 max-w-2xl">
            <DetailRow label="Email Address" value={recruiter.email} />
            <DetailRow label="Phone Number" value={recruiter.phone} />
            <DetailRow label="Company Name" value={recruiter.company} />
          </div>
        </section>

        {/* Message */}
        <section className="rounded-xl border border-border bg-surface p-6 shadow-sm">
          <h3 className="text-[15px] font-bold text-foreground border-b border-border pb-3 mb-5 flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-muted-light" /> Collaboration Message
          </h3>
          <div className="prose prose-sm max-w-none text-muted leading-relaxed">
            {recruiter.message ? (
              <p className="whitespace-pre-wrap">{recruiter.message}</p>
            ) : (
              <p className="italic">No message provided.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string | null | undefined }) {
  return (
    <div className="grid grid-cols-[1fr_2fr] gap-4 py-1">
      <span className="text-[13px] font-medium text-muted">{label}</span>
      <span className="text-[13px] text-foreground font-semibold">{value || <span className="text-muted-light italic font-normal">Not provided</span>}</span>
    </div>
  );
}
