import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, Mail, Phone, Briefcase, Globe, FileText } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function ApplicationDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const application = await prisma.application.findUnique({
    where: { id },
    include: { job: true },
  });

  if (!application) {
    notFound();
  }

  const dateFormatted = new Intl.DateTimeFormat('en-US', { 
    month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' 
  }).format(new Date(application.createdAt));

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
        <div className="flex items-center gap-3">
          <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
            application.status === 'pending' ? 'bg-orange-100 text-orange-600' :
            application.status === 'shortlisted' ? 'bg-blue-100 text-blue-600' :
            application.status === 'rejected' ? 'bg-slate-100 text-slate-500' :
            'bg-emerald-100 text-emerald-600'
          }`}>
            {application.status}
          </span>
        </div>
      </div>

      <header className="rounded-xl border border-border bg-surface p-6 md:p-8 shadow-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white shadow-sm">
                {application.firstName.charAt(0)}{application.lastName.charAt(0)}
              </div>
              <div>
                <h1 className="font-display text-3xl font-bold text-foreground">
                  {application.firstName} {application.lastName}
                </h1>
                <p className="text-primary font-medium mt-1">
                  {application.designation || "Candidate"} {application.job ? `• Applying for ${application.job.title}` : ""}
                </p>
              </div>
            </div>
            
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-muted font-medium">
              <span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-muted-light" /> Applied on {dateFormatted}</span>
              <span className="flex items-center gap-2"><Globe className="h-4 w-4 text-muted-light" /> {application.countryOfResidence || "Location Not Provided"}</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-3 min-w-[200px]">
            {application.resumeUrl && (
              <a href={application.resumeUrl} target="_blank" rel="noopener noreferrer" className="flex h-[38px] items-center justify-center gap-2 rounded-md bg-blue-600 px-4 text-sm font-medium text-white hover:bg-blue-700 transition-colors shadow-sm">
                <FileText className="h-4 w-4" /> View Resume <ExternalLink className="h-3 w-3 ml-1 opacity-70" />
              </a>
            )}
            {application.passportCopy && (
              <a href={application.passportCopy} target="_blank" rel="noopener noreferrer" className="flex h-[38px] items-center justify-center gap-2 rounded-md border border-border bg-surface px-4 text-sm font-medium text-foreground hover:bg-slate-50 transition-colors shadow-sm">
                View Passport Copy <ExternalLink className="h-3 w-3 ml-1 opacity-70" />
              </a>
            )}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Info */}
        <section className="rounded-xl border border-border bg-surface p-6 shadow-sm">
          <h3 className="text-[15px] font-bold text-foreground border-b border-border pb-3 mb-5 flex items-center gap-2">
            <Mail className="h-5 w-5 text-muted-light" /> Contact Details
          </h3>
          <div className="space-y-4">
            <DetailRow label="Email Address" value={application.email} />
            <DetailRow label="Phone Number" value={application.phone} />
            <DetailRow label="Nationality" value={application.nationality} />
            <DetailRow label="Country of Residence" value={application.countryOfResidence} />
          </div>
        </section>

        {/* Professional Info */}
        <section className="rounded-xl border border-border bg-surface p-6 shadow-sm">
          <h3 className="text-[15px] font-bold text-foreground border-b border-border pb-3 mb-5 flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-muted-light" /> Professional Profile
          </h3>
          <div className="space-y-4">
            <DetailRow label="Current Company" value={application.currentCompany} />
            <DetailRow label="Designation" value={application.designation} />
            <DetailRow label="Total GCC Experience" value={application.gccExperience} />
            <DetailRow label="Other Experience" value={application.otherExperience} />
          </div>
        </section>

        {/* Logistics & Expectations */}
        <section className="rounded-xl border border-border bg-surface p-6 shadow-sm md:col-span-2">
          <h3 className="text-[15px] font-bold text-foreground border-b border-border pb-3 mb-5 flex items-center gap-2">
            Expectations & Logistics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg bg-slate-50 p-5 border border-border">
              <p className="text-[11px] font-bold text-muted uppercase tracking-wider mb-2">Current Salary</p>
              <p className="text-foreground font-semibold text-lg">{application.currentSalary || "Not specified"}</p>
            </div>
            <div className="rounded-lg bg-blue-50/50 p-5 border border-blue-100">
              <p className="text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-2">Expected Salary</p>
              <p className="text-blue-900 font-semibold text-lg">{application.expectedSalary || "Not specified"}</p>
            </div>
            <div className="rounded-lg bg-slate-50 p-5 border border-border">
              <p className="text-[11px] font-bold text-muted uppercase tracking-wider mb-2">Notice Period</p>
              <p className="text-foreground font-semibold text-lg">{application.noticePeriod || "Not specified"}</p>
            </div>
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
